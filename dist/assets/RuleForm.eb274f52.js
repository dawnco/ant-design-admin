var f=(e,u,t)=>new Promise((m,i)=>{var d=o=>{try{s(t.next(o))}catch(l){i(l)}},r=o=>{try{s(t.throw(o))}catch(l){i(l)}},s=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,r);s((t=t.apply(e,u)).next())});import{B as _}from"./BasicForm.4092a552.js";import{u as b}from"./useForm.932b00c0.js";import{av as g,a as A,cC as P,ax as B,o as E,j as h,z as n,i as v,n as p,E as k,B as c}from"./index.d00d010f.js";import{P as D}from"./index.62b0c78d.js";import{i as V}from"./system.ef4b0265.js";/* empty css              *//* empty css               */import"./index.420ad400.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.26802964.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.1198cc7b.js";import"./get.b6ec3b5b.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./_baseIteratee.36b75faf.js";import"./useSize.fb85ad3c.js";import"./DeleteOutlined.3d6f436d.js";import"./transButton.432695aa.js";import"./index.b66f5d3c.js";import"./index.99c0f294.js";import"./useWindowSizeFn.c6dbabe3.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.0499bc42.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.58b6f38e.js";import"./index.417b4824.js";import"./uuid.2b29000c.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,u)=>f(void 0,null,function*(){return u?u==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,u){return new Promise((t,m)=>{V(u).then(()=>t()).catch(i=>{m(i.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],q=A({components:{BasicForm:_,CollapseContainer:P,PageWrapper:D},setup(){const{createMessage:e}=k(),[u,{validateFields:t,clearValidate:m,getFieldsValue:i,resetFields:d,setFieldsValue:r}]=b({labelWidth:120,schemas:C,actionColOptions:{span:24}});function s(){return f(this,null,function*(){try{const a=yield t()}catch(a){}})}function o(){return f(this,null,function*(){m()})}function l(){const a=i();e.success("values:"+JSON.stringify(a))}function F(){r({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:u,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:l,setFormValues:F,validateForm:s,resetValidate:o,resetFields:d}}}),y={class:"mb-4"},S=c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 "),I=c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F "),N=c(" \u83B7\u53D6\u8868\u5355\u503C "),w=c(" \u8BBE\u7F6E\u8868\u5355\u503C "),M=c(" \u91CD\u7F6E ");function R(e,u,t,m,i,d){const r=B("a-button"),s=B("BasicForm"),o=B("CollapseContainer"),l=B("PageWrapper");return E(),h(l,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[v("div",y,[p(r,{onClick:e.validateForm,class:"mr-2"},{default:n(()=>[S]),_:1},8,["onClick"]),p(r,{onClick:e.resetValidate,class:"mr-2"},{default:n(()=>[I]),_:1},8,["onClick"]),p(r,{onClick:e.getFormValues,class:"mr-2"},{default:n(()=>[N]),_:1},8,["onClick"]),p(r,{onClick:e.setFormValues,class:"mr-2"},{default:n(()=>[w]),_:1},8,["onClick"]),p(r,{onClick:e.resetFields,class:"mr-2"},{default:n(()=>[M]),_:1},8,["onClick"])]),p(o,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[p(s,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ye=g(q,[["render",R]]);export{ye as default};
