/**
 * Created by 胡林云 on 2017/8/6.
 */
if( !'胡林云'.tirm){
  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g ;
  String.prototype.trim = function(){
    return this.replace(rtrim , '');
  }
}

if( !Array.isArray ){
  Array.isArray = function(a){
    return Object.prototype.toString.call(a) === '[object Array]'
  }

}