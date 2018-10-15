function getColor(forType = Player) {
    let calcLevel = level;
    let returnColor = '#E91E63';
    let colorsCount = colors.length - 1;

    if (calcLevel >= colorsCount) {
        calcLevel = level % colorsCount;
    }
    if (forType instanceof Player || forType instanceof Wall) {
        returnColor = colors[calcLevel];
    } else {
        returnColor = colors[colorsCount - calcLevel];
    }
    return returnColor;
}