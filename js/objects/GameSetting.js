class GameSetting {
    constructor() {
        this.value = 0;
        this.change = 0;
        this.limit = 0;
        gameSettings.push(this);
        return this;
    }

    setValue(value){
        this.value = value;
        return this;
    }

    setChange(change){
        this.change = change;
        return this;
    }

    setLimit(limit){
        this.limit = limit;
        return this;
    }

    levelUp() {
        this.value += this.change;

        if (this.change > 0 && this.value > this.limit
            || this.change < 0 && this.value < this.limit) {
            this.value = this.limit;
        }
        return this;
    }
}