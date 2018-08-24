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

function convertNumFormat(num, len) {
  num = (num || 0).toString()
  len = len || 3
  if (num.indexOf('.') > -1) {
    return num.split('.').map(item => {
      return toThousands(item, len)
    }).join('.')
  } else {
    return toThousands(num, len)
  }
}

function toThousands(item, len) {
  var res = ''
  var isLowerZero = +item < 0;
  if (isLowerZero) item = item.substring(1)
  while (item.length > len) {
    res = ',' + item.slice(-len) + res
    item = item.slice(0, item.length - len)
  }
  if (item) res = item + res
  if (isLowerZero) res = '-' + res
  return res
}