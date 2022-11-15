
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 50, unitY: 20, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x)  //
        {
//alert("ooo")
            if (x == 1) { //Módulo2
//alert("entre a funcion");
                //var M1 = document.getElementById("nivel").value;
                var M1=1
                var C = Grupo1_1(M1);
//alert("C    "+C)
            }
        }

var Sol = [];

function Grupo1_1(M1){





                var   A,B,p,q, r,s, u, v, w, m,W, pas1,pas2,pas3,pas;
                  W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  s1=40/3



                pas = "$$ Soluci\\acute{o}n  $$"
               pas1 = "$$ Sea \\ 4x + 3y - 40 = 0 \\ la \\ ecuación \\ de \\ la \\ recta \\ l  \\ y \\ C(3,1) \\ el \\ centro \\ de \\ una \\ circunferencia \\ de \\ radio r = 5 $$"
               pas2 = "$$ bastara \\ con  \\ probar \\ que \\ la \\ distancia \\ de \\ l \\ a \\ C \\ = r :  $$"
               pas3 = "$$ d = | \\ \\frac{4(3)+(3)(1)-40}{\\sqrt{"+"(4)^2+(3)^2"+"}} | $$"
               pas4 = "$$ d = \\ \\frac{-25}{\\sqrt{"+"25"+"}} \\ = \\  5 \\ = \\ r $$"
               pas5 = "$$ Como \\ l \\ es \\ tangente \\ calculemos \\ su \\ terpendicular \\ que \\ pasa \\ por \\ C \\ para \\ hallar \\ el \\ punto \\ de \\ tangencia $$"
               pas6 = "$$ Despejemos \\ y \\ en \\ l \\ para \\ encontrar \\ su \\ pendiente \\ y = \\frac{-(4x-40)}{3}$$"
               pas7 = "$$ Observe \\ que \\ m = -\\frac{4}{3} \\ esto \\ implica \\ m´ = \\frac{3}{4} $$"
               pas8 = "$$ La \\ ecuación \\ de \\ la \\ perpendicular \\ l´ \\ es \\ Y - 1 = \\frac{3}{4} (X - 3) \\\\ 4y - 3x + 5 = 0  $$"
               pas9 = "$$ Para \\ hallar \\ el \\ punto \\ de \\ intersección \\ entre \\ l \\ y \\ l´ \\\\ despejemos \\ de \\ l \\ X = \\frac{-3y+40}{4} \\ y \\ sustituyamos \\ en \\ l´  $$"
               pas10 = "$$ 4Y - 3(\\frac{-3y}{4}y + 10) + 5 = 0 \\\\ 4Y + \\frac{9}{4}Y - 30 + 5 = 0 \\\\ \\frac{16Y+9Y}{4} = 25 \\\\ 25Y = 100 \\\\ Y = 4  $$"
               pas11 = "$$ Ahora \\ sustituyamos \\ Y = 4 \\ en \\ X = \\frac{-3y+40}{4} \\\\ X = \\frac{-3(4)+40}{4} \\\\ X = \\frac{28}{4} = 7  $$"
               pas12 = "$$ El \\ punto \\ de \\ tangencia \\ es \\ P(7,4) $$"

               Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12


               Sol[2] = ""
//alert("33333333333333333")


                document.getElementById("SOL1").innerHTML = Sol[1];
                document.getElementById("SOL2").innerHTML = Sol[2];
                //document.getElementById("SOL3").innerHTML = Sol[3];
                //document.getElementById("SOL4").innerHTML = Sol[4];
                //document.getElementById("SOL5").innerHTML = Sol[5];


                scene = "\\(\\"+Sol[1]+"\\)"
                MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])
                var t = Graph5(p,q)



   function Graph5(p,q) {

     JXG.JSXGraph.freeBoard(board);
     board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-12, 12, 12, -12], axis: true});

     var p1 = board.create('point', [3, 1]);
     var p2 = board.create('point', [7, 4]);
     var c1 = board.create('circle', [p1, p2]);
     var l2 = board.create('arrow', [p1, p2]);

     var l1 = board.create('line', [[0, s1], [10, 0]]);
     var tp = board.create('tapemeasure', [[0, 0], [4, 2]], {name:'dist'});

}

}