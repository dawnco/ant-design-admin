<template>
  <Upload name="logo" :customRequest="testUpload" :showUploadList="false" accept="image/*">
    <!-- <a-button style="opacity: 1">
      <upload-outlined></upload-outlined>
      上传logo
    </a-button> -->
    <img v-if="imageUrl" :src="imageUrl" alt="logo" class="logo" />
    <div v-else class="click"
      >+
      <Loading :loading="loadingState" absolute="absolute" theme="light" size="default" />
    </div>
  </Upload>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Upload, message } from 'ant-design-vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { Loading } from '/@/components/Loading';
  import { defHttp } from '/@/utils/http/axios';
  // 传给父组件的base64地址
  const imgUrl = ref<string>('');
  function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  }
  export default defineComponent({
    components: { Upload, UploadOutlined, Loading },
    emits: ['passValue'],
    props: {
      imageUrl: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    setup(_, { emit }) {
      const uploadApi = (params: any) =>
        defHttp.post<any>({
          url: props.url,
          params,
        });
      const loadingState = ref(false);
      const testUpload = (file) => {
        loadingState.value = true;
        let formData = new FormData();
        formData.append('logo', file.file);
        getBase64(file.file, (base64Url: string) => {
          imgUrl.value = base64Url;
        });
        uploadApi(formData)
          .then((res) => {
            callfatherMethods(res.path, imgUrl.value);
            loadingState.value = false;
          })
          .catch(() => {
            loadingState.value = false;
          });
      };
      function callfatherMethods(path, path1) {
        emit('passValue', path, path1);
      }
      return {
        testUpload,
        callfatherMethods,
        imgUrl,
        loadingState,
      };
    },
  });
</script>
<style lang="less" scoped>
  .logo {
    position: absolute;
    top: 0;
    width: 84px;
    height: 84px;
  }
  .logo:hover {
    cursor: pointer;
  }
  .click {
    width: 84px;
    height: 84px;
    text-align: center;
    line-height: 84px;
    font-size: 28px;
    color: #e5e7eb;
    position: absolute;
    top: 0;
    border: 1px solid #e5e7eb;
  }
  .click:hover {
    cursor: pointer;
  }
</style>
