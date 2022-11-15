
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x) 
        {
            if (x == 1) {
                var M1=1
                var C = Grupo1_25(M1);
            }
        }

var Sol = [];

function Grupo1_25(M1){




  var p,q
  a = Math.floor(2*(Math.random() * 10)-2);
  b = Math.floor(2*(Math.random() * 10)-2);


  m = Math.floor(2*(Math.random() * 10)-2);
  n = Math.floor(2*(Math.random() * 10)-2);

  x = Math.floor(2*(Math.random() * 10)-2);

 s=b-n
 t=a-m
 u1=a+m
 u=u1/2
 v1=b+n
 v=v1/2
 w=s*v
 t1=t*-1
 z=t1*u
 l=w-z


  pas = "$$ Soluci\\acute{o}n \\ general $$"
 pas1 = "$$ Sean \\ los \\ puntos \\ A(a,b)\\ , \\ B(m,n) \\ y \\ C(x,y) \\  $$"
 pas2 = "$$ Calcularemos \\ la\\ ecuación \\ de \\ la \\ recta \\ AB   $$"
 pas3 = "$$ La\\ ecuaci\\acute{o}n \\ se \\ calcula \\ como \\ sigue\\ $$"
 pas4 = "$$ y - (n) = \\frac{"+"(b)-(n)"+"}{"+"(a)-(m)"+"}"+"(x-(m))"+ "$$"
 pas5 = "$$ Donde \\ su \\ pendiente \\ es \\frac{"+"(b)-(n)"+"}{"+"(a)-(m)"+"}$$"
 pas6 = "$$ La \\ recta \\ perpendicular \\ a \\ ella \\ tiene \\ como \\ pendiente\\ - \\frac{"+"(a)-(m)"+"}{"+"(b)-(n)"+"}$$"
 pas7 = "$$ El \\ punto \\ medio \\ entre \\ A \\ y \\ B \\ tiene \\ como \\ coordenadas \\ x = \\frac{"+"(a)+(m)"+"}{2} , y = \\frac{"+"(b)+(n)"+"}{2} $$"
 pas8 = "$$ La \\ ecuación \\ de \\ los \\ puntos \\ equidistantes \\ es \\ : y - \\frac{"+"(b)+(n)"+"}{2} = - \\frac{"+"(a)-(m)"+"}{"+"(b)-(n)"+"} (x - \\frac{"+"(a)+(m)"+"}{2})  $$"

 Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8

  pas = "$$ Soluci\\acute{o}n \\ particular $$"
  pas1 = "$$ Sean \\ los \\ puntos \\ A("+a+","+b+")\\ , \\ B("+m+","+n+") \\ y \\ C(x,y) \\  $$"
  pas2 = "$$ Calcularemos \\ la\\ ecuación \\ de \\ la \\ recta \\ AB   $$"
  pas3 = "$$ La\\ ecuaci\\acute{o}n \\ se \\ calcula \\ como \\ sigue\\ $$"
  pas4 = "$$ y - ("+n+") = \\frac{"+"("+b+")-("+n+")"+"}{"+"("+a+")-("+m+")"+"}"+"(x-("+m+"))"+ "$$"
  pas5 = "$$ Donde \\ su \\ pendiente \\ es \\frac{"+"("+b+")-("+n+")"+"}{"+"("+a+")-("+m+")"+"} = \\frac{"+"("+s+")"+"}{"+"("+t+")"+"}$$"
  pas6 = "$$ La \\ recta \\ perpendicular \\ a \\ ella \\ tiene \\ como \\ pendiente\\ - \\frac{"+"("+a+")-("+m+")"+"}{"+"("+b+")-("+n+")"+"} = - \\frac{"+"("+t+")"+"}{"+"("+s+")"+"}$$"
  pas7 = "$$ El \\ punto \\ medio \\ entre \\ A \\ y \\ B \\ tiene \\ como \\ coordenadas \\ x = \\frac{"+"("+a+")+("+m+")"+"}{2} = "+u+" , y = \\frac{"+"("+b+")+("+n+")"+"}{2} = "+v+" $$"
  pas8 = "$$ La \\ ecuación \\ de \\ los \\ puntos \\ equidistantes \\ es \\ : y - "+v+" = - \\frac{"+"("+t+")"+"}{"+"("+s+")"+"} (x - "+u+") ⇒ "+s+"y - "+w+" = "+t1+"x - "+z+"   $$"
  pas9 = "$$ Igualando \\ con \\ cero \\ tenemos \\ "+t+"x + "+s+"y - "+l+" = 0 $$"
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
    board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 20, 20, -20], axis: true});

    // Create an arrow providing two points.
      var p1 = board.create('point', [a, b]);
      var p2 = board.create('point', [m, n]);
      var p3 = board.create('point', [u, v]);
      var l1 = board.create('arrow', [p1, p3]);
      var l2 = board.create('arrow', [p2, p3]);
      var perp1 = board.create('perpendicular', [l1, p3]);
  }
}