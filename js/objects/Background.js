class Background {
    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = getColor(this);
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();
        return this;
    }
}