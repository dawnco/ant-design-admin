var C=(o,e,r)=>new Promise((m,d)=>{var c=l=>{try{a(r.next(l))}catch(p){d(p)}},t=l=>{try{a(r.throw(l))}catch(p){d(p)}},a=l=>l.done?m(l.value):Promise.resolve(l.value).then(c,t);a((r=r.apply(o,e)).next())});import{B as v}from"./BasicForm.4092a552.js";import{u as k}from"./useForm.932b00c0.js";import{dH as A,av as _,a as $,cC as D,ax as f,o as g,j as h,z as s,i as F,n as u,E as w,B as n}from"./index.d00d010f.js";import{P as y}from"./index.62b0c78d.js";/* empty css              *//* empty css               */import"./index.420ad400.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.26802964.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.1198cc7b.js";import"./get.b6ec3b5b.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./_baseIteratee.36b75faf.js";import"./useSize.fb85ad3c.js";import"./DeleteOutlined.3d6f436d.js";import"./transButton.432695aa.js";import"./index.b66f5d3c.js";import"./index.99c0f294.js";import"./useWindowSizeFn.c6dbabe3.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.0499bc42.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.58b6f38e.js";import"./index.417b4824.js";import"./uuid.2b29000c.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";const B=o=>A.post({url:"/cascader/getAreaRecord",data:o}),P=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"ApiCascader",label:"\u8054\u52A8",colProps:{span:8},componentProps:{api:B,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}},{field:"field9",component:"ApiCascader",label:"\u8054\u52A8\u56DE\u663E",colProps:{span:8},componentProps:{api:B,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}}],S=$({components:{BasicForm:v,CollapseContainer:D,PageWrapper:y},setup(){const{createMessage:o}=w(),[e,{setProps:r,setFieldsValue:m,updateSchema:d}]=k({labelWidth:120,schemas:P,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function c(){return C(this,null,function*(){const a=yield function(){return new Promise(b=>{setTimeout(()=>{b({field9:["430000","430100","430102"],province:"\u6E56\u5357\u7701",city:"\u957F\u6C99\u5E02",district:"\u5CB3\u9E93\u533A"})},1e3)})}(),{field9:l,province:p,city:i,district:E}=a;yield d({field:"field9",componentProps:{displayRenderArray:[p,i,E]}}),yield m({field9:l})})}return{register:e,schemas:P,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))},setProps:r,handleLoad:c}}}),T={class:"mb-4"},R=n(" \u66F4\u6539labelWidth "),W=n(" \u8FD8\u539FlabelWidth "),z=n(" \u66F4\u6539Size "),M=n(" \u8FD8\u539FSize "),N=n(" \u7981\u7528\u8868\u5355 "),O=n(" \u89E3\u9664\u7981\u7528 "),G=n(" \u7D27\u51D1\u8868\u5355 "),L=n(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),V=n(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),Y={class:"mb-4"},H=n(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),I=n(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),K=n(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),U=n(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),j=n(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),J=n(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),q=n(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),Q=n(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE "),X=n(" \u8054\u52A8\u56DE\u663E ");function Z(o,e,r,m,d,c){const t=f("a-button"),a=f("BasicForm"),l=f("CollapseContainer"),p=f("PageWrapper");return g(),h(p,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:s(()=>[F("div",T,[u(t,{onClick:e[0]||(e[0]=i=>o.setProps({labelWidth:150})),class:"mr-2"},{default:s(()=>[R]),_:1}),u(t,{onClick:e[1]||(e[1]=i=>o.setProps({labelWidth:120})),class:"mr-2"},{default:s(()=>[W]),_:1}),u(t,{onClick:e[2]||(e[2]=i=>o.setProps({size:"large"})),class:"mr-2"},{default:s(()=>[z]),_:1}),u(t,{onClick:e[3]||(e[3]=i=>o.setProps({size:"default"})),class:"mr-2"},{default:s(()=>[M]),_:1}),u(t,{onClick:e[4]||(e[4]=i=>o.setProps({disabled:!0})),class:"mr-2"},{default:s(()=>[N]),_:1}),u(t,{onClick:e[5]||(e[5]=i=>o.setProps({disabled:!1})),class:"mr-2"},{default:s(()=>[O]),_:1}),u(t,{onClick:e[6]||(e[6]=i=>o.setProps({compact:!0})),class:"mr-2"},{default:s(()=>[G]),_:1}),u(t,{onClick:e[7]||(e[7]=i=>o.setProps({compact:!1})),class:"mr-2"},{default:s(()=>[L]),_:1}),u(t,{onClick:e[8]||(e[8]=i=>o.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[V]),_:1})]),F("div",Y,[u(t,{onClick:e[9]||(e[9]=i=>o.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[H]),_:1}),u(t,{onClick:e[10]||(e[10]=i=>o.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[I]),_:1}),u(t,{onClick:e[11]||(e[11]=i=>o.setProps({showResetButton:!1})),class:"mr-2"},{default:s(()=>[K]),_:1}),u(t,{onClick:e[12]||(e[12]=i=>o.setProps({showResetButton:!0})),class:"mr-2"},{default:s(()=>[U]),_:1}),u(t,{onClick:e[13]||(e[13]=i=>o.setProps({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[j]),_:1}),u(t,{onClick:e[14]||(e[14]=i=>o.setProps({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[J]),_:1}),u(t,{onClick:e[15]||(e[15]=i=>o.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:s(()=>[q]),_:1}),u(t,{onClick:e[16]||(e[16]=i=>o.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[Q]),_:1}),u(t,{onClick:o.handleLoad,class:"mr-2"},{default:s(()=>[X]),_:1},8,["onClick"])]),u(l,{title:"useForm\u793A\u4F8B"},{default:s(()=>[u(a,{onRegister:o.register,onSubmit:o.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Ke=_(S,[["render",Z]]);export{Ke as default};
