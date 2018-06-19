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