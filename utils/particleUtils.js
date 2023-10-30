export const generateParticles = (height, width) => {
    let particles = [];
    let numberOfParticles = (height * width) / 9000;

    for(let i = 0; i < numberOfParticles*2; i++) {
        let particle = {
            size: (Math.random() * 3) + 1,
            x: Math.random() * width,
            y: Math.random() * height,
            dx: (Math.random() * 5) - 2.5,
            dy: (Math.random() * 5) - 2.5,
            color: 'rgba(63, 0, 255, 1)',
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

export const updateParticles = (mouseX, mouseY, mouseRadius, particleX, particleY, 
                                particleSize, directionX, directionY, canvasHeight, canvasWidth) => {
    if(particleX > canvasWidth || particleX < 0) {
        directionX = -directionX;
    }

    if(particleY > canvasHeight || particleY < 0) {
        directionY = -directionY;
    }

    let diffX = mouseX - particleX;
    let diffY = mouseY - particleY;
    let dist = Math.sqrt(diffX * diffX + diffY * diffY);

    if(dist < mouseRadius + particleSize) {
        if(mouseX < particleX && particleX < canvasWidth - particleSize * 10){
            particleX += 10;
        }
        if(mouseX > particleX && particleX > particleSize * 10){
            particleX -= 10;
        }
        if(mouseY < particleY && particleY < canvasHeight - particleSize * 10){
            particleY += 10;
        }
        if(mouseY > particleY && particleY > particleSize * 10){
            particleY -= 10;
        }
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
    let opacityValue = 1;
    for(let i = 0; i < particles.length; i++){
        for(let j = i; j < particles.length; j++){
            let dist = Math.pow((particles[i].x - particles[j].x), 2) 
                + Math.pow((particles[i].y - particles[j].y), 2);
            
            if(dist < (canvasHeight / 10) * (canvasWidth / 10)){
                opacityValue = 1 - (dist / 15000);
                ctx.strokeStyle='rgba(63,0,255,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}