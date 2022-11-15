
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x)  //
        {
//alert("ooo")
            if (x == 1) { //Módulo2
//alert("entre a funcion");
                //var M1 = document.getElementById("nivel").value;
                var M1=1
                var C = Grupo1_2(M1);
//alert("C    "+C)
            }
        }

var Sol = [];

function Grupo1_2(M1){




  var   a,b,x,y,p,q,u,v,m,n,s,t,ang;
  x = Math.floor(2*(Math.random() * 10)-20);
  y = Math.floor(2*(Math.random() * 10)-20);
  while(x<y)
  {y = Math.floor(2*(Math.random() * 10)-20);}

  z = Math.floor(2*(Math.random() * 10)-20);

ang = Math.floor((Math.random() * 80)-10);

a = Math.floor(2*(Math.random() * 10)-20);
b = Math.floor(2*(Math.random() * 10)-20);

  c = x*Math.cos(ang)-0*Math.sin(ang)
  d = x*Math.sin(ang)+0*Math.cos(ang)

  m = y*Math.cos(ang)-0*Math.sin(ang)
  n = y*Math.sin(ang)+0*Math.cos(ang)

  u = y*Math.cos(ang)-z*Math.sin(ang)
  v = y*Math.sin(ang)+z*Math.cos(ang)


  c = c+a
  c = Math.round(c * 100)/100
  d = d+b
  d = Math.round(d * 100)/100
  m = m+a
  m = Math.round(m * 100)/100
  n = n+b
  n = Math.round(n * 100)/100
  u = u+a
  u = Math.round(u * 100)/100
  v = v+b
  v = Math.round(v * 100)/100

  f1 = b-d
  f1 = Math.round(f1 * 100)/100
  f2 = a-c
  f2 = Math.round(f2 * 100)/100
  f5 = n-v
  f5 = Math.round(f5 * 100)/100
  f6 = m-u
  f6 = Math.round(f6 * 100)/100
  m1 = f1/f2
  m1 = Math.round(m1 * 100)/100
  m3 = f5/f6
  m3 = Math.round(m3 * 100)/100
  p = m1*m3
  p = Math.round(p * 1)/1






  pas = "$$ Soluci\\acute{o}n \\ general $$"
 pas1 = "$$ Sean \\ los \\ puntos \\ A(a,b)\\ , \\ B(c,d) \\ , \\ C(m,n) \\ y \\ D(u,v) \\  $$"
 pas2 = "$$ Por \\  teoremas \\ anteriores \\ tenemos   $$"
 pas3 = "$$ m1= \\frac{b-d}{a-c} $$"
 pas4 = "$$ m2= \\frac{n-v}{m-u} $$"
 pas5 = "$$ si \\ m1 * m2 = -1 $$"
 pas6 = "$$ las \\ rectas \\ son \\ perpendiculares $$"
 pas7 = "$$ si \\ m1 * m2 \\ != \\ -1  $$"
 pas8 = "$$ no \\ son \\ perpendiculares \\  $$"

 Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8

  pas = "$$ Soluci\\acute{o}n \\ particular $$"
  pas1 = "$$ Sean \\ los \\ puntos \\ A("+a+","+b+")\\ , \\ B("+c+","+d+") \\ , \\ C("+m+","+n+") \\ y \\ D("+u+","+v+") \\  $$"
  pas2 = "$$ Por \\  teoremas \\ anteriores \\ tenemos   $$"
  pas3 = "$$ m1 = \\frac{"+b+"-"+d+"}{"+a+"-"+c+"} = \\frac{"+f1+"}{"+f2+"} = "+m1+" $$"
  pas4 = "$$ m3 = \\frac{"+n+"-"+v+"}{"+m+"-"+u+"} = \\frac{"+f5+"}{"+f6+"} = "+m3+" $$"
  pas5 = "$$ multiplicando \\ las \\ pendientes \\ tenemos \\ "+m1+" * "+m3+" = "+p+" $$"
  if (p=-1) {
  pas6 = "$$ las \\ rectas \\ son \\ perpendiculares $$"
  } else {
  pas6 = "$$ las \\ rectas \\ no \\ son \\ perpendiculares \\  $$"
  }

  Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6
//alert("33333333333333333")


  document.getElementById("SOL1").innerHTML = Sol[1];
  document.getElementById("SOL2").innerHTML = Sol[2];
  //document.getElementById("SOL3").innerHTML = Sol[3];
  //document.getElementById("SOL4").innerHTML = Sol[4];
  //document.getElementById("SOL5").innerHTML = Sol[5];


  scene = "\\(\\"+Sol[1]+"\\)"
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])
  var t = Graph5()



  function Graph5() {
    JXG.JSXGraph.freeBoard(board);
    board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 20, 20, -20], axis: true});
    // Create a perpendicular
    var p1 = board.create('point', [a, b]);
    var p2 = board.create('point', [c, d]);
    var l1 = board.create('line', [p1, p2]);

    var p3 = board.create('point', [m, n]);
    var p4 = board.create('point', [u, v]);
    var l2 = board.create('line', [p3, p4]);
  }
}