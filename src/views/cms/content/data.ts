import { BasicColumn, FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';
import { Tinymce } from '/@/components/Tinymce';
import { h } from 'vue';
import { formatDateTime } from '/@/utils/dateUtil';
// import { Tag } from 'ant-design-vue';
import { getCategories, getCategory } from '/@/custom/api/cms';

const appendFields = [];

export function renderFields(appendSchemaByField, removeSchemaByFiled, fields) {
  appendFields.forEach((v) => {
    removeSchemaByFiled(v);
  });

  fields.forEach((f) => {
    let schema: FormSchema = {} as FormSchema;
    const field = 'FIELD_' + f.identity;

    appendFields.push(field as never);

    switch (f.type) {
      case 'image':
        schema = {
          field: field,
          label: f.name,
          component: 'Upload',
          defaultValue: f.content ? f.content : [],
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

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'contentId',
    width: 200,
    align: 'left',
  },
  {
    title: '名称',
    dataIndex: 'title',
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 50,
  },
  {
    title: '模型',
    dataIndex: 'module',
    width: 100,
  },
  {
    title: '模板',
    dataIndex: 'template',
    width: 100,
  },
  {
    title: '发布时间',
    dataIndex: 'publishTime',
    width: 180,
    customRender: ({ record }) => {
      return formatDateTime(record.publishTime);
    },
  },
  // {
  //   title: '显示',
  //   dataIndex: 'show',
  //   width: 80,
  //   customRender: ({ record }) => {
  //     const show = record.show;
  //     const enable = ~~show === 1;
  //     const color = enable ? 'green' : 'red';
  //     const text = enable ? '显示' : '隐藏';
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
];

export const formSchema: FormSchema[] = [
  {
    field: 'contentId',
    label: 'contentId',
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
    field: 'category',
    label: '分类',
    component: 'ApiTreeSelect',
    required: true,
    colProps: { span: 6 },
    componentProps: ({ formActionType }) => {
      return {
        api: getCategories,
        resultField: 'data',
        labelField: 'name',
        valueField: 'id',
        onChange: (val) => {
          getCategory({ categoryId: val }).then((r) => {
            renderFields(
              formActionType.appendSchemaByField,
              formActionType.removeSchemaByFiled,
              r.fields,
            );
          });
        },
      };
    },
  },
  {
    field: 'image',
    label: '图片',
    component: 'Upload',
    colProps: { span: 6 },
    componentProps: {
      api: uploadApi,
      maxNumber: 1,
      showPreviewNumber: true,
      multiple: false,
    },
  },

  {
    field: 'sort',
    label: '排序',
    helpMessage: '升序',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'publishTime',
    label: '发布时间',
    component: 'DatePicker',
    colProps: { span: 6 },
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      showTime: true,
    },
  },
  {
    field: 'identity',
    label: '标识',
    helpMessage: '文章标识 可以通过这个找到内容',
    component: 'Input',
    required: false,
    colProps: { span: 6 },
  },
  {
    field: 'path',
    label: '路径',
    helpMessage: '通过那个url可以访问到这个内容 例如 /about.html',
    component: 'Input',
    required: false,
    colProps: { span: 6 },
  },
  {
    field: 'template',
    label: '模板',
    helpMessage: '使用那个模板路径 例如  /template/about.html',
    component: 'Input',
    required: false,
    colProps: { span: 6 },
  },
  {
    field: 'summary',
    label: '简介',
    component: 'InputTextArea',
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
