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
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getContents, deleteContent } from '/@/custom/api/cms';
  import { columns } from './data';

  export default defineComponent({
    name: 'CmsContentIndex',
    components: { BasicTable, TableAction, },
    setup() {
      const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '模型',
        api: getContents,
        columns,
        formConfig: {
          labelWidth: 120,
        },
        pagination: { pageSize: 10 },
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

      function handleCreate() {
        go('/cms/content/detail');
      }

      const router = useRouter();

      async function handleEdit(record: Recordable) {
        router.push({
          path: '/cms/content/detail',
          query: {
            contentId: record.contentId,
            moduleIdentity: record.moduleIdentity,
            categoryId: record.categoryId,
          },
        });
      }

      function handleDelete(record: Recordable) {
        deleteContent({ id: record.content_id });
        reload();
      }

      return {
        registerTable,
        handleCreate,
        handleEdit,
        handleDelete,
      };
    },
  });
</script>

<style scoped></style>
