import time
import llama_index
import os
from dotenv import load_dotenv
from groq import Groq, InternalServerError
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

# Load environment variables
load_dotenv()
groq_api_key = os.getenv("GROQ_API")

# Initialize LLM client
client = Groq(api_key=groq_api_key)
llm_model = "llama3-70b-8192"

# Create instance of Flask app
app = Flask(__name__, static_folder='llm_webpage', static_url_path='')
CORS(app) 

# System prompt for the chatbot
system_prompt = {
    "role": "system",
    "content": "You are a helpful assistant who is capable of assisting with all tasks including stocks, finance, health, and any topic that may come up."
}

chat_history = [system_prompt]

def get_llm_response(client, retries=3, delay=5):
    """Attempt to get a response from the LLM with retry logic."""
    for attempt in range(retries):
        try:
            response = client.chat.completions.create(
                model=llm_model,
                messages=chat_history,
                max_tokens=300,
                temperature=1.2
            )
            return response.choices[0].message.content
        except InternalServerError as e:
            if attempt < retries - 1:
                print(f"Service unavailable, retrying in {delay} seconds...")
                time.sleep(delay)
            else:
                raise e
    return None

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/chat", methods=["POST"])
def chat():
    global chat_history
    user_input = request.json.get("message", "")

    # Add user message to chat history
    chat_history.append({"role": "user", "content": user_input})

    # Get the response from the LLM with retry logic
    try:
        assistant_message = get_llm_response(client)
        if assistant_message is None:
            raise Exception("No response received from the LLM")
    except InternalServerError:
        assistant_message = "Sorry, the service is temporarily unavailable. Please try again later."

    # Add assistant's response to chat history
    chat_history.append({
        "role": "assistant",
        "content": assistant_message
    })

    # Return response to client
    return jsonify({"response": assistant_message})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
