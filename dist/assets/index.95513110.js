import{B as C}from"./TableImg.94df718a.js";import{j as g}from"./BasicForm.4092a552.js";import{u as T}from"./useTable.8a96c0e7.js";import{a as _,d as D}from"./cms.dff13ee1.js";import{u as S}from"./index.1fc8bf58.js";import{D as B,c as w,s as k}from"./DataDrawer.c316fcee.js";import{c as h}from"./customSetting.4c03ff9f.js";import{av as y,a as F,ax as o,o as b,h as I,n as p,z as l,j as A,l as E,al as R,B as v}from"./index.d00d010f.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useForm.932b00c0.js";import"./index.62b0c78d.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useSize.fb85ad3c.js";import"./useWindowSizeFn.c6dbabe3.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./transButton.432695aa.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.26802964.js";import"./uuid.2b29000c.js";import"./index.0499bc42.js";import"./_baseIteratee.36b75faf.js";import"./get.b6ec3b5b.js";import"./DeleteOutlined.3d6f436d.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./index.99c0f294.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.420ad400.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.133be7b5.js";import"./index.417b4824.js";import"./scrollTo.0d18cb8f.js";import"./index.4c7ccf0b.js";/* empty css              *//* empty css               */import"./index.1198cc7b.js";import"./index.b66f5d3c.js";import"./index.58b6f38e.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";import"./index.dfd53dc2.js";import"./upload.47c9d604.js";const x=F({name:"CmsCategoryIndex",components:{BasicTable:C,DataDrawer:B,TableAction:g},setup(){const[e,{openDrawer:r}]=S(),[c,{reload:i,expandAll:u}]=T({title:"\u5217\u8868",api:_,columns:w,formConfig:{labelWidth:h.table.formConfig.labelWidth,schemas:k},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:h.table.actionColumn});function d(){r(!0,{isUpdate:!1})}function n(t){t.parentId=t.parentId>0?t.parentId:null,t.parentId,r(!0,{record:t,isUpdate:!0})}function a(t){D({id:t.id}),i()}function s(){i()}function m(){R(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:s,onFetchSuccess:m}}}),$=v("\u65B0\u589E\u5206\u7C7B");function N(e,r,c,i,u,d){const n=o("a-button"),a=o("TableAction"),s=o("BasicTable"),m=o("DataDrawer");return b(),I("div",null,[p(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[p(n,{type:"primary",icon:"",onClick:e.handleCreate},{default:l(()=>[$]),_:1},8,["onClick"])]),bodyCell:l(({column:t,record:f})=>[t.key==="action"?(b(),A(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),p(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ue=y(x,[["render",N]]);export{Ue as default};
