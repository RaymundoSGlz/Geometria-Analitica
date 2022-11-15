
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x)  //
        {
//alert("ooo")
            if (x == 1) { //Módulo2
//alert("entre a funcion");
                //var M1 = document.getElementById("nivel").value;
                var M1=1
                var C = Grupo1_82(M1);
//alert("C    "+C)
            }
        }

var Sol = [];

function Grupo1_82(M1){




                var   a,b,x,y,p,q,u,v,m,n,s,t,z,ang;
                a = 0
                b = 0

                c = Math.floor(2*(Math.random() * 10)-20);
                d = 0

                u = Math.floor(2*(Math.random() * 10)-20);
                v = Math.floor(2*(Math.random() * 10)-20);

                m = c+u
                n = v

                x1 = c/2
                y1 = 0
                x2 = (c+u+c)/2
                y2 = v/2
                x3 = (u+u+c)/2
                y3 = v
                x4 = u/2
                y4 = v/2
                f1 = (c+u)/2
                f2 = v/2
                r = u+c
                r1 = v/u
                r1 = Math.round(r1 * 100)/100
                r2 = r1*x1
                r2 = Math.round(r2 * 100)/100
                r3 = (f1*f1)+(f2*f2)
                s = x1-f1
                r4 = (s*s)+(f2*f2)
                t = x3-f1
                r5 = t*t


                pas = "$$ Soluci\\acute{o}n \\ general $$"
               pas1 = "$$ Sean \\ los \\ puntos \\ A(0,0)\\ , \\ B(c,0) \\ , \\ C(u+c,v) \\ y \\ D(u,v) \\ vértices \\ de \\ un \\ cuadrilátero  $$"
               pas2 = "$$ Cálculemos \\ los \\ puntos \\ medios \\ de \\ cada  \\ segmento \\ donde   $$"
               pas3 = "$$ p_m \\overline{AB} = E ⇒ x_1 = \\frac{0+c}{2} = \\frac{c}{2} \\ \\ , \\ y_1 = \\frac{0+0}{2} = 0 $$"
               pas4 = "$$ p_m \\overline{BC} = F ⇒ x_2 = \\frac{c+u+c}{2} \\ \\ , \\ y_2 = \\frac{0+v}{2} = \\frac{v}{2} $$"
               pas5 = "$$ p_m \\overline{CD} = G ⇒ x_3 = \\frac{u+c+u}{2} \\ \\ , \\ y_3 = \\frac{v+v}{2} = v $$"
               pas6 = "$$ p_m \\overline{DA} = H ⇒ x_4 = \\frac{u+0}{2} = \\frac{u}{2} \\ \\ , \\ y_4 = \\frac{v+0}{2} = \\frac{v}{2} $$"
               pas7 = "$$ se \\ tiene \\ que \\ \\overline{AB}||\\overline{CD} \\ y \\ \\overline{BC}||\\overline{DA} $$"
               pas8 = "$$ se \\ tiene \\ que \\ las \\ diagonales \\ son \\overline{AC} \\ y \\overline{BD} $$"
               pas9 = "$$ Encontremos \\ el \\ punto \\ de \\ intersección \\ de \\ \\overline{EG}\\ , \\overline{FH}\\ , \\overline{AC}  $$"
               pas10 = "$$ Para \\ ello \\ plantearemos \\ las \\ siguientes \\ ecuaciones \\ : \\ (1)\\ Y - 0 = \\frac{0 - v}{ \\frac{c}{2} - \\frac{u+c+u}{2}} (X - \\frac{c}{2} )\\ , \\ (2)\\ Y - \\frac{v}{2} = \\frac{\\frac{v}{2} - \\frac{v}{2}}{\\frac{c+u+c}{2}-\\frac{u}{2}} (X - \\frac{u}{2} ) \\ que \\ pasan \\ por \\ E,G \\ y \\ F,H \\ respectivamente $$"
               pas11 = "$$ Para \\ encontrar  \\ el \\ punto \\ de \\ intersección \\ despejemos \\ Y \\ en \\ (2) \\ y \\ sustituyamos \\ en \\ (1) \\ para \\ encontrar \\ X \\ observemos \\ que \\ Y = \\frac{v}{2}    $$"
               pas12 = "$$ Asi \\ Tenemos \\ lo \\ siguiente  \\frac{v}{2} = \\frac{v}{u} (X - \\frac{c}{2} ), \\ simplificando: \\ $$"
               pas13 = "$$ \\frac{v}{2} = \\frac{v}{u} (X) - \\frac{v*c}{2u} \\ , \\ continuando \\ obtenemos \\ \\frac{v*u(u+c)}{2u*w} = X \\ $$"
               pas14 = "$$ Por \\ lo \\ tanto \\ nuestro \\ punto \\ de \\ intersección \\ es \\ P( \\frac{u+c}{2}, \\frac{v}{2})  $$"
               pas15 = "$$ Cálculemos \\ ahora \\  $$"
               pas16 = "$$ \\overline{|AP|} = "+"\\sqrt{"+"(0 - \\frac{u+c}{2} )^2+(0- \\frac{v}{2})^2"+"}"+" = \\frac{"+"\\sqrt{"+"(u+c)^2 + v^2"+"}"+"}{2} $$"
               pas17 = "$$ \\overline{|PC|} = "+"\\sqrt{"+"(u+c - \\frac{u+c}{2} )^2+(v- \\frac{v}{2})^2"+"}"+" = \\frac{"+"\\sqrt{"+"(u+c)^2 + v^2"+"}"+"}{2} $$"
               pas18 = "$$ \\overline{|EP|} = "+"\\sqrt{"+"( \\frac{c}{2} - \\frac{u+c}{2} )^2+(0 - \\frac{v}{2})^2"+"}"+" = \\frac{"+"\\sqrt{"+"(u)^2 + v^2"+"}"+"}{2}  $$"
               pas19 = "$$ \\overline{|PG|} = "+"\\sqrt{"+"( \\frac{u+c+u}{2} - \\frac{u+c}{2} )^2+(v- \\frac{v}{2})^2"+"}"+" = \\frac{"+"\\sqrt{"+"(u)^2 + v^2"+"}"+"}{2} $$"
               pas20 = "$$ \\overline{|FP|} = "+"\\sqrt{"+"( \\frac{c+u+c}{2} - \\frac{u+c}{2} )^2+(\\frac{v}{2}- \\frac{v}{2})^2"+"}"+" = \\frac{"+"\\sqrt{"+"c^2"+"}"+"}{2} = \\frac{c}{2} $$"
               pas21 = "$$ \\overline{|PH|} = "+"\\sqrt{"+"( \\frac{u}{2} - \\frac{u+c}{2} )^2+(\\frac{v}{2}- \\frac{v}{2})^2"+"}"+" = \\frac{"+"\\sqrt{"+"c^2"+"}"+"}{2} = \\frac{c}{2} $$"
               pas22 = "$$ observemos \\ así \\ que \\ el \\ punto \\ de \\ interseccion \\ de \\ todos \\ los \\ segmentos \\ de \\ recta \\ es \\ exactamente \\ el \\ punto \\ medio \\ de \\ cada \\ uno  $$"

               Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12+pas13+pas14+pas15+pas16+pas17+pas18+pas19+pas20+pas21+pas22

               pas = "$$ Soluci\\acute{o}n \\ general $$"
              pas1 = "$$ Sean \\ los \\ puntos \\ A(0,0)\\ , \\ B("+c+",0) \\ , \\ C("+r+","+v+") \\ y \\ D("+u+","+v+") \\ vértices \\ de \\ un \\ cuadrilátero  $$"
              pas2 = "$$ Cálculemos \\ los \\ puntos \\ medios \\ de \\ cada  \\ segmento \\ donde   $$"
              pas3 = "$$ p_m \\overline{AB} = E ⇒ x_1 = \\frac{0+"+c+"}{2} = \\ "+x1+" \\ \\ , \\ y_1 = \\frac{0+0}{2} = 0 $$"
              pas4 = "$$ p_m \\overline{BC} = F ⇒ x_2 = \\frac{"+r+"+"+c+"}{2} = "+x2+" \\ \\ , \\ y_2 = \\frac{0+"+v+"}{2} = \\ "+y2+" $$"
              pas5 = "$$ p_m \\overline{CD} = G ⇒ x_3 = \\frac{"+r+"+"+u+"}{2} = "+x3+" \\ \\ , \\ y_3 = \\frac{"+v+"+"+v+"}{2} = "+y3+" $$"
              pas6 = "$$ p_m \\overline{DA} = H ⇒ x_4 = \\frac{"+u+"+0}{2} = \\ "+x4+" \\ \\ , \\ y_4 = \\frac{"+v+"+0}{2} = \\ "+y4+" $$"
              pas7 = "$$ se \\ tiene \\ que \\ \\overline{AB}||\\overline{CD} \\ y \\ \\overline{BC}||\\overline{DA} $$"
              pas8 = "$$ se \\ tiene \\ que \\ las \\ diagonales \\ son \\overline{AC} \\ y \\overline{BD} $$"
              pas9 = "$$ Encontremos \\ el \\ punto \\ de \\ intersección \\ de \\ \\overline{EG}\\ , \\overline{FH}\\ , \\overline{AC}  $$"
              pas10 = "$$ Para \\ ello \\ plantearemos \\ las \\ siguientes \\ ecuaciones \\ : \\ (1)\\ Y - 0 = \\frac{0 - "+v+"}{ "+x1+" - "+x3+"} (X - "+x1+" )\\ , \\ (2)\\ Y - "+y4+" = \\frac{"+y4+" - "+y2+"}{"+x4+"-"+x2+"} (X - "+x4+" ) \\ que \\ pasan \\ por \\ E,G \\ y \\ F,H \\ respectivamente $$"
              pas11 = "$$ Para \\ encontrar  \\ el \\ punto \\ de \\ intersección \\ despejemos \\ Y \\ en \\ (2) \\ y \\ sustituyamos \\ en \\ (1) \\ para \\ encontrar \\ X \\ observemos \\ que \\ Y = "+y4+"    $$"
              pas12 = "$$ Asi \\ Tenemos \\ lo \\ siguiente  "+y4+" = "+r1+" (X - "+x1+" ), \\ simplificando: \\ $$"
              pas13 = "$$ "+y4+" = "+r1+" (X) - "+r2+" \\ , \\ continuando \\ obtenemos \\ "+f1+" = X \\ $$"
              pas14 = "$$ Por \\ lo \\ tanto \\ nuestro \\ punto \\ de \\ intersección \\ es \\ P( "+f1+", "+f2+")  $$"
              pas15 = "$$ Cálculemos \\ ahora \\  $$"
              pas16 = "$$ \\overline{|AP|} = "+"\\sqrt{"+"(0 - "+f1+" )^2+(0- "+f2+")^2"+"}"+" = "+"\\sqrt{"+""+r3+"}"+" $$"
              pas17 = "$$ \\overline{|PC|} = "+"\\sqrt{"+"("+r+" - "+f1+" )^2+("+v+"- "+f2+")^2"+"}"+" = "+"\\sqrt{"+""+r3+"}"+" $$"
              pas18 = "$$ \\overline{|EP|} = "+"\\sqrt{"+"( "+x1+" - "+f1+" )^2+(0 - "+f2+")^2"+"}"+" = "+"\\sqrt{"+""+r4+"}"+" $$"
              pas19 = "$$ \\overline{|PG|} = "+"\\sqrt{"+"( "+x3+" - "+f1+" )^2+("+v+"- "+f2+")^2"+"}"+" = "+"\\sqrt{"+""+r4+"}"+" $$"
              pas20 = "$$ \\overline{|FP|} = "+"\\sqrt{"+"( "+x2+" - "+f1+" )^2+("+f2+"- "+f2+")^2"+"}"+" = "+"\\sqrt{"+""+r5+"}"+" $$"
              pas21 = "$$ \\overline{|PH|} = "+"\\sqrt{"+"( "+x4+" - "+f1+" )^2+("+f2+" - "+f2+")^2"+"}"+" = "+"\\sqrt{"+""+r5+"}"+" $$"
              pas22 = "$$ observemos \\ así \\ que \\ el \\ punto \\ de \\ interseccion \\ de \\ todos \\ los \\ segmentos \\ de \\ recta \\ es \\ exactamente \\ el \\ punto \\ medio \\ de \\ cada \\ uno  $$"

                Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12+pas13+pas14+pas15+pas16+pas17+pas18+pas19+pas20+pas21+pas22


                document.getElementById("SOL1").innerHTML = Sol[1];
                document.getElementById("SOL2").innerHTML = Sol[2];
                //document.getElementById("SOL3").innerHTML = Sol[3];
                //document.getElementById("SOL4").innerHTML = Sol[4];
                //document.getElementById("SOL5").innerHTML = Sol[5];


                scene = "\\(\\"+Sol[1]+"\\)"
                MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])
                var t = Graph5(p,q)



              function Graph5() {
              JXG.JSXGraph.freeBoard(board);
              board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-12, 12, 12, -12], axis: true});

              var p1 = board.create('point', [a, b]);
              var p2 = board.create('point', [c, d]);
              var p3 = board.create('point', [m, n]);
              var p4 = board.create('point', [u, v]);
              var p5 = board.create('point', [x1, y1]);
              var p6 = board.create('point', [x2, y2]);
              var p7 = board.create('point', [x3, y3]);
              var p8 = board.create('point', [x4, y4]);
              var p9 = board.create('point', [f1, f2]);
              var l1 = board.create('arrow', [p5, p7]);
              var l2 = board.create('arrow', [p6, p8]);
              var l3 = board.create('arrow', [p1, p3]);
              var l4 = board.create('arrow', [p2, p4]);
              // Create atape measure
              var tape = board.create('tapemeasure', [[1, 2], [4, 2]], {name:'dist'});

              var pol = board.create('polygon', [p1, p2, p3, p4]);


              }
              }