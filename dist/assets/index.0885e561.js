import{B as S}from"./TableImg.94df718a.js";import{j as B}from"./BasicForm.4092a552.js";import{u as F}from"./useTable.8a96c0e7.js";import{g as w}from"./system.ef4b0265.js";import{P as D}from"./index.62b0c78d.js";import A from"./DeptTree.c8ebb4c2.js";import{b as y}from"./index.99c0f294.js";import{A as k,c as I,s as M}from"./AccountModal.18202f93.js";import{av as E,a as R,aY as V,w as P,ax as t,o as C,j as _,z as n,n as r,l as W,B as $}from"./index.d00d010f.js";import"./index.c2ff998c.js";import"./Checkbox.d269b206.js";import"./index.05c3bb54.js";import"./index.6bdc9fa9.js";import"./eagerComputed.505d1976.js";import"./useForm.932b00c0.js";import"./index.4971a5fb.js";import"./index.47786582.js";import"./index.26802964.js";import"./uuid.2b29000c.js";import"./index.0499bc42.js";import"./_baseIteratee.36b75faf.js";import"./get.b6ec3b5b.js";import"./DeleteOutlined.3d6f436d.js";import"./index.2e13b641.js";import"./useRefs.6ba3ea31.js";import"./index.af633db6.js";import"./Form.910438a2.js";import"./Col.253020a7.js";import"./useFlexGapSupport.73d0b0a0.js";import"./useSize.fb85ad3c.js";import"./useWindowSizeFn.c6dbabe3.js";import"./index.420ad400.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.133be7b5.js";import"./FullscreenOutlined.bc0c7bcb.js";import"./index.417b4824.js";import"./scrollTo.0d18cb8f.js";import"./index.4c7ccf0b.js";/* empty css              *//* empty css               */import"./index.1198cc7b.js";import"./transButton.432695aa.js";import"./index.b66f5d3c.js";import"./index.58b6f38e.js";import"./download.3070d7fc.js";import"./base64Conver.08b9f4ec.js";import"./index.28538d1b.js";import"./index.0e1e0fdd.js";import"./uniqBy.5d6dd86b.js";import"./index.460c90ef.js";import"./index.9091d57e.js";import"./useContentViewHeight.d6e860c4.js";import"./ArrowLeftOutlined.6d181898.js";import"./index.bc78285f.js";import"./index.b2c8ec8b.js";import"./useContextMenu.638f00c5.js";const v=R({name:"AccountManagement",components:{BasicTable:S,PageWrapper:D,DeptTree:A,AccountModal:k,TableAction:B},setup(){const e=V(),[h,{openModal:i}]=y(),a=P({}),[g,{reload:l,updateTableDataRecord:s}]=F({title:"\u8D26\u53F7\u5217\u8868",api:w,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function c(){i(!0,{isUpdate:!1})}function p(o){i(!0,{record:o,isUpdate:!0})}function m(o){}function u({isUpdate:o,values:b}){if(o){const T=s(b.id,b)}else l()}function d(o=""){a.deptId=o,l()}function f(o){e("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:c,handleEdit:p,handleDelete:m,handleSuccess:u,handleSelect:d,handleView:f,searchInfo:a}}}),x=$("\u65B0\u589E\u8D26\u53F7");function N(e,h,i,a,g,l){const s=t("DeptTree"),c=t("a-button"),p=t("TableAction"),m=t("BasicTable"),u=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[r(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),r(m,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:n(()=>[r(c,{type:"primary",onClick:e.handleCreate},{default:n(()=>[x]),_:1},8,["onClick"])]),bodyCell:n(({column:f,record:o})=>[f.key==="action"?(C(),_(p,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),r(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var zo=E(v,[["render",N]]);export{zo as default};
