export const generateParticles = (height, width) => {
    let particles = [];
    let numberOfParticles = (height * width) / 9000;

    for(let i = 0; i < numberOfParticles; i++) {
        let particle = {
            size: (Math.random() * 5) + 1,
            x: Math.random() * width,
            y: Math.random() * height,
            dx: (Math.random() * 5) - 2.5,
            dy: (Math.random() * 5) - 2.5,
            color: 'rgba(0,0,0,0.3)',
        }

        particles.push(particle);
    }

    return particles;
}

export const drawParticles = (ctx, particleX, particleY, particleSize, particleColor) => {
    ctx.beginPath();
    ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2, false);
    ctx.fillStyle = particleColor;
    ctx.fill();
}

export const updateParticles = (particleX, particleY, directionX, directionY, height, width) => {
    if(particleX > width || particleX < 0) {
        directionX = -directionX;
    }

    if(particleY > height || particleY < 0) {
        directionY = -directionY;
    }

    const updatedParticle = {
        x: particleX + directionX,
        y: particleY + directionY,
        dx: directionX,
        dy: directionY,
    };

    return updatedParticle;
}

export const connectParticles = (ctx, particles, canvasHeight, canvasWidth) => {
    for(let i = 0; i < particles.length; i++){
        for(let j = i; j < particles.length; j++){
            let dist = Math.pow((particles[i].x - particles[j].x), 2) 
                + Math.pow((particles[i].y - particles[j].y), 2);
            
            if(dist < (canvasHeight / 10) * (canvasWidth / 10)){
                ctx.strokeStyle='rgba(0,0,0,0.5)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}