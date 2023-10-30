import React, { useRef, useEffect } from 'react';

const AnimParticle = props => {
    const { generateParticle, drawParticle, updateParticle, 
            connectTrue, connectParticle, ...rest } = props;
    const canvasRef = useRef(null);
    let count = 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particles = generateParticle(innerHeight, innerWidth);
        let animationFrameId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const animate = () => {
            if(count % 2 == 0) {
                count++;
            } else {
                count--;
            }
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for(let i = 0; i < particles.length; i++){
                drawParticle(ctx, particles[i].x, particles[i].y, 
                            particles[i].size, particles[i].color);

                let updatedParticle = updateParticle(particles[i].x, particles[i].y, 
                                                     particles[i].dx, particles[i].dy,
                                                     innerHeight, innerWidth);
                particles[i].x = updatedParticle.x;
                particles[i].y = updatedParticle.y;
                particles[i].dx = updatedParticle.dx;
                particles[i].dy = updatedParticle.dy;
            }

            if (connectTrue) {
                connectParticle(ctx, particles, innerHeight, innerWidth);
            }

            animationFrameId = window.requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }

    }, [count]);

    return <canvas id="anim-particle" ref={canvasRef} {...rest} />
}

export default AnimParticle;