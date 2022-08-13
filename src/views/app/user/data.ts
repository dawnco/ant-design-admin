import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import customSetting from '/@/custom/customSetting';
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
    title: '电话',
    dataIndex: 'phone',
    width: 100,
  },
  {
    title: '启用',
    dataIndex: 'enabled',
    customRender: ({ record }) => {
      return customSetting.table.switchButton(record, 'enabled', 'admin', 'id');
    },
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
