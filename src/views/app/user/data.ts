import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 100,
  },
  {
    title: '密码',
    dataIndex: 'password',
    width: 100,
    ellipsis: false,
  },
  {
    title: '电话',
    dataIndex: 'phone',
    width: 100,
  },
  {
    title: 'enabled',
    dataIndex: 'enabled',
    width: 100,
  },

];
export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'phone',
    label: '电话',
    component: 'Input',
    colProps: {
      span: 24,
    },
  },
];
