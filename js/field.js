/**
 * Field of the snake
 */
function createField(rowC,colC) {
    var str = "";
    var row = 1,
        col = 1,
        rowId,
        cellId;

    for (r = 0; r < rowC; r++) {
        rowId = "row" + row;
        str += "<div id=" + rowId + ">";
        for (c = 0; c < colC; c++) {
            cellId = "row" + row + "col" + col;
            str += "<div class=square id=" + cellId + "></div>";
            col++;
        }
        str += "<div class=clear></div>";
        str += "</div>";
        row++;
        col = 1;
    }
    var el = document.getElementById("field");
    el.innerHTML = str;
}

var column = 16;
var row = 16;
createField(row,column);

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function createFood() {
    var idRowRand = randomInteger(0, row);
    var idColRand = randomInteger(0, column);
    var id = 'row' + idRowRand + 'col' + idColRand;
    var elem = document.getElementById(id);
    elem.style.background = "red";
    //var cellColor = elem.style.background("red");
}

// function isEmptyCell(idRowRand, idColRand) {
//     var id = 'row' + idRowRand + 'col' + idColRand;
//     var cellColor = (id, "background-color");
//     if(cellColor == "transparent" || cellColor == false || cellColor == "rgb(255, 255, 255)" || cellColor == BGCOLOR) { //empty cell
//         return true;
//     } else {
//         return false;
//     }
// }

var a = setInterval(createFood, 500);








