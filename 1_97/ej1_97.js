
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x)  //
        {
//alert("ooo")
            if (x == 1) { //Módulo2
//alert("entre a funcion");
                //var M1 = document.getElementById("nivel").value;
                var M1=1
                var C = Grupo1_97(M1);
//alert("C    "+C)
            }
        }

var Sol = [];

function Grupo1_97(M1){




                var   b,a,c,p,q,d, r,s,t, u, v, w, m,W,x,x1,x2, pas1,pas2,pas3,pas;
                var  P = [];
                  W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  a = Math.floor(2*(Math.random() * 10)-20);
                  if (a==0) {
                    a = a+5
                  }
                  b = Math.floor(2*(Math.random() * 10)-20);
                  if (b==0) {
                    b = b+8
                  }
                  c = Math.floor(2*(Math.random() * 10)-20);
                  d = c/a
                  d = -1*d
                  e = c/b
                  e = -1*e
                  f = d/2
                  g = e/2
                  h = a/b
                  h = h*-1
                  i = b/a

                  pas = "$$ Solución\\ general $$"
                  pas1 = "$$ Sea \\ ax+by+c=0 \\ la \\ ecuación \\ de \\ una \\ recta $$"
                  pas2 = "$$ Calculemos \\ los \\ puntos \\ de \\ intersección \\ con \\ los \\ los \\ ejes \\ coordenados \\ , \\ es \\ decir \\ cuando \\ en \\ la \\ ecuacion \\ x=0 \\ y \\ y=0 $$"
                  pas3 = "$$ Para \\ hallar \\ el \\ x \\ donde \\ y = 0 \\ solo \\ sustiyuimos \\ y = 0 \\ en \\ la \\ ecuación \\ de \\ esta \\ manera $$"
                  pas4 = "$$ ax+b(0)+c = 0 \\ ahora \\ despejemos \\ x \\ $$"
                  pas5 = "$$ x = \\frac{-c}{a} $$"
                  pas6 = "$$ Para \\ hallar \\ el \\ y \\ donde \\ x = 0 \\ solo \\ sustiyuimos \\ x = 0 \\ en \\ la \\ ecuación \\ de \\ esta \\ manera $$"
                  pas7 = "$$ a(0)+by+c = 0 \\ ahora \\ despejemos \\ y \\ $$"
                  pas8 = "$$ y = \\frac{-c}{b} $$"
                  pas9 = "$$ Obtenemos \\ que \\ los \\ los \\ puntos \\ de \\ intersección \\ son \\ P(0,\\frac{-c}{b}) \\ y \\ Q(\\frac{-c}{a},0) $$"
                  pas10 = "$$ Ahora \\ encontremos \\ el \\ punto \\ medio \\ del \\ segmento \\ \\overline{PQ} \\ donde \\ x = \\frac{\\frac{-c}{a}+0}{2} = \\frac{-c}{2a} \\ y \\ y = \\frac{\\frac{-c}{b}+0}{2} = \\frac{-c}{2b}$$"
                  pas11 = "$$ Calculemos \\ tambien \\ su \\ pendiente \\ m = \\frac{ \\frac{-c}{b} - 0}{0 - \\frac{-c}{a}} = \\frac{-a}{b} $$"
                  pas12 = "$$ Aplicaremos \\ pendiente \\ inversa \\ y \\ de \\ signo \\ contrario \\ asi \\ la \\ pendiente \\ de \\ nuestra \\ recta \\ buscada \\ es \\ m_1 = \\frac{b}{a}  $$"
                  pas13 = "$$ Por \\ lo \\ tanto \\ nuestra \\ ecuacion \\ buscada \\ es \\ Y - \\frac{-c}{2b} = \\frac{b}{a} (X - \\frac{-c}{2a} ) $$"

                Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12+pas13


                pas = "$$ Solución\\ particular $$"
                pas1 = "$$ Sea \\ "+a+"x+"+b+"y+"+c+"=0 \\ la \\ ecuación \\ de \\ una \\ recta $$"
                pas2 = "$$ Calculemos \\ los \\ puntos \\ de \\ intersección \\ con \\ los \\ los \\ ejes \\ coordenados \\ , \\ es \\ decir \\ cuando \\ en \\ la \\ ecuacion \\ x=0 \\ y \\ y=0 $$"
                pas3 = "$$ Para \\ hallar \\ el \\ x \\ donde \\ y = 0 \\ solo \\ sustiyuimos \\ y = 0 \\ en \\ la \\ ecuación \\ de \\ esta \\ manera $$"
                pas4 = "$$ "+a+"x+"+b+"(0)+"+c+" = 0 \\ ahora \\ despejemos \\ x \\ $$"
                pas5 = "$$ x = \\frac{-"+c+"}{"+a+"} = "+d+" $$"
                pas6 = "$$ Para \\ hallar \\ el \\ y \\ donde \\ x = 0 \\ solo \\ sustiyuimos \\ x = 0 \\ en \\ la \\ ecuación \\ de \\ esta \\ manera $$"
                pas7 = "$$ "+a+"(0)+"+b+"y+"+c+" = 0 \\ ahora \\ despejemos \\ y \\ $$"
                pas8 = "$$ y = \\frac{-"+c+"}{"+b+"} = "+e+" $$"
                pas9 = "$$ Obtenemos \\ que \\ los \\ los \\ puntos \\ de \\ intersección \\ son \\ P(0,"+e+") \\ y \\ Q("+d+",0) $$"
                pas10 = "$$ Ahora \\ encontremos \\ el \\ punto \\ medio \\ del \\ segmento \\ \\overline{PQ} \\ donde \\ x = \\frac{"+d+"+0}{2} = "+f+" \\ y \\ y = \\frac{"+e+"+0}{2} = "+g+" $$"
                pas11 = "$$ Calculemos \\ tambien \\ su \\ pendiente \\ m = \\frac{ \\frac{-"+c+"}{"+b+"} - 0}{0 - \\frac{-"+c+"}{"+a+"}} = "+h+" $$"
                pas12 = "$$ Aplicaremos \\ pendiente \\ inversa \\ y \\ de \\ signo \\ contrario \\ asi \\ la \\ pendiente \\ de \\ nuestra \\ recta \\ buscada \\ es \\ m_1 = \\frac{"+b+"}{"+a+"} = "+i+"  $$"
                pas13 = "$$ Por \\ lo \\ tanto \\ nuestra \\ ecuacion \\ buscada \\ es \\ Y - "+g+" = "+i+" (X - "+f+" ) $$"

              Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12+pas13

                document.getElementById("SOL1").innerHTML = Sol[1];
                document.getElementById("SOL2").innerHTML = Sol[2];
                //document.getElementById("SOL3").innerHTML = Sol[3];
                //document.getElementById("SOL4").innerHTML = Sol[4];
                //document.getElementById("SOL5").innerHTML = Sol[5];


                scene = "\\(\\"+Sol[1]+"\\)"
                MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])


                t = Graph5(p,q)
                function Graph5(p,q) {
                  JXG.JSXGraph.freeBoard(board);
                  board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -5], axis: true});

                  // Create an arrow providing two points.
                    var p1 = board.create('point', [0, e]);
                    var p2 = board.create('point', [d, 0]);
                    var p3 = board.create('point', [f, g]);
                    var l1 = board.create('arrow', [p1, p3]);
                    var l2 = board.create('arrow', [p2, p3]);
                    var l3 = board.create('line', [p1,p3]);
                    var perp1 = board.create('perpendicular', [l1, p3]);
                    var st = board.create('slopetriangle', [l3, p1]);
                    var sr = board.create('slopetriangle', [perp1, p3]);
                    r = board.create('angle',[p1, p3, p2], {radius:3});
                    s = board.create('slider',[[-2,1], [2,1], [0, Math.PI*0.5, 2*Math.PI]]);
                    r.setAngle(function() {
                        return s.Value();
                    });
                    board.update();
                }
              }