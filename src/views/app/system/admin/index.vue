<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增管理员</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ion:lock-closed-outline',
                onClick: editPassword.bind(null, record),
            },
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
          ]" />
        </template>
        <template v-if="column.key === 'roleList'">
          <span v-for="(item, index) in record.roleList" :key="index">{{ item.name }}&nbsp;</span>
        </template>
      </template>
    </BasicTable>
    <DataDrawer @register="registerDrawer" @success="handleSuccess" />
    <EditPassword @register="registerEdit" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { adminList, delAdmin } from '/@/custom/api/system';
  import { useDrawer } from '/@/components/Drawer';
  import { useModal } from '/@/components/Modal';
  import DataDrawer from './DataDrawer.vue';
  import EditPassword from './editPasswordModal.vue';
  import { columns, getFormConfig } from './tableData';
  import { getIsUpdate } from './tableData';
  export default defineComponent({
    name: 'AppSystemAdminIndex',
    components: { BasicTable, DataDrawer, TableAction, EditPassword },
    setup() {
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerEdit, { openModal: openModalEdit }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '管理员列表',
        api: adminList,
        columns,
        formConfig: getFormConfig(),
        useSearchForm: true,
        striped: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        getIsUpdate(true);
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        getIsUpdate(false);
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        delAdmin(record).then(() => {
          reload();
        });
      }

      function editPassword(record: Recordable) {
        openModalEdit(true, { record });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        registerEdit,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        editPassword
      };
    },
  });
</script>
