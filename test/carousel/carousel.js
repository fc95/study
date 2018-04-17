function Carousel(opts , images){
	
	this.opts = Object.assign({
		direction : 'right' ,
		speed : 5000 ,
	} , opts || {} );
	this.images = Array.isArray(images) ? images : [] ;
	/*this.create = function(){
		console.log('test');
	}*/
}

Carousel.prototype.init = function(){
	console.log(this);
	this.create();
	this.start();
}

Carousel.prototype.create = function(){
	var images = this.images , len = images.length , i=0 , docHtml = '' ,container = this.opts.root + '_ul';
	for(;i<len;i++){
		docHtml += ('<li key=' + i + '><img src=' + images[i] + '/></li>')
	}
    console.log(docHtml);	
	$$(this.opts.root).innerHTML = '<ul id=' + container  + '_left' + '>' + docHtml + '</ul>'
																		+ '<ul id=' + container + '_right' + '>' + docHtml + '</ul>';
}

Carousel.prototype.start = function(){
	var opts = this.opts , delay = opts.speed , container_left = this.opts.root + '_ul_left' , marginLeft = 0;
	
	setInterval(function(){
		if(marginLeft === -300){
			marginLeft = 100 ;
		}
		marginLeft-= 100 ;
		console.log(marginLeft);
		$$(container_left).style.marginLeft = marginLeft + '%' ;
	},delay)
}

function $$(id){
	return document.getElementById(id);
}