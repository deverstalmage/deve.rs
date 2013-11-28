!function(a,b){"use strict";function c(a,b,c){d.directive(a,["$parse","$swipe",function(d,e){var f=75,g=.3,h=30;return function(i,j,k){function l(a){if(!m)return!1;var c=Math.abs(a.y-m.y),d=(a.x-m.x)*b;return n&&f>c&&d>0&&d>h&&g>c/d}var m,n,o=d(k[a]);e.bind(j,{start:function(a){m=a,n=!0},cancel:function(){n=!1},end:function(a,b){l(a)&&i.$apply(function(){j.triggerHandler(c),o(i,{$event:b})})}})}}])}var d=b.module("ngTouch",[]);d.factory("$swipe",[function(){function a(a){var b=a.touches&&a.touches.length?a.touches:[a],c=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||b[0].originalEvent||b[0];return{x:c.clientX,y:c.clientY}}var b=10;return{bind:function(c,d){var e,f,g,h,i=!1;c.on("touchstart mousedown",function(b){g=a(b),i=!0,e=0,f=0,h=g,d.start&&d.start(g,b)}),c.on("touchcancel",function(a){i=!1,d.cancel&&d.cancel(a)}),c.on("touchmove mousemove",function(c){if(i&&g){var j=a(c);if(e+=Math.abs(j.x-h.x),f+=Math.abs(j.y-h.y),h=j,!(b>e&&b>f))return f>e?(i=!1,d.cancel&&d.cancel(c),void 0):(c.preventDefault(),d.move&&d.move(j,c),void 0)}}),c.on("touchend mouseup",function(b){i&&(i=!1,d.end&&d.end(a(b),b))})}}}]),d.config(["$provide",function(a){a.decorator("ngClickDirective",["$delegate",function(a){return a.shift(),a}])}]),d.directive("ngClick",["$parse","$timeout","$rootElement",function(a,c,d){function e(a,b,c,d){return Math.abs(a-c)<o&&Math.abs(b-d)<o}function f(a,b,c){for(var d=0;d<a.length;d+=2)if(e(a[d],a[d+1],b,c))return a.splice(d,d+2),!0;return!1}function g(a){if(!(Date.now()-j>n)){var b=a.touches&&a.touches.length?a.touches:[a],c=b[0].clientX,d=b[0].clientY;1>c&&1>d||f(k,c,d)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur())}}function h(a){var b=a.touches&&a.touches.length?a.touches:[a],d=b[0].clientX,e=b[0].clientY;k.push(d,e),c(function(){for(var a=0;a<k.length;a+=2)if(k[a]==d&&k[a+1]==e)return k.splice(a,a+2),void 0},n,!1)}function i(a,b){k||(d[0].addEventListener("click",g,!0),d[0].addEventListener("touchstart",h,!0),k=[]),j=Date.now(),f(k,a,b)}var j,k,l=750,m=12,n=2500,o=25,p="ng-click-active";return function(c,d,e){function f(){o=!1,d.removeClass(p)}var g,h,j,k,n=a(e.ngClick),o=!1;d.on("touchstart",function(a){o=!0,g=a.target?a.target:a.srcElement,3==g.nodeType&&(g=g.parentNode),d.addClass(p),h=Date.now();var b=a.touches&&a.touches.length?a.touches:[a],c=b[0].originalEvent||b[0];j=c.clientX,k=c.clientY}),d.on("touchmove",function(){f()}),d.on("touchcancel",function(){f()}),d.on("touchend",function(a){var c=Date.now()-h,n=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?a.touches:[a],p=n[0].originalEvent||n[0],q=p.clientX,r=p.clientY,s=Math.sqrt(Math.pow(q-j,2)+Math.pow(r-k,2));o&&l>c&&m>s&&(i(q,r),g&&g.blur(),b.isDefined(e.disabled)&&e.disabled!==!1||d.triggerHandler("click",[a])),f()}),d.onclick=function(){},d.on("click",function(a,b){c.$apply(function(){n(c,{$event:b||a})})}),d.on("mousedown",function(){d.addClass(p)}),d.on("mousemove mouseup",function(){d.removeClass(p)})}}]),c("ngSwipeLeft",-1,"swipeleft"),c("ngSwipeRight",1,"swiperight")}(window,window.angular),function(a,b,c){"use strict";b.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(d,e){var f=b.noop,g=b.forEach,h=e.$$selectors,i=1,j="$$ngAnimateState",k="ng-animate",l={running:!0};d.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(a,c,d,e,m,n){function o(a){if(a){var b=[],e={},f=a.substr(1).split(".");(d.transitions||d.animations)&&f.push("");for(var g=0;g<f.length;g++){var i=f[g],j=h[i];j&&!e[i]&&(b.push(c.get(j)),e[i]=!0)}return b}}function p(a,b,c,d,e,h,i){function l(a){if(q(),a===!0)return u(),void 0;var b=c.data(j);b&&(b.done=u,c.data(j,b)),n(B,"after",u)}function n(d,e,h){function i(a,b){var c=b+"Complete",e=d[a];e[c]=!0,(e[j]||f)();for(var g=0;g<d.length;g++)if(!d[g][c])return;h()}var j=e+"End";g(d,function(d,f){var g=function(){i(f,e)};return"before"!=e||"enter"!=a&&"move"!=a?(d[e]?d[j]=z?d[e](c,b,g):d[e](c,g):g(),void 0):(g(),void 0)})}function p(){i&&m(i,0,!1)}function q(){q.hasBeenRun||(q.hasBeenRun=!0,h())}function u(){if(!u.hasBeenRun){u.hasBeenRun=!0;var a=c.data(j);a&&(z?s(c):(a.closeAnimationTimeout=m(function(){s(c)},0,!1),c.data(j,a))),p()}}var v=c.attr("class")||"",w=v+" "+b,x=(" "+w).replace(/\s+/g,".");d||(d=e?e.parent():c.parent());var y=o(x),z="addClass"==a||"removeClass"==a,A=c.data(j)||{};if(t(c,d)||0===y.length)return q(),u(),void 0;var B=[];if(A.running&&z&&A.structural||g(y,function(d){if(!d.allowCancel||d.allowCancel(c,a,b)){var e,f=d[a];"leave"==a?(e=f,f=null):e=d["before"+a.charAt(0).toUpperCase()+a.substr(1)],B.push({before:e,after:f})}}),0===B.length)return q(),p(),void 0;var C=" "+v+" ";A.running&&(m.cancel(A.closeAnimationTimeout),s(c),r(A.animations),A.beforeComplete?(A.done||f)(!0):z&&!A.structural&&(C="removeClass"==A.event?C.replace(A.className,""):C+A.className+" "));var D=" "+b+" ";return"addClass"==a&&C.indexOf(D)>=0||"removeClass"==a&&-1==C.indexOf(D)?(q(),p(),void 0):(c.addClass(k),c.data(j,{running:!0,event:a,className:b,structural:!z,animations:B,done:l}),n(B,"before",l),void 0)}function q(a){var c=a[0];c.nodeType==i&&g(c.querySelectorAll("."+k),function(a){a=b.element(a);var c=a.data(j);c&&(r(c.animations),s(a))})}function r(a){var b=!0;g(a,function(c){a.beforeComplete||(c.beforeEnd||f)(b),a.afterComplete||(c.afterEnd||f)(b)})}function s(a){a[0]==e[0]?l.disabled||(l.running=!1,l.structural=!1):(a.removeClass(k),a.removeData(j))}function t(a,b){if(l.disabled)return!0;if(a[0]==e[0])return l.disabled||l.running;do{if(0===b.length)break;var c=b[0]==e[0],d=c?l:b.data(j),f=d&&(!!d.disabled||!!d.running);if(c||f)return f;if(c)return!0}while(b=b.parent());return!0}return e.data(j,l),n.$$postDigest(function(){n.$$postDigest(function(){l.running=!1})}),{enter:function(b,c,d,e){this.enabled(!1,b),a.enter(b,c,d),n.$$postDigest(function(){p("enter","ng-enter",b,c,d,f,e)})},leave:function(b,c){q(b),this.enabled(!1,b),n.$$postDigest(function(){p("leave","ng-leave",b,null,null,function(){a.leave(b)},c)})},move:function(b,c,d,e){q(b),this.enabled(!1,b),a.move(b,c,d),n.$$postDigest(function(){p("move","ng-move",b,c,d,f,e)})},addClass:function(b,c,d){p("addClass",c,b,null,null,function(){a.addClass(b,c)},d)},removeClass:function(b,c,d){p("removeClass",c,b,null,null,function(){a.removeClass(b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)s(b);else{var c=b.data(j)||{};c.disabled=!0,b.data(j,c)}break;case 1:l.disabled=!a;break;default:a=!l.disabled}return!!a}}}]),e.register("",["$window","$sniffer","$timeout",function(d,e,h){function j(a){P.push(a),h.cancel(E),E=h(function(){g(P,function(a){a()}),P=[],E=null,N={}},10,!1)}function k(a,b){var c=b?N[b]:null;if(!c){var e,f,h,j,k=0,m=0,n=0,o=0;g(a,function(a){if(a.nodeType==i){var b=d.getComputedStyle(a)||{};h=b[z+F],k=Math.max(l(h),k),j=b[z+G],e=b[z+H],m=Math.max(l(e),m),f=b[B+H],o=Math.max(l(f),o);var c=l(b[B+F]);c>0&&(c*=parseInt(b[B+I],10)||1),n=Math.max(c,n)}}),c={total:0,transitionPropertyStyle:j,transitionDurationStyle:h,transitionDelayStyle:e,transitionDelay:m,transitionDuration:k,animationDelayStyle:f,animationDelay:o,animationDuration:n},b&&(N[b]=c)}return c}function l(a){var c=0,d=b.isString(a)?a.split(/\s*,\s*/):[];return g(d,function(a){c=Math.max(parseFloat(a)||0,c)}),c}function m(a){var b=a.parent(),c=b.data(J);return c||(b.data(J,++O),c=O),c+"-"+a[0].className}function n(a,b){var c=m(a),d=c+" "+b,e={},f=N[d]?++N[d].total:0;if(f>0){var h=b+"-stagger",i=c+" "+h,j=!N[i];j&&a.addClass(h),e=k(a,i),j&&a.removeClass(h)}a.addClass(b);var l=k(a,d),n=Math.max(l.transitionDuration,l.animationDuration);if(0===n)return a.removeClass(b),!1;a[0];var q="";return l.transitionDuration>0?(a.addClass(L),q+=M+" ",o(a)):p(a),g(b.split(" "),function(a,b){q+=(b>0?" ":"")+a+"-active"}),a.data(K,{className:b,activeClassName:q,maxDuration:n,classes:b+" "+q,timings:l,stagger:e,ii:f}),!0}function o(a){a[0].style[z+G]="none"}function p(a){a[0].style[B]="none 0s"}function q(a){var b=a[0],c=z+G;b.style[c]&&b.style[c].length>0&&(b.style[c]="")}function r(a){var b=a[0],c=B;b.style[c]&&b.style[c].length>0&&(a[0].style[c]="")}function s(a,b,c){function d(a){a.stopPropagation();var b=a.originalEvent||a,d=b.$manualTimeStamp||b.timeStamp||Date.now();Math.max(d-n,0)>=m&&b.elapsedTime>=k&&c()}var f=a.data(K);if(!a.hasClass(b)||!f)return c(),void 0;var g,h=a[0],i=f.timings,j=f.stagger,k=f.maxDuration,l=f.activeClassName,m=1e3*Math.max(i.transitionDelay,i.animationDelay),n=Date.now(),o=C+" "+A,p=f.ii,q="",r=[];if(i.transitionDuration>0){var s=i.transitionPropertyStyle;if(-1==s.indexOf("all")){g=!0;var u=e.msie?"-ms-zoom":"border-spacing";q+=D+"transition-property: "+s+", "+u+"; ",q+=D+"transition-duration: "+i.transitionDurationStyle+", "+i.transitionDuration+"s; ",r.push(D+"transition-property"),r.push(D+"transition-duration")}}if(p>0){if(j.transitionDelay>0&&0===j.transitionDuration){var v=i.transitionDelayStyle;g&&(v+=", "+i.transitionDelay+"s"),q+=D+"transition-delay: "+t(v,j.transitionDelay,p)+"; ",r.push(D+"transition-delay")}j.animationDelay>0&&0===j.animationDuration&&(q+=D+"animation-delay: "+t(i.animationDelayStyle,j.animationDelay,p)+"; ",r.push(D+"animation-delay"))}if(r.length>0){var w=h.getAttribute("style")||"";h.setAttribute("style",w+" "+q)}return a.on(o,d),a.addClass(l),function(){a.off(o,d),a.removeClass(l),x(a,b);for(var c in r)h.style.removeProperty(r[c])}}function t(a,b,c){var d="";return g(a.split(","),function(a,e){d+=(e>0?",":"")+(c*b+parseInt(a,10))+"s"}),d}function u(a,b){return n(a,b)?function(c){c&&x(a,b)}:void 0}function v(a,b,c){return a.data(K)?s(a,b,c):(x(a,b),c(),void 0)}function w(a,b,c){var d=u(a,b);if(!d)return c(),void 0;var e=d;return j(function(){q(a),r(a),e=v(a,b,c)}),function(a){(e||f)(a)}}function x(a,b){a.removeClass(b),a.removeClass(L),a.removeData(K)}function y(a,c){var d="";return a=b.isArray(a)?a:a.split(/\s+/),g(a,function(a,b){a&&a.length>0&&(d+=(b>0?" ":"")+a+c)}),d}var z,A,B,C,D="";a.ontransitionend===c&&a.onwebkittransitionend!==c?(D="-webkit-",z="WebkitTransition",A="webkitTransitionEnd transitionend"):(z="transition",A="transitionend"),a.onanimationend===c&&a.onwebkitanimationend!==c?(D="-webkit-",B="WebkitAnimation",C="webkitAnimationEnd animationend"):(B="animation",C="animationend");var E,F="Duration",G="Property",H="Delay",I="IterationCount",J="$$ngAnimateKey",K="$$ngAnimateCSS3Data",L="ng-animate-start",M="ng-animate-active",N={},O=0,P=[];return{allowCancel:function(a,c,d){var e=(a.data(K)||{}).classes;if(!e||["enter","leave","move"].indexOf(c)>=0)return!0;var f=a.parent(),h=b.element(a[0].cloneNode());h.attr("style","position:absolute; top:-9999px; left:-9999px"),h.removeAttr("id"),h.html(""),g(e.split(" "),function(a){h.removeClass(a)});var i="addClass"==c?"-add":"-remove";h.addClass(y(d,i)),f.append(h);var j=k(h);return h.remove(),Math.max(j.transitionDuration,j.animationDuration)>0},enter:function(a,b){return w(a,"ng-enter",b)},leave:function(a,b){return w(a,"ng-leave",b)},move:function(a,b){return w(a,"ng-move",b)},beforeAddClass:function(a,b,c){var d=u(a,y(b,"-add"));return d?(j(function(){q(a),r(a),c()}),d):(c(),void 0)},addClass:function(a,b,c){return v(a,y(b,"-add"),c)},beforeRemoveClass:function(a,b,c){var d=u(a,y(b,"-remove"));return d?(j(function(){q(a),r(a),c()}),d):(c(),void 0)},removeClass:function(a,b,c){return v(a,y(b,"-remove"),c)}}}])}])}(window,window.angular),function(a,b,c){"use strict";function d(a){return null!=a&&""!==a&&"hasOwnProperty"!==a&&g.test("."+a)}function e(a,b){if(!d(b))throw f("badmember",'Dotted member path "@{0}" is invalid.',b);for(var e=b.split("."),g=0,h=e.length;h>g&&a!==c;g++){var i=e[g];a=null!==a?a[i]:c}return a}var f=b.$$minErr("$resource"),g=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;b.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(a,d){function g(a){return h(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function h(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function i(a,b){this.template=a,this.defaults=b||{},this.urlParams={}}function j(g,h,q){function r(a,b){var c={};return b=n({},h,b),m(b,function(b,d){p(b)&&(b=b()),c[d]=b&&b.charAt&&"@"==b.charAt(0)?e(a,b.substr(1)):b}),c}function s(a){return a.resource}function t(a){o(a||{},this)}var u=new i(g);return q=n({},k,q),m(q,function(e,g){var h=/^(POST|PUT|PATCH)$/i.test(e.method);t[g]=function(g,i,j,k){var q,v,w,x={};switch(arguments.length){case 4:w=k,v=j;case 3:case 2:if(!p(i)){x=g,q=i,v=j;break}if(p(g)){v=g,w=i;break}v=i,w=j;case 1:p(g)?v=g:h?q=g:x=g;break;case 0:break;default:throw f("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var y=this instanceof t,z=y?q:e.isArray?[]:new t(q),A={},B=e.interceptor&&e.interceptor.response||s,C=e.interceptor&&e.interceptor.responseError||c;m(e,function(a,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(A[b]=o(a))}),h&&(A.data=q),u.setUrlParams(A,n({},r(q,e.params||{}),x),e.url);var D=a(A).then(function(a){var c=a.data,d=z.$promise;if(c){if(b.isArray(c)!==!!e.isArray)throw f("badcfg","Error in resource configuration. Expected response to contain an {0} but got an {1}",e.isArray?"array":"object",b.isArray(c)?"array":"object");e.isArray?(z.length=0,m(c,function(a){z.push(new t(a))})):(o(c,z),z.$promise=d)}return z.$resolved=!0,a.resource=z,a},function(a){return z.$resolved=!0,(w||l)(a),d.reject(a)});return D=D.then(function(a){var b=B(a);return(v||l)(b,a.headers),b},C),y?D:(z.$promise=D,z.$resolved=!1,z)},t.prototype["$"+g]=function(a,b,c){p(a)&&(c=b,b=a,a={});var d=t[g].call(this,a,this,b,c);return d.$promise||d}}),t.bind=function(a){return j(g,n({},h,a),q)},t}var k={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},l=b.noop,m=b.forEach,n=b.extend,o=b.copy,p=b.isFunction;return i.prototype={setUrlParams:function(a,c,d){var e,h,i=this,j=d||i.template,k=i.urlParams={};m(j.split(/\W/),function(a){if("hasOwnProperty"===a)throw f("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(a)&&a&&new RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(j)&&(k[a]=!0)}),j=j.replace(/\\:/g,":"),c=c||{},m(i.urlParams,function(a,d){e=c.hasOwnProperty(d)?c[d]:i.defaults[d],b.isDefined(e)&&null!==e?(h=g(e),j=j.replace(new RegExp(":"+d+"(\\W|$)","g"),h+"$1")):j=j.replace(new RegExp("(/?):"+d+"(\\W|$)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),j=j.replace(/\/+$/,""),j=j.replace(/\/\.(?=\w+($|\?))/,"."),a.url=j.replace(/\/\\\./,"/."),m(c,function(b,c){i.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}},j}])}(window,window.angular),function(a,b,c){"use strict";b.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(a,d){function e(){var a,e,f,i;for(a in h)k(g[a])&&d.cookies(a,c);for(a in g)e=g[a],b.isString(e)?e!==h[a]&&(d.cookies(a,e),i=!0):b.isDefined(h[a])?g[a]=h[a]:delete g[a];if(i){i=!1,f=d.cookies();for(a in g)g[a]!==f[a]&&(k(f[a])?delete g[a]:g[a]=f[a],i=!0)}}var f,g={},h={},i=!1,j=b.copy,k=b.isUndefined;return d.addPollFn(function(){var b=d.cookies();f!=b&&(f=b,j(b,h),j(b,g),i&&a.$apply())})(),i=!0,a.$watch(e),g}]).factory("$cookieStore",["$cookies",function(a){return{get:function(c){var d=a[c];return d?b.fromJson(d):d},put:function(c,d){a[c]=b.toJson(d)},remove:function(b){delete a[b]}}}])}(window,window.angular),function(a,b){"use strict";function c(){this.$get=["$$sanitizeUri",function(a){return function(b){var c=[];return f(b,i(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function d(a){var c=[],d=i(c,b.noop);return d.chars(a),c.join("")}function e(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function f(a,c){function d(a,d,f,h){if(d=b.lowercase(d),x[d])for(;s.last()&&y[s.last()];)e("",s.last());w[d]&&s.last()==d&&e("",d),h=t[d]||!!h,h||s.push(d);var i={};f.replace(m,function(a,b,c,d,e){var f=c||d||e||"";i[b]=g(f)}),c.start&&c.start(d,i,h)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=s.length-1;f>=0&&s[f]!=d;f--);if(f>=0){for(e=s.length-1;e>=f;e--)c.end&&c.end(s[e]);s.length=f}}var f,h,i,s=[],u=a;for(s.last=function(){return s[s.length-1]};a;){if(h=!0,s.last()&&z[s.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+s.last()+"[^>]*>","i"),function(a,b){return b=b.replace(p,"$1").replace(r,"$1"),c.chars&&c.chars(g(b)),""}),e("",s.last());else if(0===a.indexOf("<!--")?(f=a.indexOf("--",4),f>=0&&a.lastIndexOf("-->",f)===f&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),h=!1)):q.test(a)?(i=a.match(q),i&&(a=a.replace(i[0],""),h=!1)):o.test(a)?(i=a.match(l),i&&(a=a.substring(i[0].length),i[0].replace(l,e),h=!1)):n.test(a)&&(i=a.match(k),i&&(a=a.substring(i[0].length),i[0].replace(k,d),h=!1)),h){f=a.indexOf("<");var v=0>f?a:a.substring(0,f);a=0>f?"":a.substring(f),c.chars&&c.chars(g(v))}if(a==u)throw j("badparse","The sanitizer was unable to parse the following block of html: {0}",a);u=a}e()}function g(a){if(!a)return"";var b=/^(\s*)([\s\S]*?)(\s*)$/,c=b.exec(a);return c[0]="",c[2]&&(D.innerHTML=c[2].replace(/</g,"&lt;"),c[2]=D.innerText||D.textContent),c.join("")}function h(a){return a.replace(/&/g,"&amp;").replace(s,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&z[a]&&(d=a),d||A[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,f){var g=b.lowercase(f),i="img"===a&&"src"===g||"background"===g;C[g]!==!0||B[g]===!0&&!c(d,i)||(e(" "),e(f),e('="'),e(h(d)),e('"'))}),e(g?"/>":">"))},end:function(a){a=b.lowercase(a),d||A[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(h(a))}}}var j=b.$$minErr("$sanitize"),k=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,l=/^<\s*\/\s*([\w:-]+)[^>]*>/,m=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,n=/^</,o=/^<\s*\//,p=/<!--(.*?)-->/g,q=/<!DOCTYPE([^>]*?)>/i,r=/<!\[CDATA\[(.*?)]]>/g,s=/([^\#-~| |!])/g,t=e("area,br,col,hr,img,wbr"),u=e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=e("rp,rt"),w=b.extend({},v,u),x=b.extend({},u,e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),y=b.extend({},v,e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),z=e("script,style"),A=b.extend({},t,x,y,w),B=e("background,cite,href,longdesc,src,usemap"),C=b.extend({},B,e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),D=document.createElement("pre");b.module("ngSanitize",[]).provider("$sanitize",c),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,e=/^mailto:/;return function(f,g){function h(a){a&&n.push(d(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&(n.push('target="'),n.push(g),n.push('" ')),n.push('href="'),n.push(a),n.push('">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]==j[3]&&(k="mailto:"+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(e,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular),function(a,b){"use strict";function c(){function a(a,c){return b.extend(new(b.extend(function(){},{prototype:a})),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){if(d[a]=b.extend({reloadOnSearch:!0},e,a&&c(a,e)),a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[f]=b.extend({redirectTo:a},c(f,e))}return this},this.otherwise=function(a){return this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(c,e,f,g,h,i,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i="string"==typeof e[f]?decodeURIComponent(e[f]):e[f];h&&i&&(d[h.name]=i)}return d}function m(){var a=n(),d=q.current;a&&d&&a.$$route===d.$$route&&b.equals(a.pathParams,d.pathParams)&&!a.reloadOnSearch&&!p?(d.params=a.params,b.copy(d.params,f),c.$broadcast("$routeUpdate",d)):(a||d)&&(p=!1,c.$broadcast("$routeChangeStart",a,d),q.current=a,a&&a.redirectTo&&(b.isString(a.redirectTo)?e.path(o(a.redirectTo,a.params)).search(a.params).replace():e.url(a.redirectTo(a.pathParams,e.path(),e.search())).replace()),g.when(a).then(function(){if(a){var c,d,e=b.extend({},a.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?h.get(a):h.invoke(a)}),b.isDefined(c=a.template)?b.isFunction(c)&&(c=c(a.params)):b.isDefined(d=a.templateUrl)&&(b.isFunction(d)&&(d=d(a.params)),d=k.getTrustedResourceUrl(d),b.isDefined(d)&&(a.loadedTemplateUrl=d,c=i.get(d,{cache:j}).then(function(a){return a.data}))),b.isDefined(c)&&(e.$template=c),g.all(e)}}).then(function(e){a==q.current&&(a&&(a.locals=e,b.copy(a.params,f)),c.$broadcast("$routeChangeSuccess",a,d))},function(b){a==q.current&&c.$broadcast("$routeChangeError",a,d,b)}))}function n(){var c,f;return b.forEach(d,function(d){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function o(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var p=!1,q={routes:d,reload:function(){p=!0,c.$evalAsync(m)}};return c.$on("$locationChangeSuccess",m),q}]}function d(){this.$get=function(){return{}}}function e(a,c,d,e,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(g,h,i,j,k){function l(){n&&(n.$destroy(),n=null),o&&(f.leave(o),o=null)}function m(){var i=a.current&&a.current.locals,j=i&&i.$template;if(j){var m=g.$new(),r=k(m,b.noop);r.html(j),f.enter(r,null,o||h,function(){!b.isDefined(p)||p&&!g.$eval(p)||c()}),l();var s=d(r.contents()),t=a.current;if(n=t.scope=m,o=r,t.controller){i.$scope=n;var u=e(t.controller,i);t.controllerAs&&(n[t.controllerAs]=u),r.data("$ngControllerController",u),r.children().data("$ngControllerController",u)}s(n),n.$emit("$viewContentLoaded"),n.$eval(q)}else l()}var n,o,p=i.autoscroll,q=i.onload||"";g.$on("$routeChangeSuccess",m),m()}}}var f=b.module("ngRoute",["ng"]).provider("$route",c);f.provider("$routeParams",d),f.directive("ngView",e),e.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]}(window,window.angular),function(a){"use strict";var b=window.angulartics||(window.angulartics={});b.waitForVendorApi=function(a,c,d){window.hasOwnProperty(a)?d(window[a]):setTimeout(function(){b.waitForVendorApi(a,c,d)},c)},a.module("angulartics",[]).provider("$analytics",function(){var b={pageTracking:{autoTrackFirstPage:!0,autoTrackVirtualPages:!0,bufferFlushDelay:1e3},eventTracking:{bufferFlushDelay:1e3}},c={pageviews:[],events:[]},d=function(a){c.pageviews.push(a)},e=function(a,b){c.events.push({name:a,properties:b})},f={settings:b,pageTrack:d,eventTrack:e},g=function(d){f.pageTrack=d,a.forEach(c.pageviews,function(a,c){setTimeout(function(){f.pageTrack(a)},c*b.pageTracking.bufferFlushDelay)})},h=function(d){f.eventTrack=d,a.forEach(c.events,function(a,c){setTimeout(function(){f.eventTrack(a.name,a.properties)},c*b.eventTracking.bufferFlushDelay)})};return{$get:function(){return f},settings:b,virtualPageviews:function(a){this.settings.pageTracking.autoTrackVirtualPages=a},firstPageview:function(a){this.settings.pageTracking.autoTrackFirstPage=a},registerPageTrack:g,registerEventTrack:h}}).run(["$rootScope","$location","$analytics",function(a,b,c){c.settings.pageTracking.autoTrackFirstPage&&c.pageTrack(b.absUrl()),c.settings.pageTracking.autoTrackVirtualPages&&a.$on("$routeChangeSuccess",function(a,d){d&&(d.$$route||d).redirectTo||c.pageTrack(b.url())})}]).directive("analyticsOn",["$analytics",function(b){function c(a){return["a:","button:","button:button","button:submit","input:button","input:submit"].indexOf(a.tagName.toLowerCase()+":"+(a.type||""))>=0}function d(a){return c(a)?"click":"click"}function e(a){return c(a)?a.innerText||a.value:a.id||a.name||a.tagName}function f(a){return"analytics"===a.substr(0,9)&&-1===["on","event"].indexOf(a.substr(10))}return{restrict:"A",scope:!1,link:function(c,g,h){var i=h.analyticsOn||d(g[0]),j=h.analyticsEvent||e(g[0]),k={};a.forEach(h.$attr,function(a,b){f(a)&&(k[b.slice(9).toLowerCase()]=h[b])}),a.element(g[0]).bind(i,function(){b.eventTrack(j,k)})}}}])}(angular),function(a){"use strict";a.module("angulartics.google.analytics",["angulartics"]).config(["$analyticsProvider",function(a){a.registerPageTrack(function(a){window._gaq&&_gaq.push(["_trackPageview",a]),window.ga&&ga("send","pageview",a)}),a.registerEventTrack(function(a,b){window._gaq&&_gaq.push(["_trackEvent",b.category,a,b.label,b.value]),window.ga&&ga("send","event",b.category,a,b.label,b.value)})}])}(angular);var module=angular.module("ngFitText",[]);module.directive("fittext",[function(){return{restrict:"A",scope:!0,link:function(a,b,c){a.compressor=c.fittext||1,a.minFontSize=c.fittextMin||Number.NEGATIVE_INFINITY,a.maxFontSize=c.fittextMax||Number.POSITIVE_INFINITY;var d=function(){a.$apply(function(){a.fontSize=Math.max(Math.min(b[0].offsetWidth/(10*a.compressor),parseFloat(a.maxFontSize)),parseFloat(a.minFontSize))+"px",b[0].style.fontSize=a.fontSize})};angular.element(document).ready(function(){d()}),angular.element(window).bind("resize",function(){d()})}}}]);