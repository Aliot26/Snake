(function () {

    var maxCol = 16;
    var maxRow = 16;
    var snake = [73, 72, 71, 5];
    var len = snake.length;


    function createField(rowC, colC) {
        var str = "";
        var row = 1,
            col = 1,
            rowId,
            colId;

        for (r = 0; r < rowC; r++) {
            rowId = "row" + row;
            str += "<div id=" + rowId + ">";
            for (c = 0; c < colC; c++) {
                colId = "row" + row + "col" + col;
                str += "<div class=square id=" + colId + "></div>";
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


    createField(maxRow, maxCol);

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    function createFood() {
        var idRowRand = randomInteger(0, maxRow);
        var idColRand = randomInteger(0, maxCol);
        var id = 'row' + idRowRand + 'col' + idColRand;
        var elem = document.getElementById(id);
        if(!elem.classList.contains('snake')) {
            elem.classList.add('food');
        }
    }

    var a = setInterval(createFood, 500);

    function generateSnake() {
        //var sn = document.getElementById("row1col1");

        //console.log(len);
        for (var i = 1; i < len ; i++) {
            var id = 'row' + 1 + 'col' + i;
            var elem = document.getElementById(id);
            elem.classList.add('snake');
        }
    }

    generateSnake();

    var x = 1;
    var y = 1;




    function runSnake() {

        if (x < maxCol + 1) {
            var id = 'row' + y + 'col' + x;
            //console.log(id);
            var elem = document.getElementById(id);
            if(elem.classList.contains('food')) {
                snake.push(1);
                len = snake.length;
                //console.log(snake);
                //console.log("-----------"+len);
            }
            elem.classList.remove('food');
            elem.classList.add('snake');
        }
        if (x > len && x < maxCol + 1) {
            var idnext = 'row' + y + 'col' + (x - len);
            //console.log(idnext);
            var elemnext = document.getElementById(idnext);
            elemnext.classList.remove('snake');

        } else if (x > maxCol) {
            var idpost = 'row' + y + 'col' + (x - len);
            var elempost = document.getElementById(idpost);
            elempost.classList.remove('snake');
            var idn = 'row' + (y+1) + 'col' + (x-maxCol);
            var elemf = document.getElementById(idn);
            elemf.classList.add('snake');
            console.log('++++' + idn);
            var last = x-len;
            //console.log(last + 'last');
            //console.log(x + 'x');
        }

        //last = x-len;
        //console.log(last);
        x++;

        // if(first === maxCol+1){
        //     y++;
        //     setTimeout(runSnake, 100);
        //     console.log(last);
        // }
        if (x < maxCol + (len+1)) {
            setTimeout(runSnake, 100);
        } else {
            x = 1;
            y++;
            if (y < maxRow + 1) {
                setTimeout(runSnake, 100);
            } else {
                x = 1;
                y = 1;
                setTimeout(runSnake, 100);
            }
        }

    }

    runSnake();


})();






