function buildLevelWidget(){
    let width = canvas.width / 10;
    let height = canvas.height / 10;

    ctx.fillStyle = '#fff';
    ctx.fillRect(canvas.width - width,0,width,height);

    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.fontWeight = 'bold';
    ctx.font = '20px Roboto';
    ctx.fillText('Level: ' + (level + 1), canvas.width - width / 2, height / 2 + 5);
}