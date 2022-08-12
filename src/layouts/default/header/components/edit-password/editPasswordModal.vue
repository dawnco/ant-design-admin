<template>
  <BasicModal :footer="null" title="修改密码" @register="register">
    <BasicForm @register="registerForm" />
    <a-button type="primary" block class="mt-2" @click="handleEdit"> 修改 </a-button>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal/index';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';
  import { useLockStore } from '/@/store/modules/lock';
  import { editPassword } from '/@/custom/api/editPassword';
  export default defineComponent({
    name: 'EditPasswordModal',
    components: { BasicModal, BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const [register, { closeModal }] = useModalInner();
      const [registerForm, { validateFields, resetFields }] = useForm({
        showActionButtonGroup: false,
        schemas: [
          {
            field: 'oldPassword',
            label: '当前密码',
            colProps: {
              span: 24,
            },
            component: 'InputPassword',
            required: true,
          },
          {
            field: 'password',
            label: '新密码',
            colProps: {
              span: 24,
            },
            component: 'InputPassword',
            required: true,
          },
          {
            field: 'password2',
            label: '确认密码',
            colProps: {
              span: 24,
            },
            component: 'InputPassword',
            dynamicRules: ({ values }) => {
              return [
                {
                  required: true,
                  validator: (_, value) => {
                    if (!value) {
                      return Promise.reject('密码不能为空');
                    }
                    if (value !== values.password) {
                      return Promise.reject('两次输入的密码不一致!');
                    }
                    return Promise.resolve();
                  },
                },
              ];
            },
          },
        ],
        labelWidth: 75,
        labelAlign: 'right',
      });

      async function handleEdit() {
        const values = await validateFields();
        await editPassword({ ...values }).then(() => {
          createMessage.success('修改成功');
          closeModal();
          resetFields();
        });
      }

      return {
        register,
        registerForm,
        handleEdit,
      };
    },
  });
</script>
