import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '标识',
    dataIndex: 'identity',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'module-divider',
    label: '模型',
    component: 'Divider',
  },
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'identity',
    label: '标识',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'field-divider',
    label: '字段',
    component: 'Divider',
  },
];

export const typeOptions = [
  { label: 'input', value: 'input' },
  { label: 'select', value: 'select' },
  { label: 'text', value: 'text' },
  { label: 'editor', value: 'editor' },
  { label: 'image', value: 'image' },
];
