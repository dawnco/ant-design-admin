<template>
  <Switch :loading="loading" v-model:checked="checked" @change="change"> </Switch>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Upload, message } from 'ant-design-vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { uploadApi } from '/@/api/cpi/upload';
  import { Switch } from 'ant-design-vue';
  import { defHttp } from '/@/utils/http/axios';
  export default defineComponent({
    components: { Switch },
    props: {
      url: {
        type: String,
      },
      params: {
        type: Object,
      },
    },
    setup(props, { emit }) {
      const loading = ref<boolean>(false);
      const checked = ref<boolean>(false);
      const status = ref<number>(0);
      const params = ref<object>({});
      // 通过传入的url生成api
      const switchApi = (params: any) =>
        defHttp.post<any>({
          url: props.url,
          params,
        });
      // 开关变化时携带参数发起请求
      async function change() {
        loading.value = true;
        status.value = checked.value === true ? 1 : 0;
        // 从父组件接收params值
        params.value = props.params;
        // 给params对象添加状态value值
        params.value.value = status.value;
        try {
          await switchApi(params.value);
        } finally {
          loading.value = false;
        }
      }
      return {
        checked,
        loading,
        change,
      };
    },
  });
</script>
