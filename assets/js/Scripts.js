// Scripts.js

(function() {
    'use strict';

    // Function to handle Preloader
    window.addEventListener('load', function() {
        const Preloader = document.getElementById('Preloader');
        if (Preloader) {
            Preloader.style.display = 'none';
        }
    });

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize Neural Nexus Particle Animation
        InitializeNeuralNexus();
    });

    // Function to initialize Search Functionality
    const SearchInput = document.getElementById('SearchInput');
    if (SearchInput) {
        SearchInput.addEventListener('input', function() {
            const Query = this.value.toLowerCase();
            const Sections = document.querySelectorAll('section');

            Sections.forEach(function(Section) {
                if (Section.textContent.toLowerCase().includes(Query)) {
                    Section.style.display = 'block';
                } else {
                    Section.style.display = 'none';
                }
            });

            // Show all sections if search input is empty
            if (!Query) {
                Sections.forEach(function(Section) {
                    Section.style.display = 'block';
                });
            }
        });
    }

    // Function to initialize Neural Nexus Particle Animation
    function InitializeNeuralNexus() {
        const Canvas = document.getElementById('NeuralNexusCanvas');
        if (!Canvas) return;
        const Context = Canvas.getContext('2d');

        // Resize canvas to fit window
        function ResizeCanvas() {
            Canvas.width = window.innerWidth;
            Canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', ResizeCanvas);
        ResizeCanvas();

        // Particle array
        let ParticlesArray = [];

        // Particle class
        class Particle {
            constructor(x, y) {
                this.X = x || Math.random() * Canvas.width;
                this.Y = y || Math.random() * Canvas.height;
                this.Size = Math.random() * 3 + 1;
                this.SpeedX = Math.random() * 1 - 0.5;
                this.SpeedY = Math.random() * 1 - 0.5;
            }

            // Update particle position
            Update() {
                this.X += this.SpeedX;
                this.Y += this.SpeedY;

                // Boundary conditions
                if (this.X < 0 || this.X > Canvas.width) {
                    this.SpeedX *= -1;
                }
                if (this.Y < 0 || this.Y > Canvas.height) {
                    this.SpeedY *= -1;
                }
            }

            // Draw particle
            Draw() {
                Context.fillStyle = '#00bcd4';
                Context.beginPath();
                Context.arc(this.X, this.Y, this.Size, 0, Math.PI * 2);
                Context.closePath();
                Context.fill();
            }
        }

        // Initialize particles
        function InitParticles() {
            ParticlesArray = [];
            const NumberOfParticles = (Canvas.width * Canvas.height) / 8000;
            for (let i = 0; i < NumberOfParticles; i++) {
                ParticlesArray.push(new Particle());
            }
        }

        // Animate particles
        function AnimateParticles() {
            Context.clearRect(0, 0, Canvas.width, Canvas.height);
            ParticlesArray.forEach(function(Particle) {
                Particle.Update();
                Particle.Draw();
            });
            ConnectParticles();
            requestAnimationFrame(AnimateParticles);
        }

        // Connect particles with lines
        function ConnectParticles() {
            for (let a = 0; a < ParticlesArray.length; a++) {
                for (let b = a + 1; b < ParticlesArray.length; b++) {
                    const Dx = ParticlesArray[a].X - ParticlesArray[b].X;
                    const Dy = ParticlesArray[a].Y - ParticlesArray[b].Y;
                    const Distance = Math.sqrt(Dx * Dx + Dy * Dy);
                    if (Distance < 100) {
                        const OpacityValue = 1 - (Distance / 100);
                        Context.strokeStyle = `rgba(0, 188, 212, ${OpacityValue})`;
                        Context.lineWidth = 1;
                        Context.beginPath();
                        Context.moveTo(ParticlesArray[a].X, ParticlesArray[a].Y);
                        Context.lineTo(ParticlesArray[b].X, ParticlesArray[b].Y);
                        Context.stroke();
                    }
                }
            }
        }

        InitParticles();
        AnimateParticles();
    }
})();
