import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
// import { Icon } from '/@/components/Icon';
// import { formatToDateTime } from '/@/utils/dateUtil';
import { uploadApi } from '/@/api/sys/upload';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
    align: 'left',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '模型',
    dataIndex: 'module',
    width: 50,
  },
  {
    title: '显示',
    dataIndex: 'show',
    width: 80,
    customRender: ({ record }) => {
      const show = record.show;
      const enable = ~~show === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '显示' : '隐藏';
      return h(Tag, { color: color }, () => text);
    },
  },
];

const isButton = (type: string) => type === '2';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'show',
    label: '显示',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
      ],
    },
    colProps: { span: 8 },
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
    field: 'parentId',
    label: '上级',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'summary',
    label: '简介',
    component: 'InputTextArea',
    required: false,
  },
  {
    field: 'image',
    label: '图片',
    component: 'Upload',
    componentProps: {
      api: uploadApi,
      maxNumber: 1,
      showPreviewNumber: true,
      multiple: false,
    },
  },
  {
    field: 'orderNo',
    label: '排序',
    component: 'InputNumber',
    helpMessage: '升序',
  },
  {
    field: 'redirect',
    label: '跳转地址',
    component: 'Input',
  },
  {
    field: 'show',
    label: '是否显示',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },
];
