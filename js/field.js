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

var idRowRand = randomInteger(0, row);
var idColRand = randomInteger(0, column);
var id = 'row' + idRowRand + 'col' + idColRand;

function createFood() {
    var elem = document.getElementById(id);
    elem.style.background = "red";
    //var cellColor = elem.style.background("red");
}

// function isEmptyCell(idRowRand, idColRand) {
//     var id = 'row' + idRowRand + 'col' + idColRand;
//     var cellColor = YD.getStyle(id, "background-color");
//     if(cellColor == "transparent" || cellColor == false || cellColor == "rgb(255, 255, 255)" || cellColor == BGCOLOR) { //empty cell
//         return true;
//     } else {
//         return false;
//     }
// }

var a = setInterval(createFood, 500);


// var createFood = function() {
//     var row,
//         col,
//         len = 5,
//         score = 250;
//     while(true) {
//         row = Math.floor(Math.random() * maxRow) + 1;
//         col = Math.floor(Math.random() * maxCol) + 1;
//         if(this.isEmptyCell(row, col)) {
//             myFood = new Food(row, col, len, score);
//             return;
//         }
//     }
// };









// for (var i=0; i< 144; i++){
//     var f = document.getElementById("field");
//     if(f !==null){
//         var item = f.appendChild(document.createElement("div"));
//         item.classList.add("square");
//     }
// }



// var i = 0, count = 0;
//
// while (count < 8 * 8) {
//     var item = document.createElement('div');
//
//     for(i=0; i<8; i++){
//         for(j=0;j<8;j++){
//             item.append('<div class="square"></div>');
//         }
//     }
// count++;
//
//
// }





// function addField(){
//     for (var i = 0; i < 8; i++) {
//         for (var j = 0; j < 8; j++) {
//             if ((i%2==0 && j%2==0)|| (i%2!=0 && j%2!=0)){
//                 $("#board").append('<div class="s_kl"></div>');
//             }
//             else $("#board").append('<div class="t_kl"></div>');
//         }
//     }
// }