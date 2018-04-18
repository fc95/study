function Pub() {
	this.subs = []
}

Pub.prototype = {
  addSub: function(sub) {
    this.subs.push(sub)
    return this
  },
  notify: function() {
    this.subs.forEach(function(sub) {
      sub.show()
    })
  }
}