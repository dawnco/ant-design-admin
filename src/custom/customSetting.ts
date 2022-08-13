import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';
import { saveSwitch } from '/@/custom/api/custom';

const customSetting = {
  table: {
    formConfig: {
      labelWidth: 80,
    },
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
    },
    switchButton(record, field: string, table: string, keyField: string) {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record[field] === 1,
        checkedChildren: '是',
        unCheckedChildren: '否',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? 1 : 0;
          const { createMessage } = useMessage();
          saveSwitch(table, field, newStatus, keyField, record[keyField])
            .then(() => {
              record[field] = newStatus;
              createMessage.success(`修改成功`);
            })
            .catch(() => {
              createMessage.error('修改失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
};
export default customSetting;
