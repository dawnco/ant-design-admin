var f=(t,n,e)=>new Promise((a,m)=>{var p=o=>{try{i(e.next(o))}catch(r){m(r)}},l=o=>{try{i(e.throw(o))}catch(r){m(r)}},i=o=>o.done?a(o.value):Promise.resolve(o.value).then(p,l);i((e=e.apply(t,n)).next())});import{B as C}from"./TableImg.94df718a.js";import{j as _}from"./BasicForm.4092a552.js";import{u as k}from"./useTable.8a96c0e7.js";import{g as y,j as B,k as M}from"./cms.dff13ee1.js";import{c as T}from"./Fields.664e75ae.js";import A from"./FormModal.3652555e.js";import{b as E}from"./index.99c0f294.js";import{c as b}from"./customSetting.4c03ff9f.js";import{av as R,a as v,ax as s,o as g,h as w,n as c,z as d,j as F,l as S,B as $}from"./index.d00d010f.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useForm.932b00c0.js";import"./index.62b0c78d.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.26802964.js";import"./uuid.2b29000c.js";import"./index.0499bc42.js";import"./_baseIteratee.36b75faf.js";import"./get.b6ec3b5b.js";import"./DeleteOutlined.3d6f436d.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./index.420ad400.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.133be7b5.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.417b4824.js";import"./scrollTo.0d18cb8f.js";import"./index.4c7ccf0b.js";/* empty css              *//* empty css               */import"./index.1198cc7b.js";import"./index.b66f5d3c.js";import"./index.58b6f38e.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";const j=v({title:"CmsModuleIndex",components:{BasicTable:C,TableAction:_,FormModal:A},setup(){const[t,{reload:n}]=k({title:"\u6A21\u578B",api:y,columns:T,formConfig:{labelWidth:b.table.formConfig.labelWidth},pagination:!1,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:b.table.actionColumn}),[e,{openModal:a}]=E();function m(){a(!0,{module:{},fields:[]})}function p(o){return f(this,null,function*(){let r=yield B({identity:o.identity});a(!0,r)})}function l(o){M({identity:o.identity}),n()}function i(){n()}return{registerModal:e,registerTable:t,handleCreate:m,handleEdit:p,handleDelete:l,handleSuccess:i}}}),x={class:"p-4"},N=$("\u65B0\u589E");function V(t,n,e,a,m,p){const l=s("a-button"),i=s("TableAction"),o=s("BasicTable"),r=s("FormModal");return g(),w("div",x,[c(o,{onRegister:t.registerTable},{toolbar:d(()=>[c(l,{type:"primary",icon:"",onClick:t.handleCreate},{default:d(()=>[N]),_:1},8,["onClick"])]),bodyCell:d(({column:h,record:u})=>[h.key==="action"?(g(),F(i,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,u)}}]},null,8,["actions"])):S("",!0)]),_:1},8,["onRegister"]),c(r,{onRegister:t.registerModal,onOk:t.handleSuccess},null,8,["onRegister","onOk"])])}var Oo=R(j,[["render",V]]);export{Oo as default};
