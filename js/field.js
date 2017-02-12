var maxCol = 8;
var maxRow = 8;
var snake = [1,2];
var len = snake.length;

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

createField(maxRow, maxCol);

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function createFood() {
    var idCell = randomInteger(0, maxRow * maxCol);
    var elem = document.getElementById(idCell);
    if (!elem.classList.contains('snake')) {
        elem.classList.add('food');
    }
}

var a = setInterval(createFood, 500);

var first = 1;
var idLast;
var qwe=0;

function removeSnake(idTail){
    console.log(idTail);
    var elem = document.getElementById(idTail);
    elem.classList.remove('snake');
}

function runSnake() {


    if (first <= (maxCol * maxRow)) {
        var idFirst = first;
        len = snake.length;
        idLast = first - len;
        var elemHead = document.getElementById(idFirst);

        if(idLast > 0){
            console.log(">");
            removeSnake(idLast);

        }else if(idLast<=0 && qwe!=0 && qwe<maxCol*maxRow){
            qwe++;
            console.log("<");
            removeSnake(qwe);
        }

        if (elemHead.classList.contains('food')) {
            snake.push(1);
            len = snake.length;
        }
        elemHead.classList.remove('food');
        elemHead.classList.add('snake');
    }

    first++;

    if (first <= maxCol * maxRow) {
        setTimeout(runSnake, 50);
    }

    if(first > maxCol*maxRow){
        qwe = idLast;
        first = 1;
        setTimeout(runSnake, 50);
    }
}

runSnake();


// var maxCol = 16;
// var maxRow = 16;
// var snake = [73, 72, 71, 70];
// var len = snake.length;
//
//
// function createField(rowC, colC) {
//     var str = "";
//     var row = 1,
//         col = 1,
//         rowId,
//         colId;
//
//     for (r = 0; r < rowC; r++) {
//         rowId = "row" + row;
//         str += "<div id=" + rowId + ">";
//         for (c = 0; c < colC; c++) {
//             colId = "row" + row + "col" + col;
//             str += "<div class=square id=" + colId + "></div>";
//             col++;
//         }
//         str += "<div class=clear></div>";
//         str += "</div>";
//         row++;
//         col = 1;
//     }
//     var el = document.getElementById("field");
//     el.innerHTML = str;
// }
//
//createField(maxRow, maxCol);
//
//
// function randomInteger(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
// }
//
// function createFood() {
//     var idRowRand = randomInteger(0, maxRow);
//     var idColRand = randomInteger(0, maxCol);
//     var id = 'row' + idRowRand + 'col' + idColRand;
//     var elem = document.getElementById(id);
//     if(!elem.classList.contains('snake')) {
//         elem.classList.add('food');
//     }
// }
//
// var a = setInterval(createFood, 5000);
//
// // function generateSnake() {
// //     //var sn = document.getElementById("row1col1");
// //
// //     //console.log(len);
// //     for (var i = 1; i < len ; i++) {
// //         var id = 'row' + 1 + 'col' + i;
// //         var elem = document.getElementById(id);
// //         elem.classList.add('snake');
// //     }
// // }
// //
// // generateSnake();
//
// var x = 1;
// var y = 1;
//
// function eatFood(n) {
//     var elem = document.getElementById(n);
//     if(elem.classList.contains('food')) {
//         snake.push(1);
//         len = snake.length;
//     }
//     elem.classList.remove('food');
//     elem.classList.add('snake');
// }
//
//
// function runSnake() {
//
//     if (x < maxCol + 1) {
//         var id = 'row' + y + 'col' + x;
//         //console.log(id);
//         eatFood(id);
//     }
//     if (x > len && x < maxCol + 1) {
//         var idnext = 'row' + y + 'col' + (x - len);
//         //console.log(idnext);
//         var elemnext = document.getElementById(idnext);
//         elemnext.classList.remove('snake');
//
//     } else if (x > maxCol) {
//         var idpost = 'row' + y + 'col' + (x - len);
//         var elempost = document.getElementById(idpost);
//         elempost.classList.remove('snake');
//         var idn = 'row' + (y+1) + 'col' + (x-maxCol);
//         eatFood(idn);
//     }
//
//
//     x++;
//
//     if (x < maxCol + (len+1)) {
//         setTimeout(runSnake, 150);
//     } else{
//         x = 1;
//         y++;
//         if (y < maxRow) {
//             setTimeout(runSnake, 0);
//         } else{
//             //console.log(x + ' x')
//             for(i=1;i<maxCol+1;i++){
//                 // var idposte = 'row' + y + 'col' + (maxCol);
//                 // var elemposte = document.getElementById(idposte);
//                 // elemposte.classList.add('snake');
//                 var idpostc = 'row' + y + 'col' + i;
//                 var elempostc = document.getElementById(idpostc);
//                 elempostc.classList.remove('snake');
//             }
//             x = 1;
//             y = 1;
//             setTimeout(runSnake, 150);
//         }
//     }
//
// }
//
// runSnake();









