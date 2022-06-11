<template>
  <PageWrapper title="表单基础示例" contentFullHeight>

    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';
  import { formSchema } from '/@/views/cms/content/data';
  export default defineComponent({
    name: 'CmsContentDetail',
    components: { PageWrapper, BasicForm },
    setup() {
      const [
        registerForm,
        {
          resetFields,
          setFieldsValue,
          updateSchema,
          validate,
          appendSchemaByField,
          removeSchemaByFiled,
        },
      ] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showResetButton: false,
        submitButtonOptions: {
          text: '保存',
        },
        actionColOptions: { span: 24 },
        baseColProps: { span: 24 },
      });

      const handleSubmit = function () {

      };

      return {
        registerForm,
        handleSubmit,
      };
    },
  });
</script>
