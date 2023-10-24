import { BasicColumn, FormSchema, FormProps } from '/@/components/Table';
import { h, ref } from 'vue';
import { Switch } from 'ant-design-vue';
import { roleList, switchEnabled } from '/@/custom/api/system';

const roleGroup = ref([]);

function getRole() {
  roleList().then((res) => (roleGroup.value = res));
}

getRole();
const isUpdate = ref(true);

export function getIsUpdate(status: boolean) {
  isUpdate.value = true;
  if (!status) isUpdate.value = false;
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    showResetButton: false,
    showAdvancedButton: true,
    autoAdvancedLine: 4,
    actionColOptions: {
      span: 24,
    },
    schemas: [
      {
        field: 'keywords',
        component: 'Input',
        label: '关键词',
        colProps: {
          span: 7,
        },
      },
      {
        field: 'roleId',
        label: '角色',
        component: 'Select',
        colProps: {
          span: 7,
        },

        componentProps: {
          options: roleGroup,
          mode: 'multiple',
          fieldNames: {
            label: 'name',
            value: 'id',
          },
        },
      },
    ],
  };
}

export const columns: BasicColumn[] = [
  {
    title: '账号',
    dataIndex: 'username',
    width: 150,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '手机',
    dataIndex: 'mobile',
  },
  {
    title: '角色',
    dataIndex: 'roleList',
  },
  {
    title: '是否启用',
    dataIndex: 'enabled',
    width: 100,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.enabled === 1,
        // checkedChildren: '已启用',
        // unCheckedChildren: '已禁用',
        loading: record.pendingStatus,
        async onChange(checked: boolean) {
          record.pendingStatus = true;
          const newEnabled = checked ? 1 : 0;
          record.enabled = newEnabled;
          const id = record.id;
          const enabled = newEnabled;
          await switchEnabled({ id, enabled }).then(() => {
            record.pendingStatus = false;
          });
        },
      });
    },
  },
];
export const formSchema: FormSchema[] = [
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
    field: 'name',
    label: '姓名',
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
    required: true,
    colProps: {
      span: 24,
    },
    ifShow: () => {
      return isUpdate.value;
    },
  },
  {
    field: 'mobile',
    label: '电话',
    component: 'Input',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'roleIds',
    label: '角色',
    component: 'Select',
    colProps: {
      span: 24,
    },

    componentProps: {
      options: roleGroup,
      mode: 'multiple',
      fieldNames: {
        label: 'name',
        value: 'id',
      },
    },
  },
  {
    field: 'enabled',
    component: 'Switch',
    label: '是否启用',
    colProps: {
      span: 8,
    },
  },
];
