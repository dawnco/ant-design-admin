<template>
  <BasicModal
    v-bind="$attrs"
    :keyboard="false"
    :maskClosable="false"
    :title="title"
    :width="960"
    @register="registerModal"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
    <Fields :fields="fields" @change="changeFields" />
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref, h } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm } from '/@/components/Form';
  import { useForm } from '/@/components/Form';
  import { formSchema, typeOptions } from './data';
  import Fields from './Fields.vue';
  import { addCategory, updateCategory } from '/@/api/cms';

  export default defineComponent({
    components: { BasicModal, BasicForm, Fields },
    setup() {
      const title = ref('修改');
      const fields = ref([
        {
          name: 'xx',
          sort: 1,
          type: 'select',
        },
      ]);
      const [
        registerForm,
        {
          resetFields,
          setFieldsValue,
          updateSchema,
          validate,
          appendSchemaByField,
          removeSchemaByFiled
        },
      ] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { span: 24 },
      });

      const [registerModal] = useModalInner(async (data) => {
        setFieldsValue({
          ...data.module,
        });
      });

      function changeFields(val) {
        fields.value = val;
      }

      async function handleSubmit() {
        try {
          const values = await validate();
          console.log(fields.value, values);
        } finally {

        }
      }

      return {
        registerForm,
        registerModal,
        title,
        changeFields,
        fields,
        handleSubmit,
      };
    },
  });
</script>
