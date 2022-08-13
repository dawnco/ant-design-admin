var pe=Object.defineProperty,be=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var te=(e,t,r)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&te(e,r,t[r]);if(ee)for(var r of ee(t))ye.call(t,r)&&te(e,r,t[r]);return e},ae=(e,t)=>be(e,He(t));var ne=(e,t,r)=>new Promise((m,n)=>{var H=v=>{try{g(r.next(v))}catch(_){n(_)}},d=v=>{try{g(r.throw(v))}catch(_){n(_)}},g=v=>v.done?m(v.value):Promise.resolve(v.value).then(H,d);g((r=r.apply(e,t)).next())});import{n as h,r as Ce,U as Pe,a as X,G as S,J as Fe,v as A,cs as $e,f as F,Q as ke,R as we,S as q,ct as Be,cg as Re,aj as Se,cu as Te,b as ce,b7 as Ae,av as ue,o as N,h as J,i as Q,aB as T,q as z,bl as de,N as Oe,al as L,cv as Ie,k as w,cw as je,cx as Ee,a7 as fe,aG as xe,cy as Ne,aF as C,a4 as ze,ao as re,ax as oe,j as ie,az as We,aA as De,z as D,F as Le,B as Me,t as Ve,ay as Ge,l as le,aC as Ue,aD as qe,aE as ge}from"./index.d00d010f.js";import{B as Je}from"./index.460c90ef.js";import{A as Qe}from"./index.9091d57e.js";import{u as Xe}from"./useWindowSizeFn.c6dbabe3.js";import{a as Ze}from"./useContentViewHeight.d6e860c4.js";import{A as Ye}from"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import{T as Ke}from"./transButton.432695aa.js";var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},tt=et;function se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},m=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(m=m.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),m.forEach(function(n){at(e,n,r[n])})}return e}function at(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z=function(t,r){var m=se({},t,r.attrs);return h(Ce,se({},m,{icon:tt}),null)};Z.displayName="ArrowRightOutlined";Z.inheritAttrs=!1;var nt=Z,rt=function(){return{backIcon:S.any,prefixCls:String,title:S.any,subTitle:S.any,breadcrumb:S.object,tags:S.any,footer:S.any,extra:S.any,avatar:S.object,ghost:{type:Boolean,default:void 0},onBack:Function}},ot=X({name:"APageHeader",props:rt(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(t,r){var m=r.emit,n=r.slots,H=Fe("page-header",t),d=H.prefixCls,g=H.direction,v=H.pageHeader,_=A(!1),j=$e(),$=function(a){var l=a.width;j.value||(_.value=l<768)},B=F(function(){var i,a,l;return(l=(i=t.ghost)!==null&&i!==void 0?i:(a=v.value)===null||a===void 0?void 0:a.ghost)!==null&&l!==void 0?l:!0}),R=function(){var a,l,u;return(u=(a=t.backIcon)!==null&&a!==void 0?a:(l=n.backIcon)===null||l===void 0?void 0:l.call(n))!==null&&u!==void 0?u:g.value==="rtl"?h(nt,null,null):h(Ye,null,null)},f=function(a){return!a||!t.onBack?null:h(Te,{componentName:"PageHeader",children:function(u){var o=u.back;return h("div",{class:"".concat(d.value,"-back")},[h(Ke,{onClick:function(c){m("back",c)},class:"".concat(d.value,"-back-button"),"aria-label":o},{default:function(){return[a]}})])}},null)},k=function(){var a;return t.breadcrumb?h(Je,t.breadcrumb,null):(a=n.breadcrumb)===null||a===void 0?void 0:a.call(n)},y=function(){var a,l,u,o,s,c,P,O,M,V=t.avatar,E=(a=t.title)!==null&&a!==void 0?a:(l=n.title)===null||l===void 0?void 0:l.call(n),x=(u=t.subTitle)!==null&&u!==void 0?u:(o=n.subTitle)===null||o===void 0?void 0:o.call(n),G=(s=t.tags)!==null&&s!==void 0?s:(c=n.tags)===null||c===void 0?void 0:c.call(n),U=(P=t.extra)!==null&&P!==void 0?P:(O=n.extra)===null||O===void 0?void 0:O.call(n),I="".concat(d.value,"-heading"),Y=E||x||G||U;if(!Y)return null;var he=R(),K=f(he),me=K||V||Y;return h("div",{class:I},[me&&h("div",{class:"".concat(I,"-left")},[K,V?h(Qe,V,null):(M=n.avatar)===null||M===void 0?void 0:M.call(n),E&&h("span",{class:"".concat(I,"-title"),title:typeof E=="string"?E:void 0},[E]),x&&h("span",{class:"".concat(I,"-sub-title"),title:typeof x=="string"?x:void 0},[x]),G&&h("span",{class:"".concat(I,"-tags")},[G])]),U&&h("span",{class:"".concat(I,"-extra")},[U])])},p=function(){var a,l,u=(a=t.footer)!==null&&a!==void 0?a:Se((l=n.footer)===null||l===void 0?void 0:l.call(n));return Be(u)?null:h("div",{class:"".concat(d.value,"-footer")},[u])},b=function(a){return h("div",{class:"".concat(d.value,"-content")},[a])};return function(){var i,a,l,u=((a=t.breadcrumb)===null||a===void 0?void 0:a.routes)||n.breadcrumb,o=t.footer||n.footer,s=ke((l=n.default)===null||l===void 0?void 0:l.call(n)),c=we(d.value,(i={"has-breadcrumb":u,"has-footer":o},q(i,"".concat(d.value,"-ghost"),B.value),q(i,"".concat(d.value,"-rtl"),g.value==="rtl"),q(i,"".concat(d.value,"-compact"),_.value),i));return h(Re,{onResize:$},{default:function(){return[h("div",{class:c},[k(),y(),s.length?b(s):null,p()])]}})}}}),it=Pe(ot);const lt=X({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=ce("page-footer"),{getCalcContentWidth:t}=Ae();return{prefixCls:e,getCalcContentWidth:t}}});function st(e,t,r,m,n,H){return N(),J("div",{class:z(e.prefixCls),style:de({width:e.getCalcContentWidth})},[Q("div",{class:z(`${e.prefixCls}__left`)},[T(e.$slots,"left",{},void 0,!0)],2),T(e.$slots,"default",{},void 0,!0),Q("div",{class:z(`${e.prefixCls}__right`)},[T(e.$slots,"right",{},void 0,!0)],2)],6)}var ve=ue(lt,[["render",st],["__scopeId","data-v-2c113217"]]);function ct(e){let t;Oe(()=>{e(),L(()=>{t=!0})}),Ie(()=>{t&&e()})}function ut(e,t,r,m,n=0,H=A(0)){const d=A(null),{footerHeightRef:g}=Ze();let v={useLayoutFooter:!0};const _=f=>{v=f};function j(){L(()=>{R()})}function $(f,k="all"){var i,a,l,u;function y(o){return Number(o.replace(/[^\d]/g,""))}let p=0;const b="0px";if(f){const o=getComputedStyle(f),s=y((i=o==null?void 0:o.marginTop)!=null?i:b),c=y((a=o==null?void 0:o.marginBottom)!=null?a:b),P=y((l=o==null?void 0:o.paddingTop)!=null?l:b),O=y((u=o==null?void 0:o.paddingBottom)!=null?u:b);k==="all"?(p+=s,p+=c,p+=P,p+=O):k==="top"?(p+=s,p+=P):(p+=c,p+=O)}return p}function B(f){return f==null?null:f instanceof HTMLDivElement?f:f.$el}function R(){return ne(this,null,function*(){var u;if(!e.value)return;yield L();const f=B(w(t));if(!f)return;const{bottomIncludeBody:k}=je(f);let y=0;r.forEach(o=>{var s,c;y+=(c=(s=B(w(o)))==null?void 0:s.offsetHeight)!=null?c:0});let p=(u=$(f))!=null?u:0;m.forEach(o=>{p+=$(B(w(o)))});let b=0;function i(o,s){if(o&&s){const c=o.parentElement;c&&(xe(s)?c.classList.contains(s)?b+=$(c,"bottom"):(b+=$(c,"bottom"),i(c,s)):Ne(s)&&s>0&&(b+=$(c,"bottom"),i(c,--s)))}}Ee(n)?i(f,w(n)):i(f,n);let a=k-w(g)-w(H)-y-p-b;const l=()=>{var o;(o=v.elements)==null||o.forEach(s=>{var c,P;a+=(P=(c=B(w(s)))==null?void 0:c.offsetHeight)!=null?P:0})};v.useLayoutFooter&&w(g)>0,l(),d.value=a})}return ct(()=>{L(()=>{R()})}),Xe(()=>{R()},50,{immediate:!0}),fe(()=>[g.value],()=>{R()},{flush:"post",immediate:!0}),{redoHeight:j,setCompensation:_,contentHeight:d}}const dt=X({name:"PageWrapper",components:{PageFooter:ve,PageHeader:it},inheritAttrs:!1,props:{title:C.string,dense:C.bool,ghost:C.bool,content:C.string,contentStyle:{type:Object},contentBackground:C.bool,contentFullHeight:C.bool,contentClass:C.string,fixedHeight:C.bool,upwardSpace:C.oneOfType([C.number,C.string]).def(0)},setup(e,{slots:t,attrs:r}){const m=A(null),n=A(null),H=A(null),d=A(null),{prefixCls:g}=ce("page-wrapper");ze(vt,F(()=>e.fixedHeight));const v=F(()=>e.contentFullHeight),_=F(()=>e.upwardSpace),{redoHeight:j,setCompensation:$,contentHeight:B}=ut(v,m,[n,d],[H],_);$({useLayoutFooter:!0,elements:[d]});const R=F(()=>{var i;return[g,{[`${g}--dense`]:e.dense},(i=r.class)!=null?i:{}]}),f=F(()=>e.content||(t==null?void 0:t.headerContent)||e.title||y.value.length),k=F(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),y=F(()=>Object.keys(re(t,"default","leftFooter","rightFooter","headerContent"))),p=F(()=>{const{contentFullHeight:i,contentStyle:a,fixedHeight:l}=e;if(!i)return W({},a);const u=`${w(B)}px`;return W(ae(W({},a),{minHeight:u}),l?{height:u}:{})}),b=F(()=>{const{contentBackground:i,contentClass:a}=e;return[`${g}-content`,a,{[`${g}-content-bg`]:i}]});return fe(()=>[k.value],()=>{j()},{flush:"post",immediate:!0}),{getContentStyle:p,wrapperRef:m,headerRef:n,contentRef:H,footerRef:d,getClass:R,getHeaderSlots:y,prefixCls:g,getShowHeader:f,getShowFooter:k,omit:re,getContentClass:b}}});function ft(e,t,r,m,n,H){const d=oe("PageHeader"),g=oe("PageFooter");return N(),J("div",{class:z(e.getClass),ref:"wrapperRef"},[e.getShowHeader?(N(),ie(d,Ge({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),We({default:D(()=>[e.content?(N(),J(Le,{key:0},[Me(Ve(e.content),1)],64)):T(e.$slots,"headerContent",{key:1})]),_:2},[De(e.getHeaderSlots,v=>({name:v,fn:D(_=>[T(e.$slots,v,Ue(qe(_||{})))])}))]),1040,["ghost","title"])):le("",!0),Q("div",{class:z(["overflow-hidden",e.getContentClass]),style:de(e.getContentStyle),ref:"contentRef"},[T(e.$slots,"default")],6),e.getShowFooter?(N(),ie(g,{key:1,ref:"footerRef"},{left:D(()=>[T(e.$slots,"leftFooter")]),right:D(()=>[T(e.$slots,"rightFooter")]),_:3},512)):le("",!0)],2)}var gt=ue(dt,[["render",ft]]);ge(ve);const Ft=ge(gt),vt="PageWrapperFixedHeight";export{Ft as P,vt as a,ct as o};
