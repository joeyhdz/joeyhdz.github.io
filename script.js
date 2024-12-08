particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});


// Dynamic Scroll Progress Bar
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar'); // Get progress bar element
    const totalHeight = document.body.scrollHeight - window.innerHeight; // Calculate total scrollable height
    const scrollProgress = (window.scrollY / totalHeight) * 100; // Calculate scroll progress percentage
    progressBar.style.width = scrollProgress + '%'; // Set progress bar width dynamically
});

// Initialize Typed.js for the dynamic typed text
document.addEventListener("DOMContentLoaded", () => {
    new Typed(".typed-text", {
        strings: ["Data Scientist", "Machine Learning Engineer", "AI Enthusiast", "Software Developer"], // Add your dynamic text here
        typeSpeed: 50, // Speed of typing
        backSpeed: 30, // Speed of backspacing
        backDelay: 2000, // Delay before backspacing
        loop: true, // Loop the typing effect
        showCursor: true, // Show the blinking cursor
        cursorChar: "|", // Character for the cursor
    });
});
