import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
// import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'title',
    width: 200,
    align: 'left',
  },
  {
    title: '图标',
    dataIndex: 'icon',
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    },
  },
  {
    title: '权限标识',
    dataIndex: 'permission',
    width: 180,
  },
  {
    title: '组件',
    dataIndex: 'component',
  },
  {
    title: '路径',
    dataIndex: 'path',
  },
  {
    title: 'Vue组件名称',
    dataIndex: 'name',
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 50,
  },
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   width: 80,
  //   customRender: ({ record }) => {
  //     const status = record.status;
  //     const enable = ~~status === 0;
  //     const color = enable ? 'green' : 'red';
  //     const text = enable ? '启用' : '停用';
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
];

const isButton = (type: string) => type === '2';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '菜单名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
];

function radio(field, label, helpMessage = ''): FormSchema {
  return {
    field: field,
    label: label,
    component: 'RadioButtonGroup',
    helpMessage: helpMessage,
    // defaultValue: 1,
    componentProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
      ],
    },
  };
}

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'title',
    label: '菜单名称',
    component: 'Input',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'field-detail-div',
    component: 'Divider',
    label: '详细',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'parentId',
    label: '上级菜单',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'title',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'sort',
    label: '排序',
    helpMessage: '升序',
    component: 'InputNumber',
  },

  {
    field: 'name',
    label: '路由名称',
    helpMessage: '组件的名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'path',
    label: '路由地址',
    component: 'Input',
  },
  {
    field: 'icon',
    label: '图标',
    component: 'IconPicker',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'component',
    label: '组件路径',
    component: 'Input',
    required: true,
  },
  {
    field: 'redirect',
    label: '跳转地址',
    component: 'Input',
  },
  {
    field: 'permission',
    label: '权限标识',
    component: 'Input',
  },

  {
    field: 'currentActiveMenu',
    label: '激活的菜单',
    component: 'Input',
    helpMessage: '当前激活的菜单。用于配置详情页时左侧激活的菜单路径',
  },
  {
    field: 'field-switch-div',
    component: 'Divider',
    label: '开关',
    colProps: {
      span: 24,
    },
  },
  radio('status', '启用'),
  radio('keepAlive', '缓存', '切换tab的时候是否保留数据'),
  radio('carryParam', 'TAB携带参数', '如果该路由会携带参数，且需要在tab页上面显示。则需要开启'),
  radio('showBreadcrumb', '面包屑', '该路由在面包屑上面的显示'),
  radio('showChildrenInMenu', '展示子菜单'),
  radio('showTab', '显示TAB', '当前路由不再标签页显示'),
  radio('showMenu', '显示菜单', '当前路由在菜单显示'),
];
