(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+pmV":function(e,t,a){e.exports={post:"post-module--post--28Mq2",title:"post-module--title--3XBo2",coverImage:"post-module--coverImage--1GM7V",meta:"post-module--meta--3YtjE",tags:"post-module--tags--3RbqF",tag:"post-module--tag--16U9p",readMore:"post-module--readMore--3zWML",postContent:"post-module--postContent--1bfnt"}},"6cYQ":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("17x9"),s=a.n(n),o=a("Wbzz"),l=a("zHTP"),d=a.n(l),c=function(e){var t=e.nextPath,a=e.previousPath,r=e.nextLabel,n=e.previousLabel;return a||t?i.a.createElement("div",{className:d.a.navigation},a&&i.a.createElement("span",{className:d.a.button},i.a.createElement(o.Link,{to:a},i.a.createElement("span",{className:d.a.iconPrev},"←"),i.a.createElement("span",{className:d.a.buttonText},n))),t&&i.a.createElement("span",{className:d.a.button},i.a.createElement(o.Link,{to:t},i.a.createElement("span",{className:d.a.buttonText},r),i.a.createElement("span",{className:d.a.iconNext},"→")))):null};c.propTypes={nextPath:s.a.string,previousPath:s.a.string,nextLabel:s.a.string,previousLabel:s.a.string},t.a=c},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(O,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,x=e.loading,R=e.draggable,I=m||h;if(!I)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:T?1:0,transition:z?"opacity "+b+"ms":"none"},o),C="boolean"==typeof v?"lightgray":v,V={transitionDelay:b+"ms"},H=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&V,o,f),M={title:t,alt:this.state.isVisible?"":a,style:H,className:g,itemProp:E},W=this.state.isHydrated?p(I):I[0];if(m)return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),W.base64&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:M,imageVariants:I,generateSources:w}),W.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:M,imageVariants:I,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(O,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:x},W,{imageVariants:I}))}}));if(h){var j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},z&&V)}),W.base64&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:M,imageVariants:I,generateSources:w}),W.tracedSVG&&d.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:M,imageVariants:I,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(I),d.default.createElement(O,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:x},W,{imageVariants:I}))}}))}return null},t}(d.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}T.propTypes={resolutions:z,sizes:k,fixed:C(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:C(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=T;t.default=V},TWNs:function(e,t,a){var r=a("g6v/"),i=a("2oRo"),n=a("lMq5"),s=a("cVYH"),o=a("m/L8").f,l=a("JBy8").f,d=a("ROdP"),c=a("rW0t"),u=a("n3/R"),f=a("busE"),g=a("0Dky"),p=a("afO8").set,m=a("JiZb"),h=a("tiKp")("match"),v=i.RegExp,b=v.prototype,y=/a/g,E=/a/g,S=new v(y)!==y,x=u.UNSUPPORTED_Y;if(r&&n("RegExp",!S||x||g((function(){return E[h]=!1,v(y)!=y||v(E)==E||"/a/i"!=v(y,"i")})))){for(var L=function(e,t){var a,r=this instanceof L,i=d(e),n=void 0===t;if(!r&&i&&e.constructor===L&&n)return e;S?i&&!n&&(e=e.source):e instanceof L&&(n&&(t=c.call(e)),e=e.source),x&&(a=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=s(S?new v(e,t):v(e,t),r?this:b,L);return x&&a&&p(o,{sticky:a}),o},w=function(e){e in L||o(L,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},R=l(v),I=0;R.length>I;)w(R[I++]);b.constructor=L,L.prototype=b,f(i,"RegExp",L)}m("RegExp")},UxlC:function(e,t,a){"use strict";var r=a("14Sl"),i=a("glrk"),n=a("ewvW"),s=a("UMSQ"),o=a("ppGB"),l=a("HYAF"),d=a("iqWW"),c=a("FMNM"),u=Math.max,f=Math.min,g=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,a,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,b=h?"$":"$0";return[function(a,r){var i=l(this),n=null==a?void 0:a[e];return void 0!==n?n.call(a,i,r):t.call(String(i),a,r)},function(e,r){if(!h&&v||"string"==typeof r&&-1===r.indexOf(b)){var n=a(t,e,this,r);if(n.done)return n.value}var l=i(e),g=String(this),p="function"==typeof r;p||(r=String(r));var m=l.global;if(m){var E=l.unicode;l.lastIndex=0}for(var S=[];;){var x=c(l,g);if(null===x)break;if(S.push(x),!m)break;""===String(x[0])&&(l.lastIndex=d(g,s(l.lastIndex),E))}for(var L,w="",R=0,I=0;I<S.length;I++){x=S[I];for(var N=String(x[0]),P=u(f(o(x.index),g.length),0),O=[],T=1;T<x.length;T++)O.push(void 0===(L=x[T])?L:String(L));var z=x.groups;if(p){var k=[N].concat(O,P,g);void 0!==z&&k.push(z);var C=String(r.apply(void 0,k))}else C=y(N,g,P,O,z,r);P>=R&&(w+=g.slice(R,P)+C,R=P+N.length)}return w+g.slice(R)}];function y(e,a,r,i,s,o){var l=r+e.length,d=i.length,c=m;return void 0!==s&&(s=n(s),c=p),t.call(o,c,(function(t,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,r);case"'":return a.slice(l);case"<":o=s[n.slice(1,-1)];break;default:var c=+n;if(0===c)return t;if(c>d){var u=g(c/10);return 0===u?t:u<=d?void 0===i[u-1]?n.charAt(1):i[u-1]+n.charAt(1):t}o=i[c-1]}return void 0===o?"":o}))}}))},rgsX:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("17x9"),s=a.n(n),o=a("Wbzz"),l=a("9eSz"),d=a.n(l),c=a("6cYQ"),u=a("zpb6"),f=a("+pmV"),g=a.n(f),p=function(e){var t=e.title,a=e.date,r=e.path,n=e.coverImage,s=e.featureImageSrc,l=e.author,f=e.excerpt,p=e.tags,m=e.html,h=e.previousPost,v=e.nextPost,b=h&&h.fields.slug,y=h&&h.frontmatter.title,E=v&&v.fields.slug,S=v&&v.frontmatter.title;return i.a.createElement("div",{className:g.a.post+" post"},i.a.createElement("div",{className:g.a.postContent},i.a.createElement("h1",{className:g.a.title},f?i.a.createElement(o.Link,{to:r,className:"post__title"},t):t),i.a.createElement("div",{className:g.a.meta},a," ",l&&i.a.createElement(i.a.Fragment,null,"— Written by ",l),p?i.a.createElement("div",{className:g.a.tags},p.map((function(e){return i.a.createElement(o.Link,{to:"/tag/"+Object(u.toKebabCase)(e)+"/",key:Object(u.toKebabCase)(e)},i.a.createElement("span",{className:g.a.tag},"#",e))}))):null),n&&i.a.createElement(d.a,{fluid:n.childImageSharp.fluid,className:g.a.coverImage}),s&&i.a.createElement("img",{src:s,className:g.a.coverImage}),f?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,f),i.a.createElement(o.Link,{to:r,className:g.a.readMore},"Read more →")):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}),i.a.createElement(c.a,{previousPath:b,previousLabel:y,nextPath:E,nextLabel:S}))))};p.propTypes={title:s.a.string,date:s.a.string,path:s.a.string,coverImage:s.a.object,featureImageSrc:s.a.string,author:s.a.string,excerpt:s.a.string,html:s.a.string,tags:s.a.arrayOf(s.a.string),previousPost:s.a.object,nextPost:s.a.object},t.a=p},zHTP:function(e,t,a){e.exports={navigation:"navigation-module--navigation--3Zfju",button:"navigation-module--button--28kp3",buttonText:"navigation-module--buttonText--1Xod2",iconNext:"navigation-module--iconNext--3xyJ-",iconPrev:"navigation-module--iconPrev--23mg1"}},zpb6:function(e,t,a){a("TWNs"),a("UxlC"),e.exports.toKebabCase=function(e){return e.replace(new RegExp("(\\s|_|-)+","gmi"),"-")}}}]);
//# sourceMappingURL=23c3d3a3a2879427593569aafa02d04d4d5b9e2a-dcd5761da3e45fbc9bc8.js.map