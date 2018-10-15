
function onKeyDown(e) {
    e = e || window.event;

        switch (e.keyCode) {
            case 38:
                player.direction = DIRECTIONS.up;
                break;
            case 40:
                player.direction = DIRECTIONS.down;
                break;
            default:
        }
}

function onKeyUp(e){
    e = e || window.event;

    if(e.keyCode === 38 || e.keyCode === 40){
        player.direction = DIRECTIONS.none;
    }
}

document.onkeydown = onKeyDown;
document.onkeyup = onKeyUp;
