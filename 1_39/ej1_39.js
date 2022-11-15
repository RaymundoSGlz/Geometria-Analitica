
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




  var   a,b,x,y,p,q,u,v,m,n,s,t,z,ang;
  x = Math.floor(2*(Math.random() * 10)-20);
  y = Math.floor(2*(Math.random() * 10)-20);
  ang = Math.floor((Math.random() * 80)-10);

  a = Math.floor(2*(Math.random() * 10)-20);
  b = Math.floor(2*(Math.random() * 10)-20);

  c = x*Math.cos(ang)-0*Math.sin(ang);
  d = x*Math.sin(ang)+0*Math.cos(ang);

  u = 0*Math.cos(ang)-y*Math.sin(ang);
  v = 0*Math.sin(ang)+y*Math.cos(ang);

  m = x*Math.cos(ang)-y*Math.sin(ang);
  n = x*Math.sin(ang)+y*Math.cos(ang);

  c=c+a
  c= Math.round(c * 100)/100
  d=d+b
  d= Math.round(d * 100)/100
  u=u+a
  u= Math.round(u * 100)/100
  v=v+b
  v= Math.round(v * 100)/100
  m=m+a
  m= Math.round(m * 100)/100
  n=n+b
  n= Math.round(n * 100)/100

  f1 = b-d
  f1 = Math.round(f1 * 100)/100
  f2 = a-c
  f2 = Math.round(f2 * 100)/100
  f3 = d-n
  f3 = Math.round(f3 * 100)/100
  f4 = c-m
  f4 = Math.round(f4 * 100)/100
  f5 = n-v
  f5 = Math.round(f5 * 100)/100
  f6 = m-u
  f6 = Math.round(f6 * 100)/100
  f7 = v-b
  f7 = Math.round(f7 * 100)/100
  f8 = u-a
  f8 = Math.round(f8 * 100)/100
  m1 = f1/f2
  m1 = Math.round(m1 * 100)/100
  m2 = f3/f4
  m2 = Math.round(m2 * 100)/100
  m3 = f5/f6
  m3 = Math.round(m3 * 100)/100
  m4 = f7/f8
  m4 = Math.round(m4 * 100)/100




  pas = "$$ Soluci\\acute{o}n \\ general $$"
 pas1 = "$$ Sean \\ los \\ puntos \\ A(a,b)\\ , \\ B(c,d) \\ , \\ C(m,n) \\ y \\ D(u,v) \\  $$"
 pas2 = "$$ Por \\ el \\ teorema  \\ tenemos   $$"
 pas3 = "$$ m_1= \\frac{b-d}{a-c} $$"
 pas4 = "$$ m_2= \\frac{d-n}{c-m} $$"
 pas5 = "$$ m_3= \\frac{n-v}{m-u} $$"
 pas6 = "$$ m_4= \\frac{v-b}{u-a} $$"
 pas7 = "$$ se \\ tiene \\ que \\ m_1 = m_3 $$"
 pas8 = "$$ se \\ tiene \\ que \\ m_2 = m_4 $$"
 pas9 = "$$ lo \\ que \\ implica \\ dos \\ pares \\ de \\ lados \\ parelelos \\  $$"
 pas10 = "$$ es \\ un \\ paralelogramo \\ $$"
 pas11 = "$$ si \\ se \\ tiene \\ que \\ m_1 \\ != \\ m_3 \\ o \\ m_2 \\ != \\ m_4  $$"
 pas12 = "$$ no \\ es \\ un \\ paralelogramo \\  $$"

 Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12

  pas = "$$ Soluci\\acute{o}n \\ particular $$"
  pas1 = "$$ Sean \\ los \\ puntos \\ A("+a+","+b+")\\ , \\ B("+c+","+d+") \\ , \\ C("+m+","+n+") \\ y \\ D("+u+","+v+") \\  $$"
  pas2 = "$$ Por \\ el \\ teorema  \\ tenemos   $$"
  pas3 = "$$ m_1 = \\frac{"+b+"-"+d+"}{"+a+"-"+c+"} = \\frac{"+f1+"}{"+f2+"} = "+m1+" $$"
  pas4 = "$$ m_2 = \\frac{"+d+"-"+n+"}{"+c+"-"+m+"} = \\frac{"+f3+"}{"+f4+"} = "+m2+" $$"
  pas5 = "$$ m_3 = \\frac{"+n+"-"+v+"}{"+m+"-"+u+"} = \\frac{"+f5+"}{"+f6+"} = "+m3+" $$"
  pas6 = "$$ m_4 = \\frac{"+v+"-"+b+"}{"+u+"-"+a+"} = \\frac{"+f7+"}{"+f8+"} = "+m4+" $$"
  if (m1=m3) {
  pas7 = "$$ se \\ tiene \\ que \\ m_1 = m_3 $$"
  } else {
  pas7 = "$$ se \\ tiene \\ que \\ m_1 \\ != \\ m_3 $$"
  }
  if (m2=m4) {
  pas8 = "$$ se \\ tiene \\ que \\ m_2 = m_4 $$"
  } else {
  pas8 = "$$ se \\ tiene \\ que \\ m_2 \\ != \\ m_4 $$"
  }
  if (m1=m3) {
    pas9 = "$$ lo \\ que \\ implica \\ dos \\ pares \\ de \\ lados \\ parelelos \\  $$"
    pas10 = "$$ es \\ un \\ paralelogramo \\ $$"
  } else {
    pas9 = "$$ sin \\ dos \\ pares \\ de \\ lados \\ parelelos \\  $$"
    pas10 = "$$ no \\ es \\ un \\ paralelogramo \\ $$"
  }

  Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10
//alert("33333333333333333")


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
// Allow Translations:
// By default, every point of a group triggers a translation.
// There may be situations, when this is not wanted.

// In this example, E triggers nothing, but itself is rotation center
// and is translated, if other points are moved around.

var p,  col, pol, g;

col = 'blue';
p = [];
p.push(board.create('point',[a, b ], {size: 2, strokeColor:col, fillColor:col}));
p.push(board.create('point',[c, d ], {size: 2, strokeColor:col, fillColor:col}));
p.push(board.create('point',[m, n ], {size: 2, strokeColor:col, fillColor:col}));
p.push(board.create('point',[u, v], {size: 2, strokeColor:'red', fillColor:'red'}));


pol = board.create('polygon', p, {hasInnerPoints: true});
g = board.create('group', p.concat(q)).setRotationCenter('centroid').setRotationPoints([p[2]]);
g.setScaleCenter(p[0]).setScalePoints(p[1]);
g.removeTranslationPoint(q);
}
}