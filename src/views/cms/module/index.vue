<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" icon="" @click="handleCreate">新增</a-button>
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
                  title: '是否确认删除',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <FormModal @register="registerModal" @ok="handleSuccess" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteModule, getModule, getModules } from '/@/custom/api/cms';
  import { columns } from './data';
  import FormModal from './FormModal.vue';
  import { useModal } from '/@/components/Modal';
  import customSetting from '/@/custom/customSetting';
  export default defineComponent({
    title: 'CmsModuleIndex',
    components: { BasicTable, TableAction, FormModal },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '模型',
        api: getModules,
        columns,
        formConfig: {
          labelWidth: customSetting.table.formConfig.labelWidth,
        },
        pagination: false,
        striped: false,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        canResize: false,
        actionColumn: customSetting.table.actionColumn,
      });

      const [registerModal, { openModal }] = useModal();

      function handleCreate() {
        openModal(true, { module: {}, fields: [] });
      }

      async function handleEdit(record: Recordable) {
        let r = await getModule({ identity: record.identity });
        openModal(true, r);
      }

      function handleDelete(record: Recordable) {
        deleteModule({ identity: record.identity });
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
