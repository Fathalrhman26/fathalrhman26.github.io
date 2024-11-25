// assets/js/scripts.js

(function() {
    'use strict';

    // Handle Preloader
    window.addEventListener('load', function() {
        const preloader = document.getElementById('Preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    });

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Neural Nexus Particle Animation
        initializeNeuralNexus();
    });

    // Search Functionality
    const searchInput = document.getElementById('SearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const sections = document.querySelectorAll('section');

            sections.forEach(function(section) {
                if (section.textContent.toLowerCase().includes(query)) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            // Show all sections if search input is empty
            if (!query) {
                sections.forEach(function(section) {
                    section.style.display = 'block';
                });
            }
        });
    }

    // Neural Nexus Particle Animation
    function initializeNeuralNexus() {
        const canvas = document.getElementById('NeuralNexusCanvas');
        if (!canvas) return;
        const context = canvas.getContext('2d');

        // Resize canvas to fit window
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle Array
        let particlesArray = [];

        // Particle Class
        class Particle {
            constructor(x, y) {
                this.x = x || Math.random() * canvas.width;
                this.y = y || Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }

            // Update particle position
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Boundary conditions
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX *= -1;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.speedY *= -1;
                }
            }

            // Draw particle
            draw() {
                context.fillStyle = '#00bcd4';
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }
        }

        // Initialize Particles
        function initParticles() {
            particlesArray = [];
            const numberOfParticles = (canvas.width * canvas.height) / 8000;
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        // Animate Particles
        function animateParticles() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(function(particle) {
                particle.update();
                particle.draw();
            });
            connectParticles();
            requestAnimationFrame(animateParticles);
        }

        // Connect Particles with Lines
        function connectParticles() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a + 1; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        const opacityValue = 1 - (distance / 100);
                        context.strokeStyle = `rgba(0, 188, 212, ${opacityValue})`;
                        context.lineWidth = 1;
                        context.beginPath();
                        context.moveTo(particlesArray[a].x, particlesArray[a].y);
                        context.lineTo(particlesArray[b].x, particlesArray[b].y);
                        context.stroke();
                    }
                }
            }
        }

        initParticles();
        animateParticles();
    }
})();
