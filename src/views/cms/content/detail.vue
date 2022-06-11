<template>
  <PageWrapper title="详情" contentFullHeight>
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

  import { formSchema } from '/@/views/cms/content/data';
  import { getContentDetail, saveContent } from '/@/api/cms';
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
      const [registerForm, { setFieldsValue, validate, appendSchemaByField }] =
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
          renderFields(content.fields);
        } finally {
          showLoading.value = false;
        }
      });

      function renderFields(fields) {
        fields.forEach((f) => {
          let schema: FormSchema = {} as FormSchema;
          const field = 'FIELD_' + f.identity;
          switch (f.type) {
            case 'image':
              schema = {
                field: field,
                label: f.name,
                component: 'Upload',
                defaultValue: f.content,
                componentProps: {
                  api: uploadApi,
                  maxNumber: 1,
                  showPreviewNumber: true,
                  multiple: false,
                },
              };
              break;
            case 'editor':
              schema = {
                field: field,
                label: f.name,
                component: 'Input',
                defaultValue: f.content,
                render: ({ model, field }) => {
                  return h(Tinymce, {
                    value: model[field],
                    onChange: (value: string) => {
                      model[field] = value;
                    },
                  });
                },
              };
              break;
            case 'input':
              schema = {
                field: field,
                label: f.name,
                defaultValue: f.content,
                component: 'Input',
              };
              break;
            case 'select':
              schema = {
                field: field,
                label: f.name,
                defaultValue: f.content,
                component: 'Select',
                componentProps: {
                  options: f.options,
                },
              };
              break;
            case 'text':
              schema = {
                field: field,
                label: f.name,
                defaultValue: f.content,
                component: 'InputTextArea',
              };
              break;
          }
          appendSchemaByField(schema, '');
        });
      }

      async function handleSubmit() {
        try {
          let d = await validate();
          showLoading.value = true;
          await saveContent(d);
        } catch (error) {
          let errors = [];
          if (error.errorFields) {
            errors = error.errorFields[0].errors;
          }
          let msg = errors.join(' ');
          createMessage.error(msg);
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
