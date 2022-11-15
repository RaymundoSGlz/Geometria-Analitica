
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
                  a = Math.floor(3*(Math.random() * 10)-10);
                  b = Math.floor(3*(Math.random() * 10)-10);
                  c = Math.floor(3*(Math.random() * 10)-10);
                  d = Math.floor(3*(Math.random() * 10)-10);
                  e = Math.floor(3*(Math.random() * 10)-10);
                  r1 = (a*d)+(b*e)+c
                  r2 = (a*a)+(b*b)
                  r3 = Math.sqrt(r2)
                  r4 = r1/r3
                  if (r4<0) {
                    r4 = r4*-1
                  }
                  s1 = (c*-1)/b
                  s2 = (c*-1)/a



                pas = "$$ Soluci\\acute{o}n  $$"
               pas1 = "$$ Sea \\ 2x - 3y + 9 = 0 \\ la \\ ecuación  \\ y \\ O(0,0) \\ el \\ punto \\ origen $$"
               pas2 = "$$ aplicando \\ el \\ teorema \\ obtenemos :  $$"
               pas3 = "$$ d = \\ \\frac{2(0)+(-3)(0)+9}{\\sqrt{"+"(2)^2+(-3)^2"+"}}  $$"
               pas4 = "$$ d = \\ \\frac{9}{\\sqrt{"+"4+9"+"}} \\ = \\  \\frac{9}{\\sqrt{"+"13"+"}} $$"

               Sol[1] = pas+pas1+pas2+pas3+pas4

                pas = "$$ Soluci\\acute{o}n \\ particular $$"
                pas1 = "$$ Sea \\ "+a+"x + "+b+"y + "+c+" = 0 \\ la \\ ecuación  \\ y \\ O("+d+","+e+") \\ el \\ punto \\ origen $$"
                pas2 = "$$ aplicando \\ el \\ teorema \\ obtenemos :  $$"
                pas3 = "$$ d = \\ \\frac{"+a+"("+d+")+("+b+")("+e+")+"+c+"}{\\sqrt{"+"("+a+")^2+("+b+")^2"+"}}  $$"
                pas4 = "$$ d = \\ \\frac{"+r1+"}{\\sqrt{"+""+r2+""+"}} \\ = \\  \\frac{"+r1+"}{"+r3+"} = "+r4+" $$"

               Sol[2] = pas+pas1+pas2+pas3+pas4
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
     board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-12, 12, 20, -12], axis: true});

         var p1 = board.create('point', [d, e]);

     var l1 = board.create('line', [[0, s1], [s2, 0]]);
     var tp = board.create('tapemeasure', [[0, 0], [4, 2]], {name:'dist'});
}

}