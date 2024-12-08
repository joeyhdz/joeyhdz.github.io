// Function to initialize particles with adjusted settings for different screen sizes
function initParticles() {
    let particleCount = 80; // Default particle count
    let particleSize = 7;   // Default particle size
    let particleSpeed = 1;  // Default movement speed

    // Adjust particle settings for mobile devices
    if (window.innerWidth <= 768) {
        particleCount = 60; // Reduce number of particles for smaller screens
        particleSize = 1;   // Smaller particles for mobile
        particleSpeed = .5;  // Slower movement speed for mobile
        linkDistance = 2;
    }

    // Initialize particles.js with dynamic settings
    particlesJS("particles-js", {
        particles: {
            number: {
                value: particleCount,
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
                value: particleSize,
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
                distance: 200,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: particleSpeed,
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
                resize: true // Enables responsiveness
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

    // Ensure particles align with the hero section height
    adjustParticlesHeight();
}

// Function to adjust #particles-js height dynamically based on #hero
function adjustParticlesHeight() {
    const particlesContainer = document.getElementById("particles-js");
    const heroSection = document.getElementById("hero");
    if (particlesContainer && heroSection) {
        particlesContainer.style.height = `${heroSection.offsetHeight}px`;
    }
}

// Initialize particles on page load
initParticles();

// Reinitialize particles and adjust height on window resize
window.addEventListener("resize", () => {
    document.getElementById("particles-js").innerHTML = ""; // Clear existing particles
    initParticles(); // Reinitialize particles with updated settings
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

// Toggle navigation menu for mobile
document.querySelector('.burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
