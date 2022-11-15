  var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 50, unitY: 20, axis:true});
  var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];
  
  
  
          function vaciar(x)
          {
              if (x == 1) {
                  var M1=1
                  var C = Grupo1_11(M1);
              }
          }
  
  var Sol = [];
  
  function Grupo1_11(M1){
  
  
  
  
  
  
                  var   a,b,x,y,p,q,u,v,m,n,s,t,z,ang;
                  p = Math.floor(2*(Math.random() * 10)-2);
                  q = Math.floor(2*(Math.random() * 10)-2);
                  o = p
  
                  r = Math.floor(2*(Math.random() * 10)-10);
                  s = q
  
                    u = r
                    v = Math.floor(2*(Math.random() * 10)-10);
  
                    t = r-p
                    x = u-t
                    w = s-v
                    y = q-w
                    a = t*w
                    if (a < 0) {
                      a = a*-1
                    }
  
  
                  pas = "$$ Soluci\\acute{o}n \\ general $$"
                 pas1 = "$$ Sean \\ los \\ puntos \\ A(p,q)\\ , \\ B(r,s) \\ , \\ C(u,v) \\ y \\ D(x,y) \\  $$"
                 pas2 = "$$ Por \\ el \\ teorema \\ 1 \\ tenemos   $$"
                 pas3 = "$$ \\overline{AB}"+"\\ = r - p \\ $$"
                 pas4 = "$$ \\overline{DC}"+"\\ = u - x \\ $$"
                 pas5 = "$$ si \\overline{AB}"+"\\ = \\overline{DC}"+" \\ ⇒ \\ r - p = u - x  $$"
                 pas6 = "$$ donde \\ x = u - (r - p) $$"
                 pas7 = "$$ \\overline{BC}"+"\\ = u - s \\ $$"
                 pas8 = "$$ \\overline{AD}"+"\\ = y - q \\ $$"
                 pas9 = "$$ si \\overline{BC}"+"\\ = \\overline{AD}"+" \\ ⇒ \\ u - s = y - q  $$"
                 pas10 = "$$ donde \\ y = (u - s) + q $$"
                 pas11 = "$$ por \\ lo \\ que D(x,y) $$"
                 pas12 = "$$ Área \\ de \\ ◘ABCD \\ = |\\overline{AB}"+"\\| * |\\overline{BC}"+"\\|\\ $$"
  
                 Sol[1] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12
  
                   pas = "$$ Soluci\\acute{o}n \\ particular $$"
                  pas1 = "$$ Sean \\ los \\ puntos \\ A("+p+","+q+")\\ , \\ B("+r+","+s+") \\ , \\ C("+u+","+v+") \\ y \\ D(x,y) \\  $$"
                  pas2 = "$$ Por \\ el \\ teorema \\ 1 \\ tenemos   $$"
                  pas3 = "$$ \\overline{AB}"+"\\ = "+r+" - "+p+" \\ = \\ "+t+" $$"
                  pas4 = "$$ \\overline{DC}"+"\\ = "+u+" - x \\ $$"
                  pas5 = "$$ si \\overline{AB}"+"\\ = \\overline{DC}"+" \\ ⇒ \\ "+t+" = "+u+" - x  $$"
                  pas6 = "$$ donde \\ x = "+u+" - "+t+"\\ = \\ "+x+"  $$"
                  pas7 = "$$ \\overline{BC}"+"\\ = "+s+" - "+v+" \\ = \\ "+w+" $$"
                  pas8 = "$$ \\overline{AD}"+"\\ = "+q+" - y \\ $$"
                  pas9 = "$$ si \\overline{BC}"+"\\ = \\overline{AD}"+" \\ ⇒ \\ "+w+" = "+q+" - y  $$"
                  pas10 = "$$ donde \\ y =  "+q+" - "+w+"  \\ = \\ "+y+" $$"
                  pas11 = "$$ por \\ lo \\ que D("+x+","+y+") $$"
                  pas12 = "$$ Área \\ de \\ ◘ABCD \\ = |"+t+"| * |"+w+"|\\ = \\ "+a+"U^2 $$"
  
                  Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9+pas10+pas11+pas12
  
  
                  document.getElementById("SOL1").innerHTML = Sol[1];
                  document.getElementById("SOL2").innerHTML = Sol[2];
  
  
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
    p.push(board.create('point',[o, q ], {size: 2, strokeColor:col, fillColor:col}));
    p.push(board.create('point',[r, s ], {size: 2, strokeColor:col, fillColor:col}));
    p.push(board.create('point',[u, v ], {size: 2, strokeColor:col, fillColor:col}));
    p.push(board.create('point',[x, y], {size: 2, strokeColor:'red', fillColor:'red'}));
  
  
    pol = board.create('polygon', p, {hasInnerPoints: true});
    g = board.create('group', p.concat(q)).setRotationCenter('centroid').setRotationPoints([p[2]]);
    g.setScaleCenter(p[0]).setScalePoints(p[1]);
    g.removeTranslationPoint(q);
  }
  }