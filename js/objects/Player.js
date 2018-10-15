class Player {
    constructor() {
        this.r = PLAYER_RADIUS;
        this.x = PLAYER_X;
        this.y = canvas.height / 2 - this.r / 2;
        this.direction = DIRECTIONS.none;
        return this;
    }

    move() {
        switch (this.direction) {
            case DIRECTIONS.down:
                this.y += playerSpeed.value;
                break;
            case DIRECTIONS.up:
                this.y -= playerSpeed.value;
                break;
        }
        if(this.y < this.r){
            this.y = this.r
        }else if(this.y > canvas.height - this.r){
            this.y = canvas.height - this.r;
        }
        return this;
    }

    draw() {
        ctx.fillStyle = getColor(this);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        return this;
    }

    checkCollision() {
        let collides = false;

        for (let wall of walls) {
            if (this.y + this.r > wall.y
                && this.y - this.r < wall.y + wall.height
                && this.x + this.r > wall.x
                && this.x - this.r < wall.x + wall.width) {
                collides = true;
            }
        }
        return collides;
    }
}