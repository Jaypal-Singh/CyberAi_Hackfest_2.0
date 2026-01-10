import React, { useRef, useEffect } from 'react';

const SquareParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;

    // Configuration
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 250 : 1000;
    const speedZ = 10;
    const spreadMultiplier = 3;

    // Colors
    const colors = [
      '#581c87', '#7e22ce', '#a855f7', '#d8b4fe', '#2e1065', '#ffffff'
    ];

    // Resize Handle
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Particle Class
    class Particle {
      constructor() {
        this.init(true);
      }

      init(isFirstLoad) {
        this.x = (Math.random() - 0.5) * width * spreadMultiplier;
        this.y = (Math.random() - 0.5) * height * spreadMultiplier;

        // Smooth continuous flow
        this.z = isFirstLoad ? Math.random() * width * 2 : width * 2;

        this.size = Math.random() * 20 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.spinSpeed = (Math.random() - 0.5) * 0.05;
      }

      update() {
        this.z -= speedZ;

        if (this.z <= 0) {
          this.init(false);
        }

        this.rotation += this.spinSpeed;
      }

      draw() {
        const perspective = 300;
        const scale = perspective / (perspective + this.z);

        const sx = (this.x * scale) + (width / 2);
        const sy = (this.y * scale) + (height / 2);

        const size = this.size * scale;

        // Drawing
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;

        // Opacity based on depth (Dur wale dhundhle)
        ctx.globalAlpha = Math.min(1, scale * 2);

        ctx.fillRect(-size / 2, -size / 2, size, size);
        ctx.restore();
      }
    }

    // Init Particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#000',
        zIndex: -1 // Content ke piche rakhne ke liye
      }}
    />
  );
};

export default SquareParticles;