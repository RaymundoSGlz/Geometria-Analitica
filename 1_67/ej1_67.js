
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



        function vaciar(x)  //
        {
//alert("ooo")
            if (x == 1) { //Módulo2
//alert("entre a funcion");
                //var M1 = document.getElementById("nivel").value;
                var M1=1
                var C = Grupo1_67(M1);
//alert("C    "+C)
            }
        }

var Sol = [];

function Grupo1_67(M1){

  var   a,b,x,y,p,q,u,v,m,n,s,t,z,ang;
  p = Math.floor(3*(Math.random() * 10)-5);
  q = 0
  if (p == q) {
  p=5
  }

  r = p*-1
  s = 0

    u = 0
    v = Math.floor(3*(Math.random() * 10)-5);
    if (v == u) {
    v=7
    }

    a=p+r
    a=a/2
    b=q+s
    b=b/2
    c=r+u
    c=c/2
    d=s+v
    d=d/2
    e=p+u
    e=e/2
    f=q+v
    f=f/2
    o = v*v
    o = Math.sqrt(o)
    o1=p-c
    o1=o1*o1
    o2=q-d
    o2=o2*o2
    o5=o1+o2
    o3=r-e
    o3=o3*o3
    o4=s-f
    o4=o4*o4
    o6=o3+o4
    o7=p-u
    o7=o7*o7
    o8=q-v
    o8=o8*o8
    o11=o7+o8
    o9=r-u
    o9=o9*o9
    o10=s-v
    o10=o10*o10
    o12=o9+o10


    pas = "$$ Soluci\\acute{o}n \\ general $$"
   pas1 = "$$ Sean \\ los \\ puntos \\ A(p,q)\\ , \\ B(r,s) \\ y \\ C(u,v) \\ vértices \\ de \\ un \\ triángulo $$"
   pas2 = "$$ Calcularemos \\ los \\ puntos \\ medios \\ de \\ los \\ segmentos \\ AB, \\ BC, \\ AC \\   $$"
   pas3 = "$$ Los \\ cuales \\ seran \\ D(\\frac{"+"(p)+(r)"+"}{2} , \\frac{"+"(q)+(s)"+"}{2}), \\ E(\\frac{"+"(r)+(u)"+"}{2} , \\frac{"+"(s)+(v)"+"}{2}), \\ D(\\frac{"+"(p)+(u)"+"}{2} , \\frac{"+"(q)+(v)"+"}{2}) \\ respectivamente \\ $$"
   pas4 = "$$ La \\ distancia \\ d\\overline{DC} = \\sqrt{"+"(u - \\frac{"+"(p)+(r)"+"}{2})^2+(v - \\frac{"+"(q)+(s)"+"}{2})^2"+"}$$"
   pas5 = "$$ La \\ distancia \\ d\\overline{EA} = \\sqrt{"+"(p - \\frac{"+"(r)+(u)"+"}{2})^2+(q - \\frac{"+"(s)+(v)"+"}{2})^2"+"}$$"
   pas6 = "$$ La \\ distancia \\ d\\overline{FB} = \\sqrt{"+"(r - \\frac{"+"(p)+(u)"+"}{2})^2+(s - \\frac{"+"(q)+(v)"+"}{2})^2"+"}$$"
   pas7 = "$$ Observemos \\ que \\ d\\overline{EA} =\\ d\\overline{FB} \\, así \\ que  \\ debemos \\ demostrar \\ que, \\ d\\overline{AC} =\\ d\\overline{BC} \\ dónde $$"
   pas8 = "$$ d\\overline{AC} = \\sqrt{"+"(p - u)^2+(q - v)^2"+"}$$"
   pas9 = "$$ d\\overline{BC} = \\sqrt{"+"(r - u)^2+(s - v)^2"+"}$$"
   pas10 = "$$ Se \\ cumple \\ $$"

  Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10

  pas = "$$ Soluci\\acute{o}n \\ particular $$"
  pas1 = "$$ Sean \\ los \\ puntos \\ A("+p+","+q+")\\ , \\ B("+r+","+s+") \\ y \\ C("+u+","+v+") \\ vértices \\ de \\ un \\ triángulo $$"
  pas2 = "$$ Calcularemos \\ los \\ puntos \\ medios \\ de \\ los \\ segmentos \\ AB, \\ BC, \\ AC \\   $$"
  pas3 = "$$ Los \\ cuales \\ seran \\ D(\\frac{"+"("+p+")+("+r+")"+"}{2} , \\frac{"+"("+q+")+("+s+")"+"}{2}), \\ E(\\frac{"+"("+r+")+("+u+")"+"}{2} , \\frac{"+"("+s+")+("+v+")"+"}{2}), \\ D(\\frac{"+"("+p+")+("+u+")"+"}{2} , \\frac{"+"("+q+")+("+v+")"+"}{2}) \\ respectivamente \\ $$"
  pas31 = "$$ reduciendo \\ tenemos \\ D("+a+" , "+b+"), \\ E("+c+" , "+d+"), \\ F("+e+" , "+f+") \\   $$"
  pas4 = "$$ La \\ distancia \\ d\\overline{DC} = \\sqrt{"+"("+u+" - "+a+")^2+("+v+" - "+b+")^2"+"} \\ = \\ "+o+" $$"
  pas5 = "$$ La \\ distancia \\ d\\overline{EA} = \\sqrt{"+"("+p+" - "+c+")^2+("+q+" - "+d+")^2"+"} \\ = \\sqrt{"+o5+"} $$"
  pas6 = "$$ La \\ distancia \\ d\\overline{FB} = \\sqrt{"+"("+r+" - "+e+")^2+("+s+" - "+f+")^2"+"} \\ = \\sqrt{"+o6+"} $$"
  pas7 = "$$ Observemos \\ que \\ d\\overline{EA} =\\ d\\overline{FB} \\, así \\ que  \\ debemos \\ demostrar \\ que, \\ d\\overline{AC} =\\ d\\overline{BC} \\ dónde $$"
  pas8 = "$$ d\\overline{AC} = \\sqrt{"+"("+p+" - "+u+")^2+("+q+" - "+v+")^2"+"} = \\sqrt{"+o11+"} $$"
  pas9 = "$$ d\\overline{BC} = \\sqrt{"+"("+r+" - "+u+")^2+("+s+" - "+v+")^2"+"} = \\sqrt{"+o12+"} $$"
  pas10 = "$$ Se \\ cumple \\ $$"

  Sol[2] = pas+pas1+pas2+pas3+pas31+pas4+pas5+pas6+pas7+pas8+pas9+pas10
  //alert("33333333333333333")


  document.getElementById("SOL1").innerHTML = Sol[1];
  document.getElementById("SOL2").innerHTML = Sol[2];
  //document.getElementById("SOL3").innerHTML = Sol[3];
  //document.getElementById("SOL4").innerHTML = Sol[4];
  //document.getElementById("SOL5").innerHTML = Sol[5];


  scene = "\\(\\"+Sol[1]+"\\)"
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])
                t = Graph5()
                function Graph5() {
                  JXG.JSXGraph.freeBoard(board);
                  board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-12, 12, 20, -12], axis: true});
                  var p1 = board.create('point', [p, q]);
                  var p2 = board.create('point', [r, s]);
                  var p3 = board.create('point', [u, v]);
                  var p4 = board.create('point', [a, b]);
                  var p5 = board.create('point', [c, d]);
                  var p6 = board.create('point', [e, f]);
                  var l1 = board.create('arrow', [p4, p3]);
                  var l2 = board.create('arrow', [p6, p2]);
                  var l3 = board.create('arrow', [p5, p1]);

                  var pol = board.create('polygon', [p1, p2, p3]);
                }
}