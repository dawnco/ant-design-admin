import{B as l}from"./TableImg.94df718a.js";import{j as s}from"./BasicForm.4092a552.js";import{u as d}from"./useTable.8a96c0e7.js";import{d as c}from"./table.80e4c8ad.js";import{av as F,a as b,ax as n,o as m,h as f,n as h,z as B,j as A,l as C}from"./index.d00d010f.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useForm.932b00c0.js";import"./index.62b0c78d.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.26802964.js";import"./uuid.2b29000c.js";import"./index.0499bc42.js";import"./_baseIteratee.36b75faf.js";import"./get.b6ec3b5b.js";import"./DeleteOutlined.3d6f436d.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./index.99c0f294.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.420ad400.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.133be7b5.js";import"./index.417b4824.js";import"./scrollTo.0d18cb8f.js";import"./index.4c7ccf0b.js";/* empty css              *//* empty css               */import"./index.1198cc7b.js";import"./index.b66f5d3c.js";import"./index.58b6f38e.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),x={class:"p-4"};function w(t,i,e,o,D,I){const p=n("TableAction"),a=n("BasicTable");return m(),f("div",x,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(m(),A(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Dt=F(_,[["render",w]]);export{Dt as default};
