import { BasicColumn, FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';
import { Tinymce } from '/@/components/Tinymce';
import { h } from 'vue';
import { formatToDateTime } from '/@/utils/dateUtil';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'title',
    width: 200,
    align: 'left',
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '模型',
    dataIndex: 'module',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'created',
    width: 180,
    customRender: ({ record }) => {
      return formatToDateTime(record.created);
    },
  },
  {
    title: '显示',
    dataIndex: 'show',
    width: 80,
    customRender: ({ record }) => {
      const show = record.show;
      const enable = ~~show === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '显示' : '隐藏';
      return h(Tag, { color: color }, () => text);
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
  },
  {
    field: 'summary',
    label: '简介',
    component: 'InputTextArea',
    required: true,
  },
  {
    field: 'category_id',
    label: '分类',
    component: 'Select',
    required: true,
    colProps: { span: 4 },
  },
  {
    field: 'module_identity',
    label: '模型',
    component: 'Select',
    required: true,
    colProps: { span: 4 },
  },
  {
    field: 'identity',
    label: '标识',
    helpMessage: '用于取单个文章内容',
    component: 'Input',
    required: false,
    colProps: { span: 4 },
  },
  {
    field: 'template',
    label: '模板',
    component: 'Input',
    required: true,
    colProps: { span: 4 },
  },
  {
    field: 'path',
    label: '访问路径',
    helpMessage: '需要以/开头 如果填写 /about.html  访问路径为  http://www.website.com/about.html',
    component: 'Input',
    colProps: { span: 4 },
  },

  {
    field: 'sort',
    label: '排序',
    helpMessage: '升序',
    component: 'Input',
  },

  {
    field: 'image',
    label: '图片',
    component: 'Upload',
    componentProps: {
      api: uploadApi,
      maxNumber: 1,
      showPreviewNumber: true,
      multiple: false,
    },
  },
  {
    field: 'publish_date',
    label: '发布日期',
    component: 'DatePicker',
  },
  {
    field: 'publish_time',
    label: '发布时间',
    component: 'TimePicker',
  },
  {
    field: 'content',
    label: '内容',
    component: 'Input',
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
];
