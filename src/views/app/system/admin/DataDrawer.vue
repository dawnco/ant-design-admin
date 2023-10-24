<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './tableData';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { addAdmin, editAdmin } from '/@/custom/api/system';

  export default defineComponent({
    name: 'MenuDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const editId = ref('');
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { span: 12 },
      });
      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          editId.value = data.record.id;
          let enabled = true;
          if (data.record.enabled === 0) {
            enabled = false;
          }
          setFieldsValue({
            ...data.record,
            enabled: enabled,
          });
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? '新增管理员' : '编辑管理员'));
      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          let enabled = 0;
          if (values.enabled) {
            enabled = 1;
          }
          let id = editId.value;
          if (unref(isUpdate)) {
            await editAdmin({ ...values, enabled, id });
          } else {
            await addAdmin({ ...values, enabled });
          }
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }
      return { registerDrawer, registerForm, getTitle, handleSubmit };
    },
  });
</script>
