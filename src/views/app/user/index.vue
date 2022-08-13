<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增用户</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  placement: 'left',
                  title: '是否确认删除',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DataDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { getUser, deleteUser } from '/@/custom/api/custom';

  import { useDrawer } from '/@/components/Drawer';
  import DataDrawer from './DataDrawer.vue';

  import { columns } from './data';
  import customSetting from '/@/custom/customSetting';

  export default defineComponent({
    name: 'AppUserIndex',
    components: { BasicTable, DataDrawer, TableAction },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '用户列表',
        api: getUser,
        columns,
        formConfig: {
          labelWidth: customSetting.table.formConfig.labelWidth,
          schemas: [
            {
              field: 'name',
              label: '菜单名称',
              helpMessage: '菜单名称描述',
              component: 'Input',
              colProps: { span: 4 },
            },
            {
              field: 'name',
              label: '菜单名称',
              component: 'Input',
              colProps: { span: 4 },
            },
            {
              field: 'name',
              label: '菜单名称',
              component: 'Input',
              colProps: { span: 4 },
            },
            {
              field: 'name',
              label: '菜单名称',
              component: 'Input',
              colProps: { span: 4 },
            },
            {
              field: 'name',
              label: '菜单名称',
              component: 'Input',
              colProps: { span: 4 },
            },
            {
              field: 'name',
              label: '2222',
              component: 'Input',
              colProps: { span: 4 },
            },
            {
              field: 'name',
              label: '菜单名称',
              component: 'Input',
              colProps: { span: 4 },
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
              colProps: { span: 4 },
            },
          ],
        },
        useSearchForm: true,
        striped: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: customSetting.table.actionColumn,
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        record.parentId = record.parentId > 0 ? record.parentId : null;
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteUser(record);
        reload();
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
