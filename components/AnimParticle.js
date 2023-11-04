import React, { useRef, useEffect } from 'react';

const AnimParticle = props => {
    const { generateParticle, drawParticle, updateParticle, 
            connectTrue, connectParticle, ...rest } = props;
    const canvasRef = useRef(null);
    let count = 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = generateParticle(canvas.height, canvas.width);
        let animationFrameId;

        let mouse = {
            x: null,
            y: null,
            radius: (canvas.width / 100) * (canvas.height / 100),
        }

        window.addEventListener("mousemove", //get mouse position
            function(event) {
                mouse.x = event.x;
                mouse.y = event.y;
            }
        );

        window.addEventListener("mouseout", //set mouse position to undefined whenever mouseout
            function(){
                mouse.x = undefined;
                mouse.y = undefined;
            }
        );

        window.addEventListener("resize", // update canvas dimensions whenever window resizes
            function(){
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                mouse.radius = (canvas.width / 100) * (canvas.height / 100);
                particles = generateParticle(canvas.height, canvas.width);
            }
        );

        const animate = () => {
            if(count % 2 == 0) {
                count++;
            } else {
                count--;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i = 0; i < particles.length; i++){
                drawParticle(ctx, particles[i].x, particles[i].y, 
                            particles[i].size, particles[i].color);

                let updatedParticle = updateParticle(mouse.x, mouse.y, mouse.radius,
                                        particles[i].x, particles[i].y, particles[i].size,
                                        particles[i].dx, particles[i].dy,
                                        canvas.height, canvas.width);

                particles[i].x = updatedParticle.x;
                particles[i].y = updatedParticle.y;
                particles[i].dx = updatedParticle.dx;
                particles[i].dy = updatedParticle.dy;
            }

            if (connectTrue) {
                connectParticle(ctx, particles, canvas.height, canvas.width);
            }

            animationFrameId = window.requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);

            window.removeEventListener("mousemove", //get mouse position
                function(event) {
                    mouse.x = event.x;
                    mouse.y = event.y;
                }
            );

            window.removeEventListener("mouseout", //set mouse position to undefined whenever mouseout
                function(){
                    mouse.x = undefined;
                    mouse.y = undefined;
                }
            );

            window.removeEventListener("resize", // update canvas dimensions whenever window resizes
                function(){
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    mouse.radius = (canvas.width / 100) * (canvas.height / 100);
                    particles = generateParticle(canvas.height, canvas.width);
                }
            );
        }

    }, [count]);

    return <canvas id="anim-particle" ref={canvasRef} {...rest} />
}

export default AnimParticle;