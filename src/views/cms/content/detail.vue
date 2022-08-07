<template>
  <PageWrapper title="" contentFullHeight>
    <Loading :loading="showLoading" />
    <BasicForm @register="registerForm" />
    <template #rightFooter>
      <a-button type="primary" @click="handleSubmit"> 提交</a-button>
    </template>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, h, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { Loading } from '/@/components/Loading';

  import { formSchema, renderFields } from '/@/views/cms/content/data';
  import { getContentDetail, saveContent } from '/@/custom/api/cms';
  import { uploadApi } from '/@/api/sys/upload';

  import { Tinymce } from '/@/components/Tinymce';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'CmsContentDetail',
    components: { PageWrapper, BasicForm, Loading },
    setup() {
      const go = useGo();
      const { createMessage } = useMessage();
      const route = useRoute();
      const [registerForm, { setFieldsValue, validate, appendSchemaByField, removeSchemaByFiled }] =
        useForm({
          labelWidth: 100,
          schemas: formSchema,
          showResetButton: false,
          showSubmitButton: false,
          baseColProps: { span: 24 },
        });

      const showLoading = ref(false);

      onMounted(async () => {
        showLoading.value = true;
        try {
          const content = await getContentDetail({
            contentId: route.query.contentId,
            moduleIdentity: route.query.moduleIdentity,
            categoryId: route.query.categoryId,
          });
          setFieldsValue({
            ...content,
          });
          renderFields(appendSchemaByField, removeSchemaByFiled, content.fields);
        } finally {
          showLoading.value = false;
        }
      });

      async function handleSubmit() {
        try {
          let d = await validate();
          showLoading.value = true;
          await saveContent(d);
          createMessage.success('保存成功');
          go('/cms/content/index');
        } catch (error) {
          let errors = [];
          let ef = (error as any).errorFields;
          if (ef) {
            errors = ef[0].errors;
            let msg = errors.join(' ');
            createMessage.error(msg);
          } else {
            createMessage.error(error.message);
          }
        } finally {
          showLoading.value = false;
        }
      }

      return {
        go,
        showLoading,
        registerForm,
        handleSubmit,
      };
    },
  });
</script>
