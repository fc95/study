/**
 * 方法一
 */
;(function(win, undefined){
  var doc = document.documentElement || document.body,
    changeEvent = "orientationchange" in win ? "orientationchange" : "resize",
    countSize = function() {
      var cw = doc.clientWidth; 
      doc.style.fontSize = (cw >= 750) ? "100px" : 100 * (cw / 750) + "px"
    };
  countSize();
  win.addEventListener(changeEvent, countSize, false)
})(window);
    