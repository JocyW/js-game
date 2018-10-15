class Wall {
    constructor(y, height) {
        this.width = WALLS_WIDTH;
        this.height = height;
        this.x = canvas.width;
        this.y = y;
        this.active = true;
        walls.push(this);
        return this;
    }

    draw() {
        if (this.active) {
            ctx.fillStyle = getColor(this);
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.closePath();
            ctx.fill();
        }
        return this;
    }

    move() {
        if (this.x < -this.width) {
            this.active = false
        }

        if (this.active) {
            this.x -= wallSpeed.value;
        }

        return this;
    }

    static* getHoleX() {
        let holeX = canvas.height / 2 - holeHeight.value / 2;
        yield holeX;
        while (true) {
            let random = Math.floor(Math.random() * canvas.height * holeChange.value);
            if (random % 2 === 0) {
                holeX += random;
            } else if (random % 2 !== 0) {
                holeX -= random;
            }

            if (holeX < holeHeight.value) {
                holeX += random * 2;
            } else if (holeX > canvas.height - holeHeight.value) {
                holeX -= random * 2;
            }

            yield holeX;
        }
    }

    static createPair() {
        let holeX = holeGenerator.next();
        new Wall(0, holeX.value);
        new Wall(holeX.value + holeHeight.value, canvas.height - holeX.value - holeHeight.value);
    }
}