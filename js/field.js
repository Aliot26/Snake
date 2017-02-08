(function() {

    var maxCol = 16;
    var maxRow = 16;
    var direction = 'right';
    var snake = [73,72,71,5];


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
        if(!elem.hasAttribute('style')) {
            elem.style.background = "red";
        }
    }

    var a = setInterval(createFood, 500);

    function generateSnake() {
        //var sn = document.getElementById("row1col1");
        var len = snake.length;
        console.log(len);
        for (var i = 1; i < len+1; i++) {
            var id = 'row' + 1 + 'col' + i;
            var elem = document.getElementById(id);
            elem.style.background = "black";
        }
    }
    //generateSnake();

    var x = 1;
    var y = 1;

    function runSnake() {
        if (x < maxCol + 1) {
            var id = 'row' + y + 'col' + x;
            console.log(id);
            var elem = document.getElementById(id);
            elem.style.background = "black";
        }

            if(x > 3 && x < maxCol + 1){
                var idnext = 'row' + y + 'col' + (x - 3);
                console.log(idnext);
                var elemnext = document.getElementById(idnext);
                elemnext.style.background = "ghostwhite";
            } else if (x > maxCol) {
                var idpost = 'row' + y + 'col' + (x - 3);
                var elempost = document.getElementById(idpost);
                elempost.style.background = "ghostwhite";
            }
        x++;
        if (x < maxCol + 4) {
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

   /*

    function runSnake(i) {
        if (i >= 0 && i < (xmax * ymax)) {
            var tr = Math.floor(i / xmax);
            var td = i % xmax;
            var oTd = jQuery('#tbl').find('tr').eq(tr).find('td').eq(td);
            return oTd;
        } else {
            return false;
        }
    }*/
})();






