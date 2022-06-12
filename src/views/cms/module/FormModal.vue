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
  import { BasicModal, useModalInner, Modal } from '/@/components/Modal';
  import { BasicForm } from '/@/components/Form';
  import { useForm } from '/@/components/Form';
  import { formSchema } from './data';
  import Fields from './Fields.vue';
  import { saveModule } from '/@/api/cms';

  export default defineComponent({
    components: { BasicModal, BasicForm, Fields },
    setup(_, { emit }) {
      const title = ref('修改');

      const fields = ref([
        {
          name: '',
          sort: 1,
          type: 'input',
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

      const [registerModal, { closeModal }] = useModalInner(async (data) => {
        resetFields();
        setFieldsValue({
          ...data.module,
        });

        if (data.module.identity) {
          updateSchema({
            field: 'identity',
            componentProps: {
              disabled: true,
            },
          });
        } else {
          updateSchema({
            field: 'identity',
            componentProps: {
              disabled: false,
            },
          });
        }
        if (data.fields.length > 0) {
          changeFields(data.fields);
        } else {
          changeFields([
            {
              name: '',
              identity: '',
              sort: 100,
              type: 'input',
            },
          ]);
        }
      });

      function changeFields(val) {
        fields.value = val;
      }

      async function handleSubmit() {
        try {
          const values = await validate();
          await saveModule({ module: values, fields: fields.value });
          closeModal();
          emit('ok');
        } catch (e) {
          console.log('module FormModal', e);
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
