var maxCol = 8;
var maxRow = 8;
var snake = [1, 2];
var len = snake.length;
var first = 1;
var idLast;
var qwe = 0;

function createField(rowC, colC) {
    var str = "";
    var cell = 1;

    for (cell; cell <= maxCol * maxRow; cell++) {
        str += "<div class=square id=" + cell + "></div>";
        if ((cell % maxCol) === 0) {
            str += "<div class=clear></div>";
        }
    }
    var el = document.getElementById("field");
    el.innerHTML = str;
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function createFood() {
    var idCell = randomInteger(1, maxRow * maxCol);
    var elem = document.getElementById(idCell);
    if (!elem.classList.contains('snake')) {
        elem.classList.add('food');
    }
}

function removeSnake(idTail) {
    var elem = document.getElementById(idTail);
    elem.classList.remove('snake');
}

function runSnake() {
    if (first <= (maxCol * maxRow)) {
        var idFirst = first;
        len = snake.length;
        idLast = first - len;
        var elemHead = document.getElementById(idFirst);

        if (elemHead.classList.contains('food')) {
            snake.push(1);
            len = snake.length;
            createFood();
        }
        elemHead.classList.remove('food');
        elemHead.classList.add('snake');

        if (idLast > 0) {
            removeSnake(idLast);
        } else if (idLast <= 0 && qwe != 0 && qwe < maxCol * maxRow) {
            qwe++;
            removeSnake(qwe);
        }
    }

    first++;

    if (first <= maxCol * maxRow) {
        setTimeout(runSnake, 50);
    }

    if (first > maxCol * maxRow) {
        qwe = idLast;
        first = 1;
        setTimeout(runSnake, 50);
    }
}

createField(maxRow, maxCol);
createFood();
//setInterval(createFood, 500);
runSnake();
