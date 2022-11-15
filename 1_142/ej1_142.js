
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x)  //
        {
//alert("ooo")
            if (x == 1) { //Módulo2
//alert("entre a funcion");
                //var M1 = document.getElementById("nivel").value;
                var M1=1
                var C = Grupo1_142(M1);
//alert("C    "+C)
            }
        }

var Sol = [];

function Grupo1_142(M1){




                var   A,B,C,p,q,d, r,s,t, u, v, w, m,W,x,x1,x2, pas1,pas2,pas3,pas;
                var  P = [];
                  W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  a = Math.floor(3*(Math.random() * 10)-15);
                  b = Math.floor(3*(Math.random() * 10)-15);
                  if (a<=0) {
                  a = (a-1)*-1
                  }
                  if (b<=0) {
                  b = (b-1)*-1
                  }
                  if (a==b) {
                  a = a+2
                  }
                  aa = a*a
                  aaa = aa*a
                  aab = aa*b
                  bb = b*b
                  bbb = bb*b
                  abb = a*bb
                  s1 = (abb-aab)/(bb-aa)
                  s1 = Math.round(s1 * 100)/100
                  s2 = (s1*a)/b
                  s2 = Math.round(s2 * 100)/100
                  s3 = a-s2
                  s3 = Math.round(s3 * 100)/100
                  s4 = s1-b
                  s4 = Math.round(s4 * 100)/100
                  s5 = s3-a
                  s5 = Math.round(s5 * 100)/100
                  s6 = s5*b
                  s6 = Math.round(s6 * 100)/100
                  s7 = s4*a
                  s7 = Math.round(s7 * 100)/100

                  pas = "$$ Solución \\ general $$"
                  pas0 = "$$ Sean \\ las \\ ecuaciones \\ (1) \\ \\frac{x}{a} + \\frac{y}{b} = 1 \\ ,\\ (2) \\ \\frac{x}{b} + \\frac{y}{a} = 1 \\ y \\ P(a,b) $$"
                  pas1 = "$$ Primero \\ hallemos \\ el \\ punto \\ de \\ interseccion \\ de \\ (1) \\ con \\ (2) $$"
                  pas2 = "$$ Para \\ ello \\ despejemos \\ X \\ de \\ (1)\\ : \\ \\frac{x}{a} = 1 - \\frac{y}{b} \\\\ (3) : \\ X = a - \\frac{ay}{b} \\\\ ahora \\ sustituyamos \\ en \\ (2) $$"
                  pas3 = "$$ \\frac{a - \\frac{ay}{b}}{b} + \\frac{y}{a} = 1 \\\\ \\frac{y}{a} - \\frac{ay}{b^2} = 1 - \\frac{a}{b} \\\\ Y = \\frac{ab^2 - a^2 b}{b^2 - a^2} \\ sustituyamos \\ este \\ valor \\ en \\ (3) $$"
                  pas4 = "$$ X = a - \\frac{a(\\frac{ab^2 - a^2 b}{b^2 - a^2})}{b} \\\\ X = a - \\frac{a^2 b - a^3}{b^2 - a^2} \\\\ Así \\ el \\ punto \\ de \\ interseción \\ es \\ Q(a - \\frac{a^2 b - a^3}{b^2 - a^2} , \\frac{ab^2 - a^2 b}{b^2 - a^2}) $$"
                  pas5 = "$$ Ahora \\ utilicemos \\ el \\ teorema \\ para \\ encontrar \\ la \\ ecuacion \\\\ Y - b = (\\frac{\\frac{ab^2 - a^2 b}{b^2 - a^2} - b}{a - \\frac{a^2 b - a^3}{b^2 - a^2} - a})(X - a)  $$"
                  pas6 = "$$ Y - b = (\\frac{ab^2 - b^3}{- a^2 b + a^3})(X - a) \\\\ la \\ ecuación \\ buscada \\ es : \\\\ (- a^2 b + a^3)Y - b(- a^2 b + a^3) = (ab^2 - b^3)X - a(ab^2 - b^3)   $$"
                Sol[1] = pas+pas0+pas1+pas2+pas3+pas4+pas5+pas6

                pas = "$$ Solución \\ particular $$"
                pas0 = "$$ Sean \\ las \\ ecuaciones \\ (1) \\ \\frac{x}{"+a+"} + \\frac{y}{"+b+"} = 1 \\ ,\\ (2) \\ \\frac{x}{"+b+"} + \\frac{y}{"+a+"} = 1 \\ y \\ P("+a+","+b+") $$"
                pas1 = "$$ Primero \\ hallemos \\ el \\ punto \\ de \\ interseccion \\ de \\ (1) \\ con \\ (2) $$"
                pas2 = "$$ Para \\ ello \\ despejemos \\ X \\ de \\ (1)\\ : \\ \\frac{x}{"+a+"} = 1 - \\frac{y}{"+b+"} \\\\ (3) : \\ X = "+a+" - \\frac{"+a+"y}{"+b+"} \\\\ ahora \\ sustituyamos \\ en \\ (2) $$"
                pas3 = "$$ \\frac{"+a+" - \\frac{"+a+"y}{"+b+"}}{"+b+"} + \\frac{y}{"+a+"} = 1 \\\\ \\frac{y}{"+a+"} - \\frac{"+a+"y}{"+bb+"} = 1 - \\frac{"+a+"}{"+b+"} \\\\ Y = \\frac{"+abb+" - "+aab+"}{"+bb+" - "+aa+"}\\ = "+s1+" \\ sustituyamos \\ este \\ valor \\ en \\ (3) $$"
                pas4 = "$$ X = "+a+" - \\frac{"+a+"("+s1+")}{"+b+"} \\\\ X = "+a+" - "+s2+" \\ = "+s3+" \\\\ Así \\ el \\ punto \\ de \\ interseción \\ es \\ Q("+s3+" , "+s1+") $$"
                pas5 = "$$ Ahora \\ utilicemos \\ el \\ teorema \\ para \\ encontrar \\ la \\ ecuacion \\\\ Y - "+b+" = (\\frac{"+s1+" - "+b+"}{"+s3+" - "+a+"})(X - "+a+")  $$"
                pas6 = "$$ Y - b = (\\frac{"+s4+"}{"+s5+"})(X - a) \\\\ la \\ ecuación \\ buscada \\ es : \\\\ "+s5+"Y - "+s6+" = "+s4+"X - "+s7+"   $$"
              Sol[2] = pas+pas0+pas1+pas2+pas3+pas4+pas5+pas6

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

     var p1 = board.create('point', [a, b]);
     var p1 = board.create('point', [s3, s1]);
     var l1 = board.create('line', [[a, 0], [0, b]]);
     var l2 = board.create('line', [[b, 0], [0, a]]);
     var l3 = board.create('line', [[a, b], [s3, s1]]);
     var tp = board.create('tapemeasure', [[0, 0], [4, 2]], {name:'dist'});

}

}