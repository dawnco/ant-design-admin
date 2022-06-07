<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" icon="" @click="handleCreate">新增</a-button>
      </template>
      <template #action="{ record }">
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
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <FormModal @register="registerModal" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteModule, getModule, getModules } from '/@/api/cms';
  import { columns } from './data';
  import FormModal from './FormModal.vue';
  import { useModal } from '/@/components/Modal';
  export default defineComponent({
    title: 'CmsModuleIndex',
    components: { BasicTable, TableAction, FormModal },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '模型',
        api: getModules,
        columns,
        formConfig: {
          labelWidth: 120,
        },
        pagination: false,
        striped: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      const [registerModal, { openModal }] = useModal();

      function handleCreate() {
        openModal(true, { module: {}, fields: [] });
      }

      async function handleEdit(record: Recordable) {
        let r = await getModule({ id: record.id });
        openModal(true, r);
      }

      function handleDelete(record: Recordable) {
        deleteModule({ id: record.id });
        reload();
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerModal,
        registerTable,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>

<style scoped></style>
