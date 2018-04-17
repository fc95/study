(function(){function t(t,n){var r=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];this.obs=t,this.sync=n,this.lazy=r,this.queue=[]}function n(){t.apply(this,arguments)}function r(n){t.call(this,n,!0)}function e(t,n,r){this.context=t,this.method=n,this.args=r}function i(t){this.value=t}function u(){this.id=++Q}function o(t,n){return this instanceof o?(u.call(this),void(!n&&I.isFunction(t)||(null!=t?t._isNext:void 0)?(this.valueF=t,this.valueInternal=void 0):(this.valueF=void 0,this.valueInternal=t))):new o(t,n)}function s(t,n){return this instanceof s?void o.call(this,t,n):new s(t,n)}function a(){return this instanceof a?void u.call(this):new a}function c(t){return this instanceof c?(this.error=t,void u.call(this)):new c(t)}function f(t){this.desc=t,this.id=++K,this.initialDesc=this.desc}function h(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];this.unsubscribe=I.bind(this.unsubscribe,this),this.unsubscribed=!1,this.subscriptions=[],this.starting=[];for(var n,r=0;r<t.length;r++)n=t[r],this.add(n)}function l(t,n){this._subscribe=t,this._handleEvent=n,this.subscribe=I.bind(this.subscribe,this),this.handleEvent=I.bind(this.handleEvent,this),this.pushing=!1,this.ended=!1,this.prevError=void 0,this.unsubSrc=void 0,this.subscriptions=[],this.queue=[]}function p(t,n,r){return this instanceof p?(I.isFunction(t)&&(r=n,n=t,t=e.empty),f.call(this,t),this.dispatcher=new l(n,r),void Y(this)):new p(t,n,r)}function v(t,n,r){l.call(this,n,r),this.property=t,this.subscribe=I.bind(this.subscribe,this),this.current=R,this.currentValueRootId=void 0,this.propertyEnded=!1}function d(t,n,r){f.call(this,t),this.dispatcher=new v(this,n,r),Y(this)}function y(){return this instanceof y?(this.unsubAll=I.bind(this.unsubAll,this),this.subscribeAll=I.bind(this.subscribeAll,this),this.guardedSink=I.bind(this.guardedSink,this),this.sink=void 0,this.subscriptions=[],this.ended=!1,void p.call(this,new g.Desc(g,"Bus",[]),this.subscribeAll)):new y}function m(t){return[t,G()]}var b=Array.prototype.slice,g={toString:function(){return"Bacon"}};g.version="0.7.83";var w=("undefined"!=typeof global&&null!==global?global:this).Error,E=function(){},D=function(t){return t},S=function(t){return t.slice(0)},A=function(t){return t instanceof Array},O=function(t){return t&&t._isObservable},M=function(t){for(var n=arguments.length,r=1;n>1?n>r:r>n;n>1?r++:r--)for(var e in arguments[r])t[e]=arguments[r][e];return t},k=function(t,n){var r={}.hasOwnProperty,e=function(){};e.prototype=n.prototype,t.prototype=new e;for(var i in n)r.call(n,i)&&(t[i]=n[i]);return t},I={indexOf:function(){return Array.prototype.indexOf?function(t,n){return t.indexOf(n)}:function(t,n){for(var r,e=0;e<t.length;e++)if(r=t[e],n===r)return e;return-1}}(),indexWhere:function(t,n){for(var r,e=0;e<t.length;e++)if(r=t[e],n(r))return e;return-1},head:function(t){return t[0]},always:function(t){return function(){return t}},negate:function(t){return function(n){return!t(n)}},empty:function(t){return 0===t.length},tail:function(t){return t.slice(1,t.length)},filter:function(t,n){for(var r,e=[],i=0;i<n.length;i++)r=n[i],t(r)&&e.push(r);return e},map:function(t,n){return function(){for(var r,e=[],i=0;i<n.length;i++)r=n[i],e.push(t(r));return e}()},each:function(t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var e=t[r];n(r,e)}},toArray:function(t){return A(t)?t:[t]},contains:function(t,n){return-1!==I.indexOf(t,n)},id:function(t){return t},last:function(t){return t[t.length-1]},all:function(t){for(var n,r=arguments.length<=1||void 0===arguments[1]?I.id:arguments[1],e=0;e<t.length;e++)if(n=t[e],!r(n))return!1;return!0},any:function(t){for(var n,r=arguments.length<=1||void 0===arguments[1]?I.id:arguments[1],e=0;e<t.length;e++)if(n=t[e],r(n))return!0;return!1},without:function(t,n){return I.filter(function(n){return n!==t},n)},remove:function(t,n){var r=I.indexOf(n,t);return r>=0?n.splice(r,1):void 0},fold:function(t,n,r){for(var e,i=0;i<t.length;i++)e=t[i],n=r(n,e);return n},flatMap:function(t,n){return I.fold(n,[],function(n,r){return n.concat(t(r))})},cached:function(t){var n=R;return function(){return("undefined"!=typeof n&&null!==n?n._isNone:void 0)&&(n=t(),t=void 0),n}},bind:function(t,n){return function(){return t.apply(n,arguments)}},isFunction:function(t){return"function"==typeof t},toString:function(t){var n,r,e,i={}.hasOwnProperty;try{return P++,null==t?"undefined":I.isFunction(t)?"function":A(t)?P>5?"[..]":"["+I.map(I.toString,t).toString()+"]":null!=(null!=t?t.toString:void 0)&&t.toString!==Object.prototype.toString?t.toString():"object"==typeof t?P>5?"{..}":(n=function(){var n=[];for(r in t)i.call(t,r)&&(e=function(){var n;try{return t[r]}catch(n){return n}}(),n.push(I.toString(r)+":"+I.toString(e)));return n}(),"{"+n+"}"):t}finally{P--}}},P=0;g._=I;var _=g.UpdateBarrier=function(){var t,n=[],r={},e=[],i=0,u={},o=function(n){return t?e.push(n):n()},s=function(e,i){if(t){var u=r[e.id];return"undefined"==typeof u||null===u?(u=r[e.id]=[i],n.push(e)):u.push(i)}return i()},a=function(){for(;n.length>0;)c(0,!0);u={}},c=function(t,e){var i=n[t],u=i.id,o=r[u];n.splice(t,1),delete r[u],e&&n.length>0&&f(i);for(var s,a=0;a<o.length;a++)(s=o[a])()},f=function(t){if(!u[t.id]){for(var e,i=t.internalDeps(),o=0;o<i.length;o++)if(e=i[o],f(e),r[e.id]){var s=I.indexOf(n,e);c(s,!1)}u[t.id]=!0}},h=function(n,r,u,o){if(t)return u.apply(r,o);t=n;try{var s=u.apply(r,o);a()}finally{for(t=void 0;i<e.length;){var c=e[i];i++,c()}i=0,e=[]}return s},l=function(){return t?t.id:void 0},p=function(t,n){var r=!1,e=!1,i=function(){return e=!0},u=function(){return r=!0,i()};return i=t.dispatcher.subscribe(function(t){return o(function(){if(!r){var e=n(t);if(e===g.noMore)return u()}})}),e&&i(),u},v=function(){return n.length>0};return{whenDoneWith:s,hasWaiters:v,inTransaction:h,currentEventId:l,wrappedSubscribe:p,afterTransaction:o}}();M(t.prototype,{_isSource:!0,subscribe:function(t){return this.obs.dispatcher.subscribe(t)},toString:function(){return this.obs.toString()},markEnded:function(){return this.ended=!0,!0},consume:function(){return this.lazy?{value:I.always(this.queue[0])}:this.queue[0]},push:function(t){return this.queue=[t],[t]},mayHave:function(){return!0},hasAtLeast:function(){return this.queue.length},flatten:!0}),k(n,t),M(n.prototype,{consume:function(){return this.queue.shift()},push:function(t){return this.queue.push(t)},mayHave:function(t){return!this.ended||this.queue.length>=t},hasAtLeast:function(t){return this.queue.length>=t},flatten:!1}),k(r,t),M(r.prototype,{consume:function(){var t=this.queue;return this.queue=[],{value:function(){return t}}},push:function(t){return this.queue.push(t.value())},hasAtLeast:function(){return!0}}),t.isTrigger=function(t){return(null!=t?t._isSource:void 0)?t.sync:null!=t?t._isEventStream:void 0},t.fromObservable=function(r){return(null!=r?r._isSource:void 0)?r:(null!=r?r._isProperty:void 0)?new t(r,!1):new n(r,!0)},M(e.prototype,{_isDesc:!0,deps:function(){return this.cached||(this.cached=T([this.context].concat(this.args))),this.cached},toString:function(){return I.toString(this.context)+"."+I.toString(this.method)+"("+I.map(I.toString,this.args)+")"}});var x=function(t,n){var r=t||n;if(r&&r._isDesc)return t||n;for(var i=arguments.length,u=Array(i>2?i-2:0),o=2;i>o;o++)u[o-2]=arguments[o];return new e(t,n,u)},W=function(t,n){return n.desc=t,n},T=function(t){return A(t)?I.flatMap(T,t):O(t)?[t]:("undefined"!=typeof t&&null!==t?t._isSource:void 0)?[t.obs]:[]};g.Desc=e,g.Desc.empty=new g.Desc("","",[]);var V=function(t){return function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),i=1;r>i;i++)e[i-1]=arguments[i];if("object"==typeof n&&e.length){var u=n,o=e[0];n=function(){return u[o].apply(u,arguments)},e=e.slice(1)}return t.apply(void 0,[n].concat(e))}},H=function(t){return t=Array.prototype.slice.call(t),N.apply(void 0,t)},B=function(t,n){return function(){for(var r=arguments.length,e=Array(r),i=0;r>i;i++)e[i]=arguments[i];return t.apply(void 0,n.concat(e))}},F=function(t){return function(n){return function(r){if("undefined"!=typeof r&&null!==r){var e=r[n];return I.isFunction(e)?e.apply(r,t):e}}}},C=function(t,n){var r=t.slice(1).split("."),e=I.map(F(n),r);return function(t){for(var n,r=0;r<e.length;r++)n=e[r],t=n(t);return t}},q=function(t){return"string"==typeof t&&t.length>1&&"."===t.charAt(0)},N=V(function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return I.isFunction(t)?r.length?B(t,r):t:q(t)?C(t,r):I.always(t)}),L=function(t,n){return N.apply(void 0,[t].concat(n))},U=function(t,n,r,e){if("undefined"!=typeof n&&null!==n?n._isProperty:void 0){var i=n.sampledBy(t,function(t,n){return[t,n]});return e.call(i,function(t){{var n=t[0];t[1]}return n}).map(function(t){var n=(t[0],t[1]);return n})}return n=L(n,r),e.call(t,n)},z=function(t){if(I.isFunction(t))return t;if(q(t)){var n=j(t);return function(t,r){return t[n](r)}}throw new w("not a function or a field key: "+t)},j=function(t){return t.slice(1)};M(i.prototype,{_isSome:!0,getOrElse:function(){return this.value},get:function(){return this.value},filter:function(t){return t(this.value)?new i(this.value):R},map:function(t){return new i(t(this.value))},forEach:function(t){return t(this.value)},isDefined:!0,toArray:function(){return[this.value]},inspect:function(){return"Some("+this.value+")"},toString:function(){return this.inspect()}});var R={_isNone:!0,getOrElse:function(t){return t},filter:function(){return R},map:function(){return R},forEach:function(){},isDefined:!1,toArray:function(){return[]},inspect:function(){return"None"},toString:function(){return this.inspect()}},$=function(t){return("undefined"!=typeof t&&null!==t?t._isSome:void 0)||("undefined"!=typeof t&&null!==t?t._isNone:void 0)?t:new i(t)};g.noMore="<no-more>",g.more="<more>";var Q=0;u.prototype._isEvent=!0,u.prototype.isEvent=function(){return!0},u.prototype.isEnd=function(){return!1},u.prototype.isInitial=function(){return!1},u.prototype.isNext=function(){return!1},u.prototype.isError=function(){return!1},u.prototype.hasValue=function(){return!1},u.prototype.filter=function(){return!0},u.prototype.inspect=function(){return this.toString()},u.prototype.log=function(){return this.toString()},k(o,u),o.prototype.isNext=function(){return!0},o.prototype.hasValue=function(){return!0},o.prototype.value=function(){var t;return(null!=(t=this.valueF)?t._isNext:void 0)?(this.valueInternal=this.valueF.value(),this.valueF=void 0):this.valueF&&(this.valueInternal=this.valueF(),this.valueF=void 0),this.valueInternal},o.prototype.fmap=function(t){var n,r;return this.valueInternal?(r=this.valueInternal,this.apply(function(){return t(r)})):(n=this,this.apply(function(){return t(n.value())}))},o.prototype.apply=function(t){return new o(t)},o.prototype.filter=function(t){return t(this.value())},o.prototype.toString=function(){return I.toString(this.value())},o.prototype.log=function(){return this.value()},o.prototype._isNext=!0,k(s,o),s.prototype._isInitial=!0,s.prototype.isInitial=function(){return!0},s.prototype.isNext=function(){return!1},s.prototype.apply=function(t){return new s(t)},s.prototype.toNext=function(){return new o(this)},k(a,u),a.prototype.isEnd=function(){return!0},a.prototype.fmap=function(){return this},a.prototype.apply=function(){return this},a.prototype.toString=function(){return"<end>"},k(c,u),c.prototype.isError=function(){return!0},c.prototype.fmap=function(){return this},c.prototype.apply=function(){return this},c.prototype.toString=function(){return"<error> "+I.toString(this.error)},g.Event=u,g.Initial=s,g.Next=o,g.End=a,g.Error=c;var Z=function(t){return new s(t,!0)},X=function(t){return new o(t,!0)},G=function(){return new a},J=function(t){return t&&t._isEvent?t:X(t)},K=0,Y=function(){};M(f.prototype,{_isObservable:!0,subscribe:function(t){return _.wrappedSubscribe(this,t)},subscribeInternal:function(t){return this.dispatcher.subscribe(t)},onValue:function(){var t=H(arguments);return this.subscribe(function(n){return n.hasValue()?t(n.value()):void 0})},onValues:function(t){return this.onValue(function(n){return t.apply(void 0,n)})},onError:function(){var t=H(arguments);return this.subscribe(function(n){return n.isError()?t(n.error):void 0})},onEnd:function(){var t=H(arguments);return this.subscribe(function(n){return n.isEnd()?t():void 0})},name:function(t){return this._name=t,this},withDescription:function(){return this.desc=x.apply(void 0,arguments),this},toString:function(){return this._name?this._name:this.desc.toString()},internalDeps:function(){return this.initialDesc.deps()}}),f.prototype.assign=f.prototype.onValue,f.prototype.forEach=f.prototype.onValue,f.prototype.inspect=f.prototype.toString,g.Observable=f,M(h.prototype,{add:function(t){var n=this;if(!this.unsubscribed){var r=!1,e=E;this.starting.push(t);var i=function(){return n.unsubscribed?void 0:(r=!0,n.remove(e),I.remove(t,n.starting))};return e=t(this.unsubscribe,i),this.unsubscribed||r?e():this.subscriptions.push(e),I.remove(t,this.starting),e}},remove:function(t){return this.unsubscribed?void 0:void 0!==I.remove(t,this.subscriptions)?t():void 0},unsubscribe:function(){if(!this.unsubscribed){this.unsubscribed=!0;for(var t=this.subscriptions,n=0;n<t.length;n++)t[n]();return this.subscriptions=[],this.starting=[],[]}},count:function(){return this.unsubscribed?0:this.subscriptions.length+this.starting.length},empty:function(){return 0===this.count()}}),g.CompositeUnsubscribe=h,l.prototype.hasSubscribers=function(){return this.subscriptions.length>0},l.prototype.removeSub=function(t){return this.subscriptions=I.without(t,this.subscriptions),this.subscriptions},l.prototype.push=function(t){return t.isEnd()&&(this.ended=!0),_.inTransaction(t,this,this.pushIt,[t])},l.prototype.pushToSubscriptions=function(t){try{for(var n=this.subscriptions,r=n.length,e=0;r>e;e++){var i=n[e],u=i.sink(t);(u===g.noMore||t.isEnd())&&this.removeSub(i)}return!0}catch(o){throw this.pushing=!1,this.queue=[],o}},l.prototype.pushIt=function(t){if(this.pushing)return this.queue.push(t),g.more;if(t!==this.prevError){for(t.isError()&&(this.prevError=t),this.pushing=!0,this.pushToSubscriptions(t),this.pushing=!1;this.queue.length;)t=this.queue.shift(),this.push(t);return this.hasSubscribers()?g.more:(this.unsubscribeFromSource(),g.noMore)}},l.prototype.handleEvent=function(t){return this._handleEvent?this._handleEvent(t):this.push(t)},l.prototype.unsubscribeFromSource=function(){this.unsubSrc&&this.unsubSrc(),this.unsubSrc=void 0},l.prototype.subscribe=function(t){var n;return this.ended?(t(G()),E):(n={sink:t},this.subscriptions.push(n),1===this.subscriptions.length&&(this.unsubSrc=this._subscribe(this.handleEvent)),function(t){return function(){return t.removeSub(n),t.hasSubscribers()?void 0:t.unsubscribeFromSource()}}(this))},g.Dispatcher=l,k(p,f),M(p.prototype,{_isEventStream:!0,toProperty:function(t){var n=0===arguments.length?R:$(function(){return t}),r=this.dispatcher,e=new g.Desc(this,"toProperty",[t]);return new d(e,function(t){var e=!1,u=!1,o=E,a=g.more,c=function(){return e?void 0:n.forEach(function(n){return e=!0,a=t(new s(n)),a===g.noMore?(o(),o=E,E):void 0})};return o=r.subscribe(function(r){return r.hasValue()?r.isInitial()&&!u?(n=new i(function(){return r.value()}),g.more):(r.isInitial()||c(),e=!0,n=new i(r),t(r)):(r.isEnd()&&(a=c()),a!==g.noMore?t(r):void 0)}),u=!0,c(),o})},toEventStream:function(){return this},withHandler:function(t){return new p(new g.Desc(this,"withHandler",[t]),this.dispatcher.subscribe,t)}}),g.EventStream=p,g.never=function(){return new p(x(g,"never"),function(t){return t(G()),E})},g.when=function(){if(0===arguments.length)return g.never();for(var n=arguments.length,r=[],e=[],i=0,u=[];n>i;){u[i]=arguments[i],u[i+1]=arguments[i+1];for(var o,s=I.toArray(arguments[i]),a=nn(arguments[i+1]),c={f:a,ixs:[]},f=!1,h=0;h<s.length;h++){o=s[h];var l=I.indexOf(r,o);f||(f=t.isTrigger(o)),0>l&&(r.push(o),l=r.length-1);for(var v,d=0;d<c.ixs.length;d++)v=c.ixs[d],v.index===l&&v.count++;c.ixs.push({index:l,count:1})}s.length>0&&e.push(c),i+=2}if(!r.length)return g.never();r=I.map(t.fromObservable,r);var y=I.any(r,function(t){return t.flatten})&&tn(I.map(function(t){return t.obs},r)),m=new g.Desc(g,"when",u),b=new p(m,function(t){var n=[],i=!1,u=function(t){for(var n,e=0;e<t.ixs.length;e++)if(n=t.ixs[e],!r[n.index].hasAtLeast(n.count))return!1;return!0},o=function(t){return!t.sync||t.ended},s=function(t){for(var n,e=0;e<t.ixs.length;e++)if(n=t.ixs[e],!r[n.index].mayHave(n.count))return!0},a=function(t){return!t.source.flatten},c=function(c){return function(f){var h=function(){return _.whenDoneWith(b,p)},l=function(){if(!(n.length>0))return g.more;for(var i,o=g.more,s=n.pop(),c=0;c<e.length;c++)if(i=e[c],u(i)){var f=function(){for(var t,n=[],e=0;e<i.ixs.length;e++)t=i.ixs[e],n.push(r[t.index].consume());return n}();return o=t(s.e.apply(function(){var t,n=function(){for(var t,n=[],r=0;r<f.length;r++)t=f[r],n.push(t.value());return n}();return(t=i).f.apply(t,n)})),n.length&&(n=I.filter(a,n)),o===g.noMore?o:l()}},p=function(){var n=l();return i&&(I.all(r,o)||I.all(e,s))&&(n=g.noMore,t(G())),n===g.noMore&&f(),n};return c.subscribe(function(r){if(r.isEnd())i=!0,c.markEnded(),h();else if(r.isError())var e=t(r);else c.push(r),c.sync&&(n.push({source:c,e:r}),y||_.hasWaiters()?h():p());return e===g.noMore&&f(),e||g.more})}};return new g.CompositeUnsubscribe(function(){for(var t,n=[],e=0;e<r.length;e++)t=r[e],n.push(c(t));return n}()).unsubscribe});return b};var tn=function(t){var n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],r=function(t){if(I.contains(n,t))return!0;var e=t.internalDeps();return e.length?(n.push(t),I.any(e,r)):(n.push(t),!1)};return I.any(t,r)},nn=function(t){return I.isFunction(t)?t:I.always(t)};g.groupSimultaneous=function(){for(var t=arguments.length,n=Array(t),e=0;t>e;e++)n[e]=arguments[e];1===n.length&&A(n[0])&&(n=n[0]);var i=function(){for(var t,e=[],i=0;i<n.length;i++)t=n[i],e.push(new r(t));return e}();return W(new g.Desc(g,"groupSimultaneous",n),g.when(i,function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return n}))},k(v,l),M(v.prototype,{push:function(t){return t.isEnd()&&(this.propertyEnded=!0),t.hasValue()&&(this.current=new i(t),this.currentValueRootId=_.currentEventId()),l.prototype.push.call(this,t)},maybeSubSource:function(t,n){return n===g.noMore?E:this.propertyEnded?(t(G()),E):l.prototype.subscribe.call(this,t)},subscribe:function(t){var n=this,r=g.more;if(this.current.isDefined&&(this.hasSubscribers()||this.propertyEnded)){var e=_.currentEventId(),i=this.currentValueRootId;return!this.propertyEnded&&i&&e&&e!==i?(_.whenDoneWith(this.property,function(){return n.currentValueRootId===i?t(Z(n.current.get().value())):void 0}),this.maybeSubSource(t,r)):(_.inTransaction(void 0,this,function(){return r=t(Z(this.current.get().value()))},[]),this.maybeSubSource(t,r))}return this.maybeSubSource(t,r)}}),k(d,f),M(d.prototype,{_isProperty:!0,changes:function(){var t=this;return new p(new g.Desc(this,"changes",[]),function(n){return t.dispatcher.subscribe(function(t){return t.isInitial()?void 0:n(t)})})},withHandler:function(t){return new d(new g.Desc(this,"withHandler",[t]),this.dispatcher.subscribe,t)},toProperty:function(){return this},toEventStream:function(){var t=this;return new p(new g.Desc(this,"toEventStream",[]),function(n){return t.dispatcher.subscribe(function(t){return t.isInitial()&&(t=t.toNext()),n(t)})})}}),g.Property=d,g.constant=function(t){return new d(new g.Desc(g,"constant",[t]),function(n){return n(Z(t)),n(G()),E})},g.fromBinder=function(t){var n=arguments.length<=1||void 0===arguments[1]?I.id:arguments[1],r=new g.Desc(g,"fromBinder",[t,n]);return new p(r,function(r){var e=!1,i=!1,u=function(){return e?void 0:"undefined"!=typeof o&&null!==o?(o(),e=!0):i=!0},o=t(function(){for(var t,e=arguments.length,i=Array(e),o=0;e>o;o++)i[o]=arguments[o];var s=n.apply(this,i);A(s)&&(null!=(t=I.last(s))?t._isEvent:void 0)||(s=[s]);for(var a,c=g.more,f=0;f<s.length;f++)if(a=s[f],c=r(a=J(a)),c===g.noMore||a.isEnd())return u(),c;return c});return i&&u(),u})},g.Observable.prototype.map=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return U(this,t,r,function(t){return W(new g.Desc(this,"map",[t]),this.withHandler(function(n){return this.push(n.fmap(t))}))})};var rn=function(t){return A(t[0])?t[0]:Array.prototype.slice.call(t)},en=function(t){return I.isFunction(t[0])?[rn(Array.prototype.slice.call(t,1)),t[0]]:[rn(Array.prototype.slice.call(t,0,t.length-1)),I.last(t)]};g.combineAsArray=function(){for(var n,r=rn(arguments),e=0;e<r.length;e++)n=r[e],O(n)||(r[e]=g.constant(n));if(r.length){var i=function(){for(var n,e=[],i=0;i<r.length;i++)n=r[i],e.push(new t(n,!0));return e}();return W(new g.Desc(g,"combineAsArray",r),g.when(i,function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return n}).toProperty())}return g.constant([])},g.onValues=function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return g.combineAsArray(n.slice(0,n.length-1)).onValues(n[n.length-1])},g.combineWith=function(){var t=en(arguments),n=t[0],r=t[1],e=new g.Desc(g,"combineWith",[r].concat(n));return W(e,g.combineAsArray(n).map(function(t){return r.apply(void 0,t)}))},g.Observable.prototype.combine=function(t,n){var r=z(n),e=new g.Desc(this,"combine",[t,n]);return W(e,g.combineAsArray(this,t).map(function(t){return r(t[0],t[1])}))},g.Observable.prototype.withStateMachine=function(t,n){var r=t,e=new g.Desc(this,"withStateMachine",[t,n]);return W(e,this.withHandler(function(t){var e=n(r,t),i=e[0],u=e[1];r=i;for(var o,s=g.more,a=0;a<u.length;a++)if(o=u[a],s=this.push(o),s===g.noMore)return s;return s}))};var un=function(t,n){return t===n},on=function(t){return"undefined"!=typeof t&&null!==t?t._isNone:!1};g.Observable.prototype.skipDuplicates=function(){var t=arguments.length<=0||void 0===arguments[0]?un:arguments[0],n=new g.Desc(this,"skipDuplicates",[]);return W(n,this.withStateMachine(R,function(n,r){return r.hasValue()?r.isInitial()||on(n)||!t(n.get(),r.value())?[new i(r.value()),[r]]:[n,[]]:[n,[r]]}))},g.Observable.prototype.awaiting=function(t){var n=new g.Desc(this,"awaiting",[t]);return W(n,g.groupSimultaneous(this,t).map(function(t){return 0===t[1].length}).toProperty(!1).skipDuplicates())},g.Observable.prototype.not=function(){return W(new g.Desc(this,"not",[]),this.map(function(t){return!t}))},g.Property.prototype.and=function(t){return W(new g.Desc(this,"and",[t]),this.combine(t,function(t,n){return t&&n}))},g.Property.prototype.or=function(t){return W(new g.Desc(this,"or",[t]),this.combine(t,function(t,n){return t||n}))},g.scheduler={setTimeout:function(t,n){return setTimeout(t,n)},setInterval:function(t,n){return setInterval(t,n)},clearInterval:function(t){return clearInterval(t)},clearTimeout:function(t){return clearTimeout(t)},now:function(){return(new Date).getTime()}},g.EventStream.prototype.bufferWithTime=function(t){return W(new g.Desc(this,"bufferWithTime",[t]),this.bufferWithTimeOrCount(t,Number.MAX_VALUE))},g.EventStream.prototype.bufferWithCount=function(t){return W(new g.Desc(this,"bufferWithCount",[t]),this.bufferWithTimeOrCount(void 0,t))},g.EventStream.prototype.bufferWithTimeOrCount=function(t,n){var r=function(r){return r.values.length===n?r.flush():void 0!==t?r.schedule():void 0},e=new g.Desc(this,"bufferWithTimeOrCount",[t,n]);return W(e,this.buffer(t,r,r))},g.EventStream.prototype.buffer=function(t){var n=arguments.length<=1||void 0===arguments[1]?E:arguments[1],r=arguments.length<=2||void 0===arguments[2]?E:arguments[2],e={scheduled:null,end:void 0,values:[],flush:function(){if(this.scheduled&&(g.scheduler.clearTimeout(this.scheduled),this.scheduled=null),this.values.length>0){var t=this.values;this.values=[];var n=this.push(X(t));if(null!=this.end)return this.push(this.end);if(n!==g.noMore)return r(this)}else if(null!=this.end)return this.push(this.end)},schedule:function(){var n=this;return this.scheduled?void 0:this.scheduled=t(function(){return n.flush()})}},i=g.more;if(!I.isFunction(t)){var u=t;t=function(t){return g.scheduler.setTimeout(t,u)}}return W(new g.Desc(this,"buffer",[]),this.withHandler(function(t){var r=this;return e.push=function(t){return r.push(t)},t.isError()?i=this.push(t):t.isEnd()?(e.end=t,e.scheduled||e.flush()):(e.values.push(t.value()),n(e)),i}))},g.Observable.prototype.filter=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return U(this,t,r,function(t){return W(new g.Desc(this,"filter",[t]),this.withHandler(function(n){return n.filter(t)?this.push(n):g.more}))})},g.once=function(t){return new p(new e(g,"once",[t]),function(n){return n(J(t)),n(G()),E})},g.EventStream.prototype.concat=function(t){var n=this;return new p(new g.Desc(n,"concat",[t]),function(r){var e=E,i=n.dispatcher.subscribe(function(n){return n.isEnd()?e=t.dispatcher.subscribe(r):r(n)});return function(){return i(),e()}})},g.Observable.prototype.flatMap=function(){return cn(this,sn(arguments))},g.Observable.prototype.flatMapFirst=function(){return cn(this,sn(arguments),!0)};var sn=function(t){return 1===t.length&&O(t[0])?I.always(t[0]):H(t)},an=function(t){return O(t)?t:g.once(t)},cn=function(t,n,r,e){var i=[t],u=[],o=new g.Desc(t,"flatMap"+(r?"First":""),[n]),s=new p(o,function(i){var o=new h,s=[],a=function(t){var r=an(n(t.value()));return u.push(r),o.add(function(t,n){return r.dispatcher.subscribe(function(e){if(e.isEnd())return I.remove(r,u),c(),f(n),g.noMore;("undefined"!=typeof e&&null!==e?e._isInitial:void 0)&&(e=e.toNext());var o=i(e);return o===g.noMore&&t(),o})})},c=function(){var t=s.shift();return t?a(t):void 0},f=function(t){return t(),o.empty()?i(G()):void 0};return o.add(function(n,u){return t.dispatcher.subscribe(function(t){return t.isEnd()?f(u):t.isError()?i(t):r&&o.count()>1?g.more:o.unsubscribed?g.noMore:e&&o.count()>e?s.push(t):a(t)})}),o.unsubscribe});return s.internalDeps=function(){return u.length?i.concat(u):i},s};g.Observable.prototype.flatMapWithConcurrencyLimit=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];var i=new g.Desc(this,"flatMapWithConcurrencyLimit",[t].concat(r));return W(i,cn(this,sn(r),!1,t))},g.Observable.prototype.flatMapConcat=function(){var t=new g.Desc(this,"flatMapConcat",Array.prototype.slice.call(arguments,0));return W(t,this.flatMapWithConcurrencyLimit.apply(this,[1].concat(b.call(arguments))))},g.later=function(t,n){return W(new g.Desc(g,"later",[t,n]),g.fromBinder(function(r){var e=function(){return r([n,G()])},i=g.scheduler.setTimeout(e,t);return function(){return g.scheduler.clearTimeout(i)}}))},g.Observable.prototype.bufferingThrottle=function(t){var n=new g.Desc(this,"bufferingThrottle",[t]);return W(n,this.flatMapConcat(function(n){return g.once(n).concat(g.later(t).filter(!1))}))},g.Property.prototype.bufferingThrottle=function(){return g.Observable.prototype.bufferingThrottle.apply(this,arguments).toProperty()},k(y,p),M(y.prototype,{unsubAll:function(){for(var t,n=this.subscriptions,r=0;r<n.length;r++)t=n[r],"function"==typeof t.unsub&&t.unsub()},subscribeAll:function(t){if(this.ended)t(G());else{this.sink=t;for(var n,r=S(this.subscriptions),e=0;e<r.length;e++)n=r[e],this.subscribeInput(n)}return this.unsubAll},guardedSink:function(t){var n=this;return function(r){return r.isEnd()?(n.unsubscribeInput(t),g.noMore):n.sink(r)}},subscribeInput:function(t){return t.unsub=t.input.dispatcher.subscribe(this.guardedSink(t.input)),t.unsub},unsubscribeInput:function(t){for(var n,r=this.subscriptions,e=0;e<r.length;e++)if(n=r[e],n.input===t)return"function"==typeof n.unsub&&n.unsub(),void this.subscriptions.splice(e,1)},plug:function(t){var n=this;if(!this.ended){var r={input:t};return this.subscriptions.push(r),"undefined"!=typeof this.sink&&this.subscribeInput(r),function(){return n.unsubscribeInput(t)}}},end:function(){return this.ended=!0,this.unsubAll(),"function"==typeof this.sink?this.sink(G()):void 0},push:function(t){return this.ended||"function"!=typeof this.sink?void 0:this.sink(X(t))},error:function(t){return"function"==typeof this.sink?this.sink(new c(t)):void 0}}),g.Bus=y;var fn=function(t,n){return V(function(r){for(var e=B(n,[function(t,n){return r.apply(void 0,t.concat([n]))}]),i=arguments.length,u=Array(i>1?i-1:0),o=1;i>o;o++)u[o-1]=arguments[o];return W(new g.Desc(g,t,[r].concat(u)),g.combineAsArray(u).flatMap(e))})};g.fromCallback=fn("fromCallback",function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return g.fromBinder(function(n){return L(t,r)(n),E},function(t){return[t,G()]})}),g.fromNodeCallback=fn("fromNodeCallback",function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return g.fromBinder(function(n){return L(t,r)(n),E},function(t,n){return t?[new c(t),G()]:[n,G()]})}),g.combineTemplate=function(t){function n(t){return t[t.length-1]}function r(t,r,e){return n(t)[r]=e,e}function e(t,n){return function(e,i){return r(e,t,i[n])}}function i(t,n){return function(e){return r(e,t,n)}}function u(t){return A(t)?[]:{}}function o(t,n){return function(e){var i=u(n);return r(e,t,i),e.push(i)}}function s(t,n){if(O(n))return h.push(n),f.push(e(t,h.length-1));if(!n||n.constructor!=Object&&n.constructor!=Array)return f.push(i(t,n));var r=function(t){return t.pop()};return f.push(o(t,n)),c(n),f.push(r)}function a(n){for(var r,e=u(t),i=[e],o=0;o<f.length;o++)(r=f[o])(i,n);return e}function c(t){return I.each(t,s)}var f=[],h=[];return c(t),W(new g.Desc(g,"combineTemplate",[t]),g.combineAsArray(h).map(a))};var hn=function(t,n){var r=new p(x(t,"justInitValue"),function(n){var e=void 0,i=t.dispatcher.subscribe(function(t){return t.isEnd()||(e=t),g.noMore});return _.whenDoneWith(r,function(){return"undefined"!=typeof e&&null!==e&&n(e),n(G())}),i});return r.concat(n).toProperty()};g.Observable.prototype.mapEnd=function(){var t=H(arguments);return W(new g.Desc(this,"mapEnd",[t]),this.withHandler(function(n){return n.isEnd()?(this.push(X(t(n))),this.push(G()),g.noMore):this.push(n)}))},g.Observable.prototype.skipErrors=function(){return W(new g.Desc(this,"skipErrors",[]),this.withHandler(function(t){return t.isError()?g.more:this.push(t)}))},g.EventStream.prototype.takeUntil=function(t){var n={};return W(new g.Desc(this,"takeUntil",[t]),g.groupSimultaneous(this.mapEnd(n),t.skipErrors()).withHandler(function(t){if(t.hasValue()){var r=t.value(),e=r[0],i=r[1];if(i.length)return this.push(G());for(var u,o=g.more,s=0;s<e.length;s++)u=e[s],o=this.push(u===n?G():X(u));return o}return this.push(t)}))},g.Property.prototype.takeUntil=function(t){var n=this.changes().takeUntil(t);return W(new g.Desc(this,"takeUntil",[t]),hn(this,n))},g.Observable.prototype.flatMapLatest=function(){var t=sn(arguments),n=this.toEventStream();return W(new g.Desc(this,"flatMapLatest",[t]),n.flatMap(function(r){return an(t(r)).takeUntil(n)}))},g.Property.prototype.delayChanges=function(t,n){return W(t,hn(this,n(this.changes())))},g.EventStream.prototype.delay=function(t){return W(new g.Desc(this,"delay",[t]),this.flatMap(function(n){return g.later(t,n)}))},g.Property.prototype.delay=function(t){return this.delayChanges(new g.Desc(this,"delay",[t]),function(n){return n.delay(t)})},g.EventStream.prototype.debounce=function(t){return W(new g.Desc(this,"debounce",[t]),this.flatMapLatest(function(n){return g.later(t,n)}))},g.Property.prototype.debounce=function(t){return this.delayChanges(new g.Desc(this,"debounce",[t]),function(n){return n.debounce(t)})},g.EventStream.prototype.debounceImmediate=function(t){return W(new g.Desc(this,"debounceImmediate",[t]),this.flatMapFirst(function(n){return g.once(n).concat(g.later(t).filter(!1))}))},g.Observable.prototype.decode=function(t){return W(new g.Desc(this,"decode",[t]),this.combine(g.combineTemplate(t),function(t,n){return n[t]}))},g.Observable.prototype.scan=function(t,n){var r,e=this;n=z(n);var u=$(t),o=!1,a=function(t){var a=!1,c=E,f=g.more,h=function(){return a?void 0:u.forEach(function(n){return a=o=!0,f=t(new s(function(){return n
})),f===g.noMore?(c(),c=E):void 0})};return c=e.dispatcher.subscribe(function(r){if(r.hasValue()){if(o&&r.isInitial())return g.more;r.isInitial()||h(),a=o=!0;var e=u.getOrElse(void 0),s=n(e,r.value());return u=new i(s),t(r.apply(function(){return s}))}return r.isEnd()&&(f=h()),f!==g.noMore?t(r):void 0}),_.whenDoneWith(r,h),c};return r=new d(new g.Desc(this,"scan",[t,n]),a)},g.Observable.prototype.diff=function(t,n){return n=z(n),W(new g.Desc(this,"diff",[t,n]),this.scan([t],function(t,r){return[r,n(t[0],r)]}).filter(function(t){return 2===t.length}).map(function(t){return t[1]}))},g.Observable.prototype.doAction=function(){var t=H(arguments);return W(new g.Desc(this,"doAction",[t]),this.withHandler(function(n){return n.hasValue()&&t(n.value()),this.push(n)}))},g.Observable.prototype.doEnd=function(){var t=H(arguments);return W(new g.Desc(this,"doEnd",[t]),this.withHandler(function(n){return n.isEnd()&&t(),this.push(n)}))},g.Observable.prototype.doError=function(){var t=H(arguments);return W(new g.Desc(this,"doError",[t]),this.withHandler(function(n){return n.isError()&&t(n.error),this.push(n)}))},g.Observable.prototype.doLog=function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return W(new g.Desc(this,"doLog",n),this.withHandler(function(t){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log&&console.log.apply(console,n.concat([t.log()])),this.push(t)}))},g.Observable.prototype.endOnError=function(t){("undefined"==typeof t||null===t)&&(t=!0);for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return U(this,t,r,function(t){return W(new g.Desc(this,"endOnError",[]),this.withHandler(function(n){return n.isError()&&t(n.error)?(this.push(n),this.push(G())):this.push(n)}))})},f.prototype.errors=function(){return W(new g.Desc(this,"errors",[]),this.filter(function(){return!1}))},g.Observable.prototype.take=function(t){return 0>=t?g.never():W(new g.Desc(this,"take",[t]),this.withHandler(function(n){return n.hasValue()?(t--,t>0?this.push(n):(0===t&&this.push(n),this.push(G()),g.noMore)):this.push(n)}))},g.Observable.prototype.first=function(){return W(new g.Desc(this,"first",[]),this.take(1))},g.Observable.prototype.mapError=function(){var t=H(arguments);return W(new g.Desc(this,"mapError",[t]),this.withHandler(function(n){return this.push(n.isError()?X(t(n.error)):n)}))},g.Observable.prototype.flatMapError=function(t){var n=new g.Desc(this,"flatMapError",[t]);return W(n,this.mapError(function(t){return new c(t)}).flatMap(function(n){return n instanceof c?t(n.error):g.once(n)}))},g.EventStream.prototype.sampledBy=function(t,n){return W(new g.Desc(this,"sampledBy",[t,n]),this.toProperty().sampledBy(t,n))},g.Property.prototype.sampledBy=function(n,r){var e=!1;"undefined"!=typeof r&&null!==r?r=z(r):(e=!0,r=function(t){return t.value()});var i=new t(this,!1,e),u=new t(n,!0,e),o=g.when([i,u],r),s=n._isProperty?o.toProperty():o;return W(new g.Desc(this,"sampledBy",[n,r]),s)},g.Property.prototype.sample=function(t){return W(new g.Desc(this,"sample",[t]),this.sampledBy(g.interval(t,{})))},g.Observable.prototype.map=function(t){if(t&&t._isProperty)return t.sampledBy(this,D);for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return U(this,t,r,function(t){return W(new g.Desc(this,"map",[t]),this.withHandler(function(n){return this.push(n.fmap(t))}))})},g.Observable.prototype.fold=function(t,n){return W(new g.Desc(this,"fold",[t,n]),this.scan(t,n).sampledBy(this.filter(!1).mapEnd().toProperty()))},f.prototype.reduce=f.prototype.fold;var ln=[["addEventListener","removeEventListener"],["addListener","removeListener"],["on","off"],["bind","unbind"]],pn=function(t){for(var n,r=0;r<ln.length;r++){n=ln[r];var e=[t[n[0]],t[n[1]]];if(e[0]&&e[1])return e}for(var i=0;i<ln.length;i++){n=ln[i];var u=t[n[0]];if(u)return[u,function(){}]}throw new c("No suitable event methods in "+t)};g.fromEventTarget=function(t,n,r){var e=pn(t),i=e[0],u=e[1],o=new g.Desc(g,"fromEvent",[t,n]);return W(o,g.fromBinder(function(r){return i.call(t,n,r),function(){return u.call(t,n,r)}},r))},g.fromEvent=g.fromEventTarget,g.fromPoll=function(t,n){var r=new g.Desc(g,"fromPoll",[t,n]);return W(r,g.fromBinder(function(n){var r=g.scheduler.setInterval(n,t);return function(){return g.scheduler.clearInterval(r)}},n))},g.fromPromise=function(t,n){var r=arguments.length<=2||void 0===arguments[2]?m:arguments[2];return W(new g.Desc(g,"fromPromise",[t]),g.fromBinder(function(r){var e=t.then(r,function(t){return r(new c(t))});return e&&"function"==typeof e.done&&e.done(),n?function(){return"function"==typeof t.abort?t.abort():void 0}:function(){}},r))},g.Observable.prototype.groupBy=function(t){var n=arguments.length<=1||void 0===arguments[1]?g._.id:arguments[1],r={},e=this;return e.filter(function(n){return!r[t(n)]}).map(function(i){var u=t(i),o=e.filter(function(n){return t(n)===u}),s=g.once(i).concat(o),a=n(s,i).withHandler(function(t){return this.push(t),t.isEnd()?delete r[u]:void 0});return r[u]=a,a})},g.fromArray=function(t){if(t.length){var n=0;return new p(new g.Desc(g,"fromArray",[t]),function(r){var e=!1,i=g.more,u=!1,o=!1,s=function(){if(o=!0,!u){for(u=!0;o;)if(o=!1,i!==g.noMore&&!e){var a=t[n++];i=r(J(a)),i!==g.noMore&&(n===t.length?r(G()):_.afterTransaction(s))}return u=!1}};return s(),function(){return e=!0}})}return W(new g.Desc(g,"fromArray",t),g.never())},g.EventStream.prototype.holdWhen=function(t){var n=!1,r=[],e=this;return new p(new g.Desc(this,"holdWhen",[t]),function(i){var u=new h,o=!1,s=function(t){return"function"==typeof t&&t(),u.empty()&&o?i(G()):void 0};return u.add(function(e,u){return t.subscribeInternal(function(t){if(!t.hasValue())return t.isEnd()?s(u):i(t);if(n=t.value(),!n){var e=r;return r=[],function(){for(var t,n=[],r=0;r<e.length;r++)t=e[r],n.push(i(X(t)));return n}()}})}),u.add(function(t,u){return e.subscribeInternal(function(t){return n&&t.hasValue()?r.push(t.value()):t.isEnd()&&r.length?s(u):i(t)})}),o=!0,s(),u.unsubscribe})},g.interval=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return W(new g.Desc(g,"interval",[t,n]),g.fromPoll(t,function(){return X(n)}))},g.$={},g.$.asEventStream=function(t,n,r){var e=this;return I.isFunction(n)&&(r=n,n=void 0),W(new g.Desc(this.selector||this,"asEventStream",[t]),g.fromBinder(function(r){return e.on(t,n,r),function(){return e.off(t,n,r)}},r))},"undefined"!=typeof jQuery&&jQuery&&(jQuery.fn.asEventStream=g.$.asEventStream),"undefined"!=typeof Zepto&&Zepto&&(Zepto.fn.asEventStream=g.$.asEventStream),g.Observable.prototype.last=function(){var t;return W(new g.Desc(this,"last",[]),this.withHandler(function(n){return n.isEnd()?(t&&this.push(t),this.push(G()),g.noMore):void(t=n)}))},g.Observable.prototype.log=function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return this.subscribe(function(t){"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,n.concat([t.log()]))}),this},g.EventStream.prototype.merge=function(t){var n=this;return W(new g.Desc(n,"merge",[t]),g.mergeAll(this,t))},g.mergeAll=function(){var t=rn(arguments);return t.length?new p(new g.Desc(g,"mergeAll",t),function(n){var r=0,e=function(e){return function(i){return e.dispatcher.subscribe(function(e){if(e.isEnd())return r++,r===t.length?n(G()):g.more;var u=n(e);return u===g.noMore&&i(),u})}},i=I.map(e,t);return new g.CompositeUnsubscribe(i).unsubscribe}):g.never()},g.repeatedly=function(t,n){var r=0;return W(new g.Desc(g,"repeatedly",[t,n]),g.fromPoll(t,function(){return n[r++%n.length]}))},g.repeat=function(t){var n=0;return g.fromBinder(function(r){function e(t){return t.isEnd()?u?i():u=!0:o=r(t)}function i(){var i;for(u=!0;u&&o!==g.noMore;)i=t(n++),u=!1,i?s=i.subscribeInternal(e):r(G());return u=!0}var u=!1,o=g.more,s=function(){};return i(),function(){return s()}})},g.retry=function(t){if(!I.isFunction(t.source))throw new w("'source' option has to be a function");var n=t.source,r=t.retries||0,e=t.maxRetries||r,i=t.delay||function(){return 0},u=t.isRetryable||function(){return!0},o=!1,s=null;return W(new g.Desc(g,"retry",[t]),g.repeat(function(){function t(){return n().endOnError().withHandler(function(t){return t.isError()?(s=t,u(s.error)&&r>0?void 0:(o=!0,this.push(t))):(t.hasValue()&&(s=null,o=!0),this.push(t))})}if(o)return null;if(s){var a={error:s.error,retriesDone:e-r},c=g.later(i(a)).filter(!1);return r-=1,c.concat(g.once().flatMap(t))}return t()}))},g.sequentially=function(t,n){var r=0;return W(new g.Desc(g,"sequentially",[t,n]),g.fromPoll(t,function(){var t=n[r++];return r<n.length?t:r===n.length?[t,G()]:G()}))},g.Observable.prototype.skip=function(t){return W(new g.Desc(this,"skip",[t]),this.withHandler(function(n){return n.hasValue()&&t>0?(t--,g.more):this.push(n)}))},g.EventStream.prototype.skipUntil=function(t){var n=t.take(1).map(!0).toProperty(!1);return W(new g.Desc(this,"skipUntil",[t]),this.filter(n))},g.EventStream.prototype.skipWhile=function(t){for(var n=!1,r=arguments.length,e=Array(r>1?r-1:0),i=1;r>i;i++)e[i-1]=arguments[i];return U(this,t,e,function(t){return W(new g.Desc(this,"skipWhile",[t]),this.withHandler(function(r){return!n&&r.hasValue()&&t(r.value())?g.more:(r.hasValue()&&(n=!0),this.push(r))}))})},g.Observable.prototype.slidingWindow=function(t){var n=arguments.length<=1||void 0===arguments[1]?0:arguments[1];return W(new g.Desc(this,"slidingWindow",[t,n]),this.scan([],function(n,r){return n.concat([r]).slice(-t)}).filter(function(t){return t.length>=n}))};var vn=[],Y=function(t){if(vn.length&&!Y.running)try{Y.running=!0,vn.forEach(function(n){n(t)})}finally{delete Y.running}};g.spy=function(t){return vn.push(t)},g.Property.prototype.startWith=function(t){return W(new g.Desc(this,"startWith",[t]),this.scan(t,function(t,n){return n}))},g.EventStream.prototype.startWith=function(t){return W(new g.Desc(this,"startWith",[t]),g.once(t).concat(this))},g.Observable.prototype.takeWhile=function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;n>e;e++)r[e-1]=arguments[e];return U(this,t,r,function(t){return W(new g.Desc(this,"takeWhile",[t]),this.withHandler(function(n){return n.filter(t)?this.push(n):(this.push(G()),g.noMore)}))})},g.EventStream.prototype.throttle=function(t){return W(new g.Desc(this,"throttle",[t]),this.bufferWithTime(t).map(function(t){return t[t.length-1]}))},g.Property.prototype.throttle=function(t){return this.delayChanges(new g.Desc(this,"throttle",[t]),function(n){return n.throttle(t)})},f.prototype.firstToPromise=function(t){var n=this;if("function"!=typeof t){if("function"!=typeof Promise)throw new w("There isn't default Promise, use shim or parameter");t=Promise}return new t(function(t,r){return n.subscribe(function(n){return n.hasValue()&&t(n.value()),n.isError()&&r(n.error),g.noMore})})},f.prototype.toPromise=function(t){return this.last().firstToPromise(t)},g["try"]=function(t){return function(n){try{return g.once(t(n))}catch(r){return new g.Error(r)}}},g.update=function(t){function n(t){return function(){for(var n=arguments.length,r=Array(n),e=0;n>e;e++)r[e]=arguments[e];return function(n){return t.apply(void 0,[n].concat(r))}}}for(var r=arguments.length,e=Array(r>1?r-1:0),i=1;r>i;i++)e[i-1]=arguments[i];for(var u=e.length-1;u>0;)e[u]instanceof Function||(e[u]=I.always(e[u])),e[u]=n(e[u]),u-=2;return W(new g.Desc(g,"update",[t].concat(e)),g.when.apply(g,e).scan(t,function(t,n){return n(t)}))},g.zipAsArray=function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];var e=rn(n);return W(new g.Desc(g,"zipAsArray",e),g.zipWith(e,function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return n}))},g.zipWith=function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];var e=en(n),i=e[0],u=e[1];return i=I.map(function(t){return t.toEventStream()},i),W(new g.Desc(g,"zipWith",[u].concat(i)),g.when(i,u))},g.Observable.prototype.zip=function(t,n){return W(new g.Desc(this,"zip",[t]),g.zipWith([this,t],n||Array))},"undefined"!=typeof define&&null!==define&&null!=define.amd?(define('common/../../external/bacon/Bacon.min',[],function(){return g}),"undefined"!=typeof this&&null!==this&&(this.Bacon=g)):"undefined"!=typeof module&&null!==module&&null!=module.exports?(module.exports=g,g.Bacon=g):this.Bacon=g}).call(this);

/**
 * 公共配置
 */
define('common/common',['../../external/bacon/Bacon.min'], function(Bacon) {
  //pushable/pluggable stream
  return {type : 'common'}
});

/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define('common/../../external/spin/spin',factory)

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));

/*! https://mths.be/punycode v1.4.0 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('common/../../external/url/punycode',[],function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

define('common/../../external/url/util',[],function () {
    return {
        isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
    };

});


var strictUriEncode = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
};
define('common/../../external/url/querystring',[],function () {
    return {
        extract: function (str) {
            return str.split('?')[1] || '';
        },

        parse: function (str) {
            if (typeof str !== 'string') {
                return {};
            }

            str = _.trim(str).replace(/^(\?|#|&)/, '');

            if (!str) {
                return {};
            }

            return _.reduce(str.split('&'), function (ret, param) {
                var parts = param.replace(/\+/g, ' ').split('=');
                // Firefox (pre 40) decodes `%3D` to `=`
                // https://github.com/sindresorhus/query-string/pull/37
                var key = parts.shift();
                var val = parts.length > 0 ? parts.join('=') : undefined;

                key = decodeURIComponent(key);

                // missing `=` should be `null`:
                // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
                val = val === undefined ? null : decodeURIComponent(val);

                if (!ret.hasOwnProperty(key)) {
                    ret[key] = val;
                } else if (Array.isArray(ret[key])) {
                    ret[key].push(val);
                } else {
                    ret[key] = [ret[key], val];
                }

                return ret;
            }, {});
        },

        stringify: function (obj) {
            return obj ?_.filter(_.map( _.keys(obj).sort(), function (key) {
                var val = obj[key];

                if (val === undefined) {
                    return '';
                }

                if (val === null) {
                    return key;
                }

                if (_.isArray(val)) {
                    return _.map(val.sort(), function (val2) {
                        return strictUriEncode(key) + '=' + strictUriEncode(val2);
                    }).join('&');
                }

                return strictUriEncode(key) + '=' + strictUriEncode(val);
            }), function (x) {
                return x.length > 0;
            }).join('&') : '';
        }
    };
});

define('common/../../external/url/url',["./punycode", "./util", "./querystring"], function (punycode, util, querystring) {

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
  };

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};
    return {
        parse: urlParse,
        resolve: urlResolve,
        resolveObject: urlResolveObject,
        format: urlFormat,
        Url: Url
    };
});

/**
* @Date:   2016-07-02T09:55:05+08:00
* @Last modified time: 2016-07-07T15:32:42+08:00
*/

/**
 * utils
 */

define('common/helper',["./common", "../../external/spin/spin", "../../external/url/url"], function (common, Spin, url) {
  var helper = {};

  helper = Object.assign(helper,{
     getUUID
  });
  return helper;
});

/**
 * app.js
 * App入口文件
 */
define('app',["common/common", "common/helper"], function (common, helper) {
  /**
   * app执行入口
   * @method main
   * @return {[type]} [description]
   */
  console.log(common);
  console.log(helper);
  function main(){
    console.log('===========');
  }
  return main;
});



