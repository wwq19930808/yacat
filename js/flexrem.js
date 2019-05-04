(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth || clientWidth > 768 ) return;
        
        // if(clientWidth>=414){
        //   docEl.style.fontSize = '100px';
        // }else{
          docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
        //}
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);