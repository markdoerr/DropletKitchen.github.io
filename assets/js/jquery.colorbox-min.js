(function(c,r,E){function g(a,d,ka){a=r.createElement(a);return d&&(a.id=m+d),ka&&(a.style.cssText=ka),c(a)}function X(){return E.innerHeight?E.innerHeight:c(E).height()}function P(a,d){d!==Object(d)&&(d={});this.cache={};this.el=a;this.value=function(a){var b;return void 0===this.cache[a]&&(b=c(this.el).attr("data-cbox-"+a),void 0!==b?this.cache[a]=b:void 0!==d[a]?this.cache[a]=d[a]:void 0!==Y[a]&&(this.cache[a]=Y[a])),this.cache[a]};this.get=function(a){a=this.value(a);return c.isFunction(a)?a.call(this.el,
this):a}}function Q(a){var d=n.length;a=(q+a)%d;return 0>a?d+a:a}function k(a,d){return Math.round((/%/.test(a)?("x"===d?z.width():X())/100:1)*parseInt(a,10))}function la(a,d){return a.get("retinaUrl")&&1<E.devicePixelRatio?d.replace(a.get("photoRegex"),a.get("retinaSuffix")):d}function ma(a){"contains"in f[0]&&!f[0].contains(a.target)&&a.target!==A[0]&&(a.stopPropagation(),f.focus())}function J(a){J.str!==a&&(f.add(A).removeClass(J.str).addClass(a),J.str=a)}function qa(b){q=0;b&&!1!==b&&"nofollow"!==
b?(n=c("."+H).filter(function(){var a=c.data(this,t);return(new P(this,a)).get("rel")===b}),q=n.index(a.el),-1===q&&(n=n.add(a.el),q=n.length-1)):n=c(a.el)}function F(a){c(r).trigger(a);w.triggerHandler(a)}function R(b){var d;if(!K){if(d=c(b).data(t),a=new P(b,d),qa(a.get("rel")),!B){B=L=!0;J(a.get("className"));f.css({visibility:"hidden",display:"block",opacity:""});l=g(h,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden");u.css({width:"",height:""}).append(l);x=Z.height()+$.height()+
u.outerHeight(!0)-u.height();y=aa.width()+ba.width()+u.outerWidth(!0)-u.width();C=l.outerHeight(!0);D=l.outerWidth(!0);b=k(a.get("initialWidth"),"x");d=k(a.get("initialHeight"),"y");var e=a.get("maxWidth"),s=a.get("maxHeight");a.w=Math.max((!1!==e?Math.min(b,k(e,"x")):b)-D-y,0);a.h=Math.max((!1!==s?Math.min(d,k(s,"y")):d)-C-x,0);l.css({width:"",height:a.h});p.position();F(ra);a.get("onOpen");ca.add(da).hide();f.focus();a.get("trapFocus")&&r.addEventListener&&(r.addEventListener("focus",ma,!0),w.one(ea,
function(){r.removeEventListener("focus",ma,!0)}));a.get("returnFocus")&&w.one(ea,function(){c(a.el).focus()})}b=parseFloat(a.get("opacity"));A.css({opacity:b===b?b:"",cursor:a.get("overlayClose")?"pointer":"",visibility:"visible"}).show();a.get("closeButton")?S.html(a.get("close")).appendTo(u):S.appendTo("<div/>");sa()}}function na(){f||(fa=!1,z=c(E),f=g(h).attr({id:t,"class":!1===c.support.opacity?m+"IE":"",role:"dialog",tabindex:"-1"}).hide(),A=g(h,"Overlay").hide(),T=c([g(h,"LoadingOverlay")[0],
g(h,"LoadingGraphic")[0]]),G=g(h,"Wrapper"),u=g(h,"Content").append(da=g(h,"Title"),ga=g(h,"Current"),M=c('<button type="button"/>').attr({id:m+"Previous"}),N=c('<button type="button"/>').attr({id:m+"Next"}),I=c('<button type="button"/>').attr({id:m+"Slideshow"}),T),S=c('<button type="button"/>').attr({id:m+"Close"}),G.append(g(h).append(g(h,"TopLeft"),Z=g(h,"TopCenter"),g(h,"TopRight")),g(h,!1,"clear:left").append(aa=g(h,"MiddleLeft"),u,ba=g(h,"MiddleRight")),g(h,!1,"clear:left").append(g(h,"BottomLeft"),
$=g(h,"BottomCenter"),g(h,"BottomRight"))).find("div div").css({"float":"left"}),O=g(h,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),ca=N.add(M).add(ga).add(I));r.body&&!f.parent().length&&c(r.body).append(A,f.append(G,O))}function ta(){function b(a){1<a.which||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey||(a.preventDefault(),R(this))}return f?(fa||(fa=!0,N.click(function(){p.next()}),M.click(function(){p.prev()}),S.click(function(){p.close()}),A.click(function(){a.get("overlayClose")&&
p.close()}),c(r).bind("keydown."+m,function(b){var c=b.keyCode;B&&a.get("escKey")&&27===c&&(b.preventDefault(),p.close());B&&a.get("arrowKey")&&n[1]&&!b.altKey&&(37===c?(b.preventDefault(),M.click()):39===c&&(b.preventDefault(),N.click()))}),c.isFunction(c.fn.on)?c(r).on("click."+m,"."+H,b):c("."+H).live("click."+m,b)),!0):!1}function sa(){var b,d,f,s=p.prep,l=++ha;if(L=!0,e=!1,F(U),F(V),a.get("onLoad"),a.h=a.get("height")?k(a.get("height"),"y")-C-x:a.get("innerHeight")&&k(a.get("innerHeight"),"y"),
a.w=a.get("width")?k(a.get("width"),"x")-D-y:a.get("innerWidth")&&k(a.get("innerWidth"),"x"),a.mw=a.w,a.mh=a.h,a.get("maxWidth")&&(a.mw=k(a.get("maxWidth"),"x")-D-y,a.mw=a.w&&a.w<a.mw?a.w:a.mw),a.get("maxHeight")&&(a.mh=k(a.get("maxHeight"),"y")-C-x,a.mh=a.h&&a.h<a.mh?a.h:a.mh),b=a.get("href"),oa=setTimeout(function(){T.show()},100),a.get("inline")){var ia=c(b).eq(0);f=c("<div>").hide().insertBefore(ia);w.one(U,function(){f.replaceWith(ia)});s(ia)}else a.get("iframe")?s(" "):a.get("html")?s(a.get("html")):
a.get("photo")||a.get("photoRegex").test(b)?(b=la(a,b),e=a.get("createImg"),c(e).addClass(m+"Photo").bind("error."+m,function(){s(g(h,"Error").html(a.get("imgError")))}).one("load",function(){l===ha&&setTimeout(function(){var b;a.get("retinaImage")&&1<E.devicePixelRatio&&(e.height/=E.devicePixelRatio,e.width/=E.devicePixelRatio);a.get("scalePhotos")&&(d=function(){e.height-=e.height*b;e.width-=e.width*b},a.mw&&e.width>a.mw&&(b=(e.width-a.mw)/e.width,d()),a.mh&&e.height>a.mh&&(b=(e.height-a.mh)/e.height,
d()));a.h&&(e.style.marginTop=Math.max(a.mh-e.height,0)/2+"px");n[1]&&(a.get("loop")||n[q+1])&&(e.style.cursor="pointer",c(e).bind("click."+m,function(){p.next()}));e.style.width=e.width+"px";e.style.height=e.height+"px";s(e)},1)}),e.src=b):b&&O.load(b,a.get("data"),function(b,d){l===ha&&s("error"===d?g(h,"Error").html(a.get("xhrError")):c(this).contents())})}var A,f,G,u,Z,aa,ba,$,n,z,l,O,T,da,ga,I,N,M,S,ca,a,x,y,C,D,q,e,B,L,K,oa,p,fa,Y={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,
fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:0.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return c(this).attr("href")},title:function(){return this.title},createImg:function(){var a=new Image,d=c(this).data("cbox-img-attrs");return"object"==typeof d&&
c.each(d,function(c,d){a[c]=d}),a},createIframe:function(){var a=r.createElement("iframe"),d=c(this).data("cbox-iframe-attrs");return"object"==typeof d&&c.each(d,function(c,d){a[c]=d}),"frameBorder"in a&&(a.frameBorder=0),"allowTransparency"in a&&(a.allowTransparency="true"),a.name=(new Date).getTime(),a.allowFullscreen=!0,a}},t="colorbox",m="cbox",H=m+"Element",ra=m+"_open",V=m+"_load",W=m+"_complete",ja=m+"_cleanup",ea=m+"_closed",U=m+"_purge",w=c("<a/>"),h="div",ha=0,pa={},ua=function(){function b(){clearTimeout(l)}
function c(){(a.get("loop")||n[q+1])&&(b(),l=setTimeout(p.next,a.get("slideshowSpeed")))}function e(){I.html(a.get("slideshowStop")).unbind(v).one(v,s);w.bind(W,c).bind(V,b);f.removeClass(k+"off").addClass(k+"on")}function s(){b();w.unbind(W,c).unbind(V,b);I.html(a.get("slideshowStart")).unbind(v).one(v,function(){p.next();e()});f.removeClass(k+"on").addClass(k+"off")}function g(){h=!1;I.hide();b();w.unbind(W,c).unbind(V,b);f.removeClass(k+"off "+k+"on")}var h,l,k=m+"Slideshow_",v="click."+m;return function(){h?
a.get("slideshow")||(w.unbind(ja,g),g()):a.get("slideshow")&&n[1]&&(h=!0,w.one(ja,g),a.get("slideshowAuto")?e():s(),I.show())}}();c[t]||(c(na),p=c.fn[t]=c[t]=function(a,d){var e,f=this;return a=a||{},c.isFunction(f)&&(f=c("<a/>"),a.open=!0),f[0]?(na(),ta()&&(d&&(a.onComplete=d),f.each(function(){var d=c.data(this,t)||{};c.data(this,t,c.extend(d,a))}).addClass(H),e=new P(f[0],a),e.get("open")&&R(f[0])),f):f},p.position=function(b,d){function e(){Z[0].style.width=$[0].style.width=u[0].style.width=parseInt(f[0].style.width,
10)-y+"px";u[0].style.height=aa[0].style.height=ba[0].style.height=parseInt(f[0].style.height,10)-x+"px"}var g,h,l,n=0,q=0,v=f.offset();if(z.unbind("resize."+m),f.css({top:-9E4,left:-9E4}),h=z.scrollTop(),l=z.scrollLeft(),a.get("fixed")?(v.top-=h,v.left-=l,f.css({position:"fixed"})):(n=h,q=l,f.css({position:"absolute"})),q+=!1!==a.get("right")?Math.max(z.width()-a.w-D-y-k(a.get("right"),"x"),0):!1!==a.get("left")?k(a.get("left"),"x"):Math.round(Math.max(z.width()-a.w-D-y,0)/2),n+=!1!==a.get("bottom")?
Math.max(X()-a.h-C-x-k(a.get("bottom"),"y"),0):!1!==a.get("top")?k(a.get("top"),"y"):Math.round(Math.max(X()-a.h-C-x,0)/2),f.css({top:v.top,left:v.left,visibility:"visible"}),G[0].style.width=G[0].style.height="9999px",g={width:a.w+D+y,height:a.h+C+x,top:n,left:q},b){var r=0;c.each(g,function(a){return g[a]!==pa[a]?(r=b,void 0):void 0});b=r}pa=g;b||f.css(g);f.dequeue().animate(g,{duration:b||0,complete:function(){e();L=!1;G[0].style.width=a.w+D+y+"px";G[0].style.height=a.h+C+x+"px";a.get("reposition")&&
setTimeout(function(){z.bind("resize."+m,p.position)},1);c.isFunction(d)&&d()},step:e})},p.resize=function(b){var c;B&&(b=b||{},b.width&&(a.w=k(b.width,"x")-D-y),b.innerWidth&&(a.w=k(b.innerWidth,"x")),l.css({width:a.w}),b.height&&(a.h=k(b.height,"y")-C-x),b.innerHeight&&(a.h=k(b.innerHeight,"y")),b.innerHeight||b.height||(c=l.scrollTop(),l.css({height:"auto"}),a.h=l.height()),l.css({height:a.h}),c&&l.scrollTop(c),p.position("none"===a.get("transition")?0:a.get("speed")))},p.prep=function(b){if(B){var d,
k="none"===a.get("transition")?0:a.get("speed");l.remove();l=g(h,"LoadedContent").append(b);l.hide().appendTo(O.show()).css({width:(a.w=a.w||l.width(),a.w=a.mw&&a.mw<a.w?a.mw:a.w,a.w),overflow:a.get("scrolling")?"auto":"hidden"}).css({height:(a.h=a.h||l.height(),a.h=a.mh&&a.mh<a.h?a.mh:a.h,a.h)}).prependTo(u);O.hide();c(e).css({"float":"none"});J(a.get("className"));d=function(){function b(){!1===c.support.opacity&&f[0].style.removeAttribute("filter")}var d,e,g=n.length;B&&(e=function(){clearTimeout(oa);
T.hide();F(W);a.get("onComplete")},da.html(a.get("title")).show(),l.show(),1<g?("string"==typeof a.get("current")&&ga.html(a.get("current").replace("{current}",q+1).replace("{total}",g)).show(),N[a.get("loop")||g-1>q?"show":"hide"]().html(a.get("next")),M[a.get("loop")||q?"show":"hide"]().html(a.get("previous")),ua(),a.get("preloading")&&c.each([Q(-1),Q(1)],function(){var a,b=n[this],b=new P(b,c.data(b,t)),d=b.get("href");d&&(b.get("photo")||b.get("photoRegex").test(d))&&(d=la(b,d),a=r.createElement("img"),
a.src=d)})):ca.hide(),a.get("iframe")?(d=a.get("createIframe"),a.get("scrolling")||(d.scrolling="no"),c(d).attr({src:a.get("href"),"class":m+"Iframe"}).one("load",e).appendTo(l),w.one(U,function(){d.src="//about:blank"}),a.get("fastIframe")&&c(d).trigger("load")):e(),"fade"===a.get("transition")?f.fadeTo(k,1,b):b())};"fade"===a.get("transition")?f.fadeTo(k,0,function(){p.position(0,d)}):p.position(k,d)}},p.next=function(){!L&&n[1]&&(a.get("loop")||n[q+1])&&(q=Q(1),R(n[q]))},p.prev=function(){!L&&
n[1]&&(a.get("loop")||q)&&(q=Q(-1),R(n[q]))},p.close=function(){B&&!K&&(K=!0,B=!1,F(ja),a.get("onCleanup"),z.unbind("."+m),A.fadeTo(a.get("fadeOut")||0,0),f.stop().fadeTo(a.get("fadeOut")||0,0,function(){f.hide();A.hide();F(U);l.remove();setTimeout(function(){K=!1;F(ea);a.get("onClosed")},1)}))},p.remove=function(){f&&(f.stop(),c[t].close(),f.stop(!1,!0).remove(),A.remove(),K=!1,f=null,c("."+H).removeData(t).removeClass(H),c(r).unbind("click."+m).unbind("keydown."+m))},p.element=function(){return c(a.el)},
p.settings=Y)})(jQuery,document,window);