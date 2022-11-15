
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
                  s1=21/6



                pas = "$$ Soluci\\acute{o}n  $$"
               pas1 = "$$ Sea \\ A(-6,7) \\ el \\ punto  $$"
               pas2 = "$$ La \\ ecuación \\ intersecta \\ a \\ X \\ y \\ Y \\ así \\ que \\ es  \\ de \\ la \\ forma :  $$"
               pas3 = "$$ \\frac{x}{a} + \\frac{y}{b} = 1 \\ (1) $$"
               pas4 = "$$ sabemos \\ que \\ \\frac{a*b}{2} = 10.5 \\\\ a*b = 21 $$"
               pas5 = "$$ escribamos \\ (1) \\ así \\ \\frac{x}{a} + \\frac{ay}{ab} = 1 \\ y \\ sustituyamos \\ a*b  $$"
               pas6 = "$$ \\frac{x}{a} + \\frac{ay}{21} = 1 (2) $$"
               pas7 = "$$ necesitamos \\ que \\ (-6,7) \\ sea \\ solucion \\ asi \\ que \\ sustituimos $$"
               pas8 = "$$  \\frac{-6}{a} + \\frac{7a}{21} = 1 \\\\ 7a^2 - 126 = 21a \\\\ dividimos \\ entre \\ 7 \\ a^2 - 18 - 3a  $$"
               pas9 = "$$ factorizamos \\ quedando \\ de \\ esta \\ forma \\ (a - 6)(a + 3) \\ asi \\ nuestras \\ soluciones \\ son \\ a_1 = 6 \\ y \\ a_2 = -3  $$"
               pas10 = "$$ sustituyendo \\ valores \\ de \\ a \\ en \\ (2) \\ obtenemos  $$"
               pas11 = "$$ \\frac{x}{6} + \\frac{6y}{21} = 1  $$"
               pas12 = "$$ \\frac{x}{-3} + \\frac{-3y}{21} = 1 $$"

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

     var p1 = board.create('point', [-6, 7]);
     var l2 = board.create('line', [p1, [0, s1]]);

     var l1 = board.create('line', [p1, [0, -7]]);
     var tp = board.create('tapemeasure', [[0, 0], [4, 2]], {name:'dist'});
          var cc1 = board.create('polygon', [[0, 0], [0, -7], [-3, 0]]);
          var c1 = board.create('polygon', [[0, 0], [0, s1], [6, 0]]);


}

}