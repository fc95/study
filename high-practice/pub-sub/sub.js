function Sub(age) {
	this.age = age
}
Sub.prototype = {
	show: function() {
		console.log('======= age is =======', this.age)
  }
}