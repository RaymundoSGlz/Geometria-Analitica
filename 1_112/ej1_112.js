
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x)  //
        {
//alert("ooo")
            if (x == 1) { //Módulo2
//alert("entre a funcion");
                //var M1 = document.getElementById("nivel").value;
                var M1=1
                var C = Grupo1_112(M1);
//alert("C    "+C)
            }
        }

var Sol = [];

function Grupo1_112(M1){




                var   A,B,C,p,q,d, r,s,t, u, v, w, m,W,x,x1,x2, pas1,pas2,pas3,pas;
                var  P = [];
                  W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

                  a = Math.floor(2*(Math.random() * 10)-10);
                  b = Math.floor(2*(Math.random() * 10)-10);
                  c = Math.floor(2*(Math.random() * 10)-10);
                  p = Math.floor(2*(Math.random() * 10)-10);
                  q = Math.floor(2*(Math.random() * 10)-10);
                  r = Math.floor(2*(Math.random() * 10)-10);
                  m = Math.floor(2*(Math.random() * 10)-10);
                  n = Math.floor(2*(Math.random() * 10)-10);
                  o = Math.floor(2*(Math.random() * 10)-10);
                  if (b==0) {
                    b=5
                  } else {
                  if (q==0) {
                    q=8
                  } else {
                  if (n==0) {
                  n=3
                  }
                  }
                  }
                  if (a==0) {
                    a=5
                  } else {
                  if (p==0) {
                    p=8
                  } else {
                  if (m==0) {
                  m=3
                  }
                  }
                  }
                  if ((a/b) == (p/q)) {
                    a = Math.floor(2*(Math.random() * 10)-10);
                  } else {
                    if ((a/b) == (m/n)) {
                    m = Math.floor(2*(Math.random() * 10)-10);
                    } else {
                    if ((p/q) == (m/n)) {
                    p = Math.floor(2*(Math.random() * 10)-10);
                    }
                    }
                  }
                  m1 = a*-1
                  m1 = m1/b
                  m1 = Math.round(m1 * 100)/100
                  m2 = p*-1
                  m2 = m2/q
                  m2 = Math.round(m2 * 100)/100
                  m3 = m*-1
                  m3 = m3/n
                  m3 = Math.round(m3 * 100)/100
                  a1 = (m2-m1)/(1+(m1*m2))
                  a1 = Math.round(a1 * 100)/100
                  s1 = Math.atan(a1)
                  s1 = (s1*180)/Math.PI
                  s1 = Math.round(s1 * 100)/100
                  a2 = (m3-m1)/(1+(m1*m3))
                  a2 = Math.round(a2 * 100)/100
                  s2 = Math.atan(a2)
                  s2 = (s2*180)/Math.PI
                  s2 = Math.round(s2 * 100)/100
                  a3 = (m3-m2)/(1+(m2*m3))
                  a3 = Math.round(a3 * 100)/100
                  s3 = Math.atan(a3)
                  s3 = (s3*180)/Math.PI
                  s3 = Math.round(s3 * 100)/100
                  d1 = c*-1
                  d1 = d1/b
                  d2 = c*-1
                  d2 = d2/a
                  d3 = r*-1
                  d3 = d3/q
                  d4 = r*-1
                  d4 = d4/p
                  d5 = o*-1
                  d5 = d5/n
                  d6 = o*-1
                  d6 = d6/m


                  pas = "$$ Solución\\ general $$"
                  pas1 = "$$ Sean \\ (1) \\ ax+by+c=0 \\\\ (2) \\ px+qy+r=0 \\\\ (3) \\ mx+ny+o=0 \\\\ ecuaciones \\ de \\ los \\ lados \\ de \\ un \\ triángulo $$"
                  pas2 = "$$ Calculemos \\ las \\ pendientes \\ de \\ cada \\ una \\ de \\ ellas \\ despejando \\ y   $$"
                  pas3 = "$$ Para \\ ax+by+c=0 \\\\ y = \\frac{-a}{b} (x-bc) \\ Así \\ obtenemos \\ M_1 = \\frac{-a}{b}  $$"
                  pas4 = "$$ Para \\ px+qy+r=0 \\\\ y = \\frac{-p}{q} (x-qr) \\ Así \\ obtenemos \\ M_2 = \\frac{-p}{q}  $$"
                  pas5 = "$$ Para \\ mx+ny+o=0 \\\\ y = \\frac{-m}{n} (x-no) \\ Así \\ obtenemos \\ M_3 = \\frac{-m}{n}  $$"
                  pas6 = "$$ Usando \\ el \\ teorema \\ obtenemos  $$"
                  pas7 = "$$ Ángulo \\ entre \\ (1) \\ y \\ (2) \\ = \\alpha \\ se \\ cálcula \\ como \\\\ Tan(\\alpha) = \\frac{ \\frac{-p}{q} - \\frac{-a}{b} }{1 + (\\frac{-a}{b})(\\frac{-p}{q})} \\\\ \\alpha = Arctan \\frac{ \\frac{-p}{q} - \\frac{-a}{b} }{1 + (\\frac{-a}{b})(\\frac{-p}{q})} $$"
                  pas8 = "$$ Ángulo \\ entre \\ (1) \\ y \\ (3) \\ = \\theta \\ se \\ cálcula \\ como \\\\ Tan(\\theta) = \\frac{ \\frac{-m}{n} - \\frac{-a}{b} }{1 + (\\frac{-a}{b})(\\frac{-m}{n})} \\\\ \\theta = Arctan \\frac{ \\frac{-m}{n} - \\frac{-a}{b} }{1 + (\\frac{-a}{b})(\\frac{-m}{n})} $$"
                  pas9 = "$$ Ángulo \\ entre \\ (1) \\ y \\ (3) \\ = \\gamma \\ se \\ cálcula \\ como \\\\ Tan(\\gamma) = \\frac{ \\frac{-m}{n} - \\frac{-p}{q} }{1 + (\\frac{-p}{q})(\\frac{-m}{n})} \\\\ \\gamma = Arctan \\frac{ \\frac{-m}{n} - \\frac{-p}{q} }{1 + (\\frac{-p}{q})(\\frac{-m}{n})} $$"

                Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9

                pas = "$$ Solución\\ particular $$"
                pas1 = "$$ Sean \\ (1) \\ "+a+"x+"+b+"y+"+c+"=0 \\\\ (2) \\ "+p+"x+"+q+"y+"+r+"=0 \\\\ (3) \\ "+m+"x+"+n+"y+"+o+"=0 \\\\ ecuaciones \\ de \\ los \\ lados \\ de \\ un \\ triángulo $$"
                pas2 = "$$ Calculemos \\ las \\ pendientes \\ de \\ cada \\ una \\ de \\ ellas \\ despejando \\ y   $$"
                pas3 = "$$ Para \\ "+a+"x+"+b+"y+"+c+"=0 \\\\ y = \\frac{-"+a+"}{"+b+"} (x-"+b+"("+c+")) \\ Así \\ obtenemos \\ M_1 = "+m1+"  $$"
                pas4 = "$$ Para \\ "+p+"x+"+q+"y+"+r+"=0 \\\\ y = \\frac{-"+p+"}{"+q+"} (x-"+q+"("+r+")) \\ Así \\ obtenemos \\ M_2 = "+m2+"  $$"
                pas5 = "$$ Para \\ "+m+"x+"+n+"y+"+o+"=0 \\\\ y = \\frac{-"+m+"}{"+n+"} (x-"+n+"("+o+")) \\ Así \\ obtenemos \\ M_3 = "+m3+"  $$"
                pas6 = "$$ Usando \\ el \\ teorema \\ obtenemos  $$"
                pas7 = "$$ Ángulo \\ entre \\ (1) \\ y \\ (2) \\ = \\alpha \\ se \\ cálcula \\ como \\\\ Tan(\\alpha) = \\frac{ "+m2+" - "+m1+" }{1 + ("+m1+")("+m2+")} \\\\ \\alpha = Arctan ("+a1+") = "+s1+" $$"
                pas8 = "$$ Ángulo \\ entre \\ (1) \\ y \\ (3) \\ = \\theta \\ se \\ cálcula \\ como \\\\ Tan(\\theta) = \\frac{ "+m3+" - "+m1+" }{1 + ("+m1+")("+m3+")} \\\\ \\theta = Arctan ("+a2+") = "+s2+" $$"
                pas9 = "$$ Ángulo \\ entre \\ (1) \\ y \\ (3) \\ = \\gamma \\ se \\ cálcula \\ como \\\\ Tan(\\gamma) = \\frac{ "+m3+" - "+m2+" }{1 + ("+m2+")("+m3+")} \\\\ \\gamma = Arctan ("+a3+") = "+s3+" $$"

                Sol[2]= pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9

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
                  board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-12, 12, 20, -12], axis: true});
                   var l1 = board.create('line', [[d2,0], [0,d1]]);
                   var l2 = board.create('line', [[d4,0], [0,d3]]);
                   var l3 = board.create('line', [[d6,0], [0,d5]]);
                   sec1 = board.create('angle', [l1, l2, [d4,0], [d2,0], 3]);


                 }

              }