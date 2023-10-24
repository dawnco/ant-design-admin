<template>
  <div style="padding: 16px">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { columns } from './tableData';
  import { roleList } from '/@/custom/api/system';

  export default defineComponent({
    name: 'AppSystemRoleIndex',
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '角色列表',
        columns: columns,
        api: roleList,
        bordered: true,
        showIndexColumn: false,
        clickToRowSelect: false,
        showTableSetting: true,
      });
      return {
        registerTable,
      };
    },
  });
</script>
