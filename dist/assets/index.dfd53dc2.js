import{_ as P,G as y,a as se,w as Ee,v as M,N as we,al as te,a7 as K,b_ as ge,f as Y,b$ as De,R as ce,S as A,n as C,T as z,c0 as Ce,c1 as Me,c2 as je,ar as ke,c3 as _e,U as Le,ak as Se,K as Ve,J as Be,c4 as le,a4 as Ae,c5 as re,c6 as Ie}from"./index.d00d010f.js";var pe=function(){return{prefixCls:String,width:y.oneOfType([y.string,y.number]),height:y.oneOfType([y.string,y.number]),style:{type:Object,default:void 0},class:String,placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:{type:Object,default:void 0},autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0}}},Fe=function(){return P(P({},pe()),{forceRender:{type:Boolean,default:void 0},getContainer:y.oneOfType([y.string,y.func,y.object,y.looseBool])})},He=function(){return P(P({},pe()),{getContainer:Function,getOpenCount:Function,scrollLocker:y.any,switchScrollingEffect:Function})};function ze(n){return Array.isArray(n)?n:[n]}var Oe={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},We=Object.keys(Oe).filter(function(n){if(typeof document=="undefined")return!1;var e=document.getElementsByTagName("html")[0];return n in(e?e.style:{})})[0],de=Oe[We];function fe(n,e,r,a){n.addEventListener?n.addEventListener(e,r,a):n.attachEvent&&n.attachEvent("on".concat(e),r)}function ve(n,e,r,a){n.removeEventListener?n.removeEventListener(e,r,a):n.attachEvent&&n.detachEvent("on".concat(e),r)}function Re(n,e){var r=typeof n=="function"?n(e):n;return Array.isArray(r)?r.length===2?r:[r[0],r[1]]:[r]}var he=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ie=!(typeof window!="undefined"&&window.document&&window.document.createElement),$e=function n(e,r,a,i){if(!r||r===document||r instanceof Document)return!1;if(r===e.parentNode)return!0;var T=Math.max(Math.abs(a),Math.abs(i))===Math.abs(i),N=Math.max(Math.abs(a),Math.abs(i))===Math.abs(a),x=r.scrollHeight-r.clientHeight,u=r.scrollWidth-r.clientWidth,v=document.defaultView.getComputedStyle(r),j=v.overflowY==="auto"||v.overflowY==="scroll",p=v.overflowX==="auto"||v.overflowX==="scroll",E=x&&j,D=u&&p;return T&&(!E||E&&(r.scrollTop>=x&&i<0||r.scrollTop<=0&&i>0))||N&&(!D||D&&(r.scrollLeft>=u&&a<0||r.scrollLeft<=0&&a>0))?n(e,r.parentNode,a,i):!1},Xe=globalThis&&globalThis.__rest||function(n,e){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(r[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(r[a[i]]=n[a[i]]);return r},X={},Ke=se({inheritAttrs:!1,props:He(),emits:["close","handleClick","change"],setup:function(e,r){var a=r.emit,i=r.slots,T=Ee({startPos:{x:null,y:null}}),N,x=M(),u=M(),v=M(),j=M(),p=M(),E=[],D="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),W=!ie&&je?{passive:!1}:!1;we(function(){te(function(){var o,t=e.open,l=e.getContainer,d=e.showMask,f=e.autofocus,m=l==null?void 0:l();k(e),t&&(m&&m.parentNode===document.body&&(X[D]=t),G(),te(function(){f&&_()}),d&&((o=e.scrollLocker)===null||o===void 0||o.lock()))})}),K(function(){return e.level},function(){k(e)},{flush:"post"}),K(function(){return e.open},function(){var o=e.open,t=e.getContainer,l=e.scrollLocker,d=e.showMask,f=e.autofocus,m=t==null?void 0:t();m&&m.parentNode===document.body&&(X[D]=!!o),G(),o?(f&&_(),d&&(l==null||l.lock())):l==null||l.unLock()},{flush:"post"}),ge(function(){var o,t=e.open;delete X[D],t&&(J(!1),document.body.style.touchAction=""),(o=e.scrollLocker)===null||o===void 0||o.unLock()}),K(function(){return e.placement},function(o){o&&(p.value=null)});var _=function(){var t,l;(l=(t=u.value)===null||t===void 0?void 0:t.focus)===null||l===void 0||l.call(t)},I=function(t){t.touches.length>1||(T.startPos={x:t.touches[0].clientX,y:t.touches[0].clientY})},B=function(t){if(!(t.changedTouches.length>1)){var l=t.currentTarget,d=t.changedTouches[0].clientX-T.startPos.x,f=t.changedTouches[0].clientY-T.startPos.y;(l===v.value||l===j.value||l===p.value&&$e(l,t.target,d,f))&&t.cancelable&&t.preventDefault()}},$=function o(t){var l=t.target;ve(l,de,o),l.style.transition=""},U=function(t){a("close",t)},Z=function(t){t.keyCode===Me.ESC&&(t.stopPropagation(),U(t))},ne=function(t){var l=e.open,d=e.afterVisibleChange;t.target===x.value&&t.propertyName.match(/transform$/)&&(u.value.style.transition="",!l&&g()&&(document.body.style.overflowX="",v.value&&(v.value.style.left="",v.value.style.width="")),d&&d(!!l))},q=Y(function(){var o=e.placement,t=o==="left"||o==="right",l="translate".concat(t?"X":"Y");return{isHorizontal:t,placementName:l}}),G=function(){var t=e.open,l=e.width,d=e.height,f=q.value,m=f.isHorizontal,b=f.placementName,w=p.value?p.value.getBoundingClientRect()[m?"width":"height"]:0,O=(m?l:d)||w;ae(t,b,O)},J=function(t,l,d,f){var m=e.placement,b=e.levelMove,w=e.duration,O=e.ease,V=e.showMask;E.forEach(function(R){R.style.transition="transform ".concat(w," ").concat(O),fe(R,de,$);var F=t?d:0;if(b){var Q=Re(b,{target:R,open:t});F=t?Q[0]:Q[1]||0}var ee=typeof F=="number"?"".concat(F,"px"):F,H=m==="left"||m==="top"?ee:"-".concat(ee);H=V&&m==="right"&&f?"calc(".concat(H," + ").concat(f,"px)"):H,R.style.transform=F?"".concat(l,"(").concat(H,")"):""})},ae=function(t,l,d){if(!ie){var f=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?De(!0):0;J(t,l,d,f),h(f)}a("change",t)},h=function(t){var l=e.getContainer,d=e.showMask,f=e.open,m=l==null?void 0:l();if(m&&m.parentNode===document.body&&d){var b=["touchstart"],w=[document.body,v.value,j.value,p.value];f&&document.body.style.overflow!=="hidden"?(t&&c(t),document.body.style.touchAction="none",w.forEach(function(O,V){!O||fe(O,b[V]||"touchmove",V?B:I,W)})):g()&&(document.body.style.touchAction="",t&&s(t),w.forEach(function(O,V){!O||ve(O,b[V]||"touchmove",V?B:I,W)}))}},c=function(t){var l=e.placement,d=e.duration,f=e.ease,m="width ".concat(d," ").concat(f),b="transform ".concat(d," ").concat(f);switch(u.value.style.transition="none",l){case"right":u.value.style.transform="translateX(-".concat(t,"px)");break;case"top":case"bottom":u.value.style.width="calc(100% - ".concat(t,"px)"),u.value.style.transform="translateZ(0)";break}clearTimeout(N),N=setTimeout(function(){u.value&&(u.value.style.transition="".concat(b,",").concat(m),u.value.style.width="",u.value.style.transform="")})},s=function(t){var l=e.placement,d=e.duration,f=e.ease;u.value.style.transition="none";var m,b="width ".concat(d," ").concat(f),w="transform ".concat(d," ").concat(f);switch(l){case"left":{u.value.style.width="100%",b="width 0s ".concat(f," ").concat(d);break}case"right":{u.value.style.transform="translateX(".concat(t,"px)"),u.value.style.width="100%",b="width 0s ".concat(f," ").concat(d),v.value&&(v.value.style.left="-".concat(t,"px"),v.value.style.width="calc(100% + ".concat(t,"px)"));break}case"top":case"bottom":{u.value.style.width="calc(100% + ".concat(t,"px)"),u.value.style.height="100%",u.value.style.transform="translateZ(0)",m="height 0s ".concat(f," ").concat(d);break}}clearTimeout(N),N=setTimeout(function(){u.value&&(u.value.style.transition="".concat(w,",").concat(m?"".concat(m,","):"").concat(b),u.value.style.transform="",u.value.style.width="",u.value.style.height="")})},g=function(){return!Object.keys(X).some(function(t){return X[t]})},k=function(t){var l=t.level,d=t.getContainer;if(!ie){var f=d==null?void 0:d(),m=f?f.parentNode:null;if(E=[],l==="all"){var b=m?Array.prototype.slice.call(m.children):[];b.forEach(function(w){w.nodeName!=="SCRIPT"&&w.nodeName!=="STYLE"&&w.nodeName!=="LINK"&&w!==f&&E.push(w)})}else l&&ze(l).forEach(function(w){document.querySelectorAll(w).forEach(function(O){E.push(O)})})}},S=function(t){a("handleClick",t)},L=M(!1);return K(u,function(){te(function(){L.value=!0})}),function(){var o,t,l,d=e.width,f=e.height,m=e.open,b=e.prefixCls,w=e.placement;e.level,e.levelMove,e.ease,e.duration,e.getContainer,e.onChange,e.afterVisibleChange;var O=e.showMask,V=e.maskClosable,R=e.maskStyle,F=e.keyboard;e.getOpenCount,e.scrollLocker;var Q=e.contentWrapperStyle,ee=e.style,H=e.class,Pe=Xe(e,["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class"]),oe=m&&L.value,Ne=ce(b,(o={},A(o,"".concat(b,"-").concat(w),!0),A(o,"".concat(b,"-open"),oe),A(o,H,!!H),A(o,"no-mask",!O),o)),Te=q.value.placementName,xe=w==="left"||w==="top"?"-100%":"100%",ue=oe?"":"".concat(Te,"(").concat(xe,")");return C("div",z(z({},Ce(Pe,["switchScrollingEffect","autofocus"])),{},{tabindex:-1,class:Ne,style:ee,ref:u,onKeydown:oe&&F?Z:void 0,onTransitionend:ne}),[O&&C("div",{class:"".concat(b,"-mask"),onClick:V?U:void 0,style:R,ref:v},null),C("div",{class:"".concat(b,"-content-wrapper"),style:P({transform:ue,msTransform:ue,width:he(d)?"".concat(d,"px"):d,height:he(f)?"".concat(f,"px"):f},Q),ref:x},[C("div",{class:"".concat(b,"-content"),ref:p},[(t=i.default)===null||t===void 0?void 0:t.call(i)]),i.handler?C("div",{onClick:S,ref:j},[(l=i.handler)===null||l===void 0?void 0:l.call(i)]):null])])}}}),ye=Ke,me=globalThis&&globalThis.__rest||function(n,e){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(r[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(r[a[i]]=n[a[i]]);return r},Ye=se({inheritAttrs:!1,props:ke(Fe(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:function(){},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],slots:["handler"],setup:function(e,r){var a=r.emit,i=r.slots,T=M(null),N=function(v){a("handleClick",v)},x=function(v){a("close",v)};return function(){e.afterVisibleChange;var u=e.getContainer,v=e.wrapperClassName,j=e.forceRender,p=me(e,["afterVisibleChange","getContainer","wrapperClassName","forceRender"]),E=null;if(!u)return C("div",{class:v,ref:T},[C(ye,z(z({},p),{},{open:e.open,getContainer:function(){return T.value},onClose:x,onHandleClick:N}),i)]);var D=!!i.handler||j;return(D||e.open||T.value)&&(E=C(_e,{visible:e.open,forceRender:D,getContainer:u,wrapperClassName:v},{default:function(_){var I=_.visible,B=_.afterClose,$=me(_,["visible","afterClose"]);return C(ye,z(z(z({ref:T},p),$),{},{open:I!==void 0?I:e.open,afterVisibleChange:B!==void 0?B:e.afterVisibleChange,onClose:x,onHandleClick:N}),i)}})),E}}}),Ue=Ye,Ze=globalThis&&globalThis.__rest||function(n,e){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(r[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)e.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(r[a[i]]=n[a[i]]);return r},qe=Se("top","right","bottom","left");Se("default","large");var be={distance:180},Ge=function(){return{autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:y.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:y.any,maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},wrapStyle:{type:Object,default:void 0},style:{type:Object,default:void 0},class:y.any,wrapClassName:String,size:{type:String},drawerStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},contentWrapperStyle:{type:Object,default:void 0},title:y.any,visible:{type:Boolean,default:void 0},width:y.oneOfType([y.string,y.number]),height:y.oneOfType([y.string,y.number]),zIndex:Number,prefixCls:String,push:y.oneOfType([y.looseBool,{type:Object}]),placement:y.oneOf(qe),keyboard:{type:Boolean,default:void 0},extra:y.any,footer:y.any,footerStyle:{type:Object,default:void 0},level:y.any,levelMove:{type:[Number,Array,Function]},handle:y.any,afterVisibleChange:Function,onAfterVisibleChange:Function,"onUpdate:visible":Function,onClose:Function}},Je=se({name:"ADrawer",inheritAttrs:!1,props:ke(Ge(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:be}),slots:["closeIcon","title","extra","footer","handle"],setup:function(e,r){var a=r.emit,i=r.slots,T=r.attrs,N=M(!1),x=M(!1),u=M(null),v=Ve("parentDrawerOpts",null),j=Be("drawer",e),p=j.prefixCls;le(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),le(e.wrapStyle===void 0,"Drawer","`wrapStyle` prop is deprecated, please use `style` instead"),le(e.wrapClassName===void 0,"Drawer","`wrapClassName` prop is deprecated, please use `class` instead");var E=function(){N.value=!0},D=function(){N.value=!1,te(function(){W()})};Ae("parentDrawerOpts",{setPush:E,setPull:D}),we(function(){var h=e.visible;h&&v&&v.setPush()}),ge(function(){v&&v.setPull()}),K(function(){return e.visible},function(h){v&&(h?v.setPush():v.setPull())},{flush:"post"});var W=function(){var c,s;(s=(c=u.value)===null||c===void 0?void 0:c.domFocus)===null||s===void 0||s.call(c)},_=function(c){a("update:visible",!1),a("close",c)},I=function(c){var s;(s=e.afterVisibleChange)===null||s===void 0||s.call(e,c),a("afterVisibleChange",c)},B=Y(function(){return e.destroyOnClose&&!e.visible}),$=function(){var c=B.value;!c||e.visible||(x.value=!0)},U=Y(function(){var h=e.push,c=e.placement,s;return typeof h=="boolean"?s=h?be.distance:0:s=h.distance,s=parseFloat(String(s||0)),c==="left"||c==="right"?"translateX(".concat(c==="left"?s:-s,"px)"):c==="top"||c==="bottom"?"translateY(".concat(c==="top"?s:-s,"px)"):null}),Z=Y(function(){var h=e.visible,c=e.mask,s=e.placement,g=e.size,k=g===void 0?"default":g,S=e.width,L=e.height;if(!h&&!c)return{};var o={};if(s==="left"||s==="right"){var t=k==="large"?736:378;o.width=typeof S=="undefined"?t:S,o.width=typeof o.width=="string"?o.width:"".concat(o.width,"px")}else{var l=k==="large"?736:378;o.height=typeof L=="undefined"?l:L,o.height=typeof o.height=="string"?o.height:"".concat(o.height,"px")}return o}),ne=Y(function(){var h=e.zIndex,c=e.wrapStyle,s=e.mask,g=e.style,k=s?{}:Z.value;return P(P(P({zIndex:h,transform:N.value?U.value:void 0},k),c),g)}),q=function(c){var s=e.closable,g=e.headerStyle,k=re(i,e,"extra"),S=re(i,e,"title");return!S&&!s?null:C("div",{class:ce("".concat(c,"-header"),A({},"".concat(c,"-header-close-only"),s&&!S&&!k)),style:g},[C("div",{class:"".concat(c,"-header-title")},[G(c),S&&C("div",{class:"".concat(c,"-title")},[S])]),k&&C("div",{class:"".concat(c,"-extra")},[k])])},G=function(c){var s,g=e.closable,k=i.closeIcon?(s=i.closeIcon)===null||s===void 0?void 0:s.call(i):e.closeIcon;return g&&C("button",{key:"closer",onClick:_,"aria-label":"Close",class:"".concat(c,"-close")},[k===void 0?C(Ie,null,null):null])},J=function(c){var s;if(x.value&&!e.visible)return null;x.value=!1;var g=e.bodyStyle,k=e.drawerStyle,S={},L=B.value;return L&&(S.opacity=0,S.transition="opacity .3s"),C("div",{class:"".concat(c,"-wrapper-body"),style:P(P({},S),k),onTransitionend:$},[q(c),C("div",{key:"body",class:"".concat(c,"-body"),style:g},[(s=i.default)===null||s===void 0?void 0:s.call(i)]),ae(c)])},ae=function(c){var s=re(i,e,"footer");if(!s)return null;var g="".concat(c,"-footer");return C("div",{class:g,style:e.footerStyle},[s])};return function(){var h;e.width,e.height;var c=e.visible,s=e.placement,g=e.mask,k=e.wrapClassName,S=e.class,L=Ze(e,["width","height","visible","placement","mask","wrapClassName","class"]),o=g?Z.value:{},t=g?"":"no-mask",l=P(P(P(P({},T),Ce(L,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","wrapStyle","onAfterVisibleChange","onClose","onUpdate:visible"])),o),{onClose:_,afterVisibleChange:I,handler:!1,prefixCls:p.value,open:c,showMask:g,placement:s,class:ce((h={},A(h,S,S),A(h,k,!!k),A(h,t,!!t),h)),style:ne.value,ref:u});return C(Ue,l,{handler:e.handle?function(){return e.handle}:i.handle,default:function(){return J(p.value)}})}}}),et=Le(Je);export{et as D};
