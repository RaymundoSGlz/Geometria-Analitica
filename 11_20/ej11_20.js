
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
                  s3 = e*b
                  s4 = a*d
                  s5 = (s3*-1)+s4
                  s5 = s5*-1
                  o1 = s5/b
                  o2 = s5/a



                pas = "$$ Soluci\\acute{o}n  $$"
               pas1 = "$$ Sea \\ x + 3y - 6 = 0 \\ la \\ ecuación  \\ y \\ p(4,7) \\ el \\ punto  $$"
               pas2 = "$$ calculemos \\ la \\ pendiente \\ de \\ la \\ recta \\ despejando \\ y . $$"
               pas3 = "$$ y = \\frac{-1(x+6)}{3} $$"
               pas4 = "$$ La \\ pendiente \\ es \\ m_1 = -\\frac{1}{3} $$"
               pas5 = "$$ Aplicando \\ el \\ teorema \\ obtenemos \\ y - 7 = -\\frac{1}{3} (x-4)$$"
               pas6 = "$$ la \\ ecuacion \\ buscada \\ es \\ 3y + x - 11 = 0 $$"
               pas7 = "$$ aplicando \\ el \\ teorema \\ para \\ la \\ distancia \\ obtenemos :  $$"
               pas8 = "$$ d = \\ \\frac{1(4)+(3)(7)-6}{\\sqrt{"+"(1)^2+(3)^2"+"}}  $$"
               pas9 = "$$ d = \\ \\frac{19}{\\sqrt{"+"1+9"+"}} \\ = \\  \\frac{19}{\\sqrt{"+"10"+"}} $$"

               Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9

                pas = "$$ Soluci\\acute{o}n \\ particular $$"
                pas1 = "$$ Sea \\ "+a+"x + "+b+"y + "+c+" = 0 \\ la \\ ecuación  \\ y \\ O("+d+","+e+") \\ el \\ punto \\ origen $$"
                pas2 = "$$ calculemos \\ la \\ pendiente \\ de \\ la \\ recta \\ despejando \\ y . $$"
                pas3 = "$$ y = \\frac{-"+a+"x+6)}{"+b+"} $$"
                pas4 = "$$ La \\ pendiente \\ es \\ m_1 = -\\frac{"+a+"}{"+b+"} $$"
                pas5 = "$$ Aplicando \\ el \\ teorema \\ obtenemos \\ y - "+e+" = -\\frac{"+a+"}{"+b+"} (x-"+d+")$$"
                pas6 = "$$ la \\ ecuacion \\ buscada \\ es \\ "+b+"y + "+a+"x - "+s3+"+"+s4+" = 0 $$"
                pas7 = "$$ aplicando \\ el \\ teorema \\ para \\ la \\ distancia \\ obtenemos :  $$"
                pas8 = "$$ d = \\ \\frac{"+a+"("+d+")+("+b+")("+e+")+"+c+"}{\\sqrt{"+"("+a+")^2+("+b+")^2"+"}}  $$"
                pas9 = "$$ d = \\ \\frac{"+r1+"}{\\sqrt{"+""+r2+""+"}} \\ = \\  \\frac{"+r1+"}{"+r3+"} = "+r4+" $$"

               Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9
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
         var p2 = board.create('point', [0, o1]);
         var p3 = board.create('point', [0, s1])

     var l1 = board.create('line', [[0, s1], [s2, 0]]);
     var l2 = board.create('line', [[0, o1], [o2, 0]]);
     var tp = board.create('tapemeasure', [[0, 0], [4, 2]], {name:'dist'});
       var st = board.create('slopetriangle', [l1, p3]);
       var st1 = board.create('slopetriangle', [l2, p2]);
}

}