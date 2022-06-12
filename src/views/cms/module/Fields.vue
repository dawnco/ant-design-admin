<template>
  <Form autocomplete="off" :model="mFields">
    <Row
      v-for="(field, index) in mFields"
      :key="index"
      :gutter="24"
      style="margin: 0"
    >
      <Col :span="4">
        <FormItem
          label="名称"
          :name="[index, 'name']"
          :rules="[{ required: true, message: '必填' }]"
        >
          <Input v-model:value="field.name" allow-clear />
        </FormItem>
      </Col>
      <Col :span="4">
        <FormItem
          label="标识"
          :name="[index, 'identity']"
          :rules="[{ required: true, message: '必填' }]"
        >
          <Input
            placeholder="唯一值"
            :disabled="field.disabled"
            v-model:value="field.identity"
            allow-clear
          />
        </FormItem>
      </Col>
      <Col :span="4">
        <FormItem
          label="排序"
          :name="[index, 'sort']"
          :rules="[{ required: true, message: '必填' }]"
        >
          <Input placeholder="升序" v-model:value="field.sort" allow-clear />
        </FormItem>
      </Col>
      <Col :span="4">
        <FormItem
          label="类型"
          :name="[index, 'type']"
          :rules="[{ required: true, message: '必填' }]"
        >
          <Select v-model:value="field.type">
            <SelectOption v-for="v in typeOptions" :key="v.value" :value="v.value">
              {{ v.label }}
            </SelectOption>
          </Select>
        </FormItem>
      </Col>
      <Col :span="4">
        <FormItem label="选项" :name="[index, 'options']">
          <Input placeholder="逗号分割 例如: 初等,中等" v-model:value="field.options" allow-clear />
        </FormItem>
      </Col>
      <Col :span="4">
        <FormItem name="sort" :rules="[{ required: true, message: 'Please input your username!' }]">
          <Button shape="round" v-if="index === fields.length - 1" @click="add(index)">新增</Button>
          <Button shape="round" v-else danger @click="remove(index)">删除</Button>
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>
<script lang="ts">
  import { defineComponent, toRef, ref, watch, computed } from 'vue';
  import { Button } from '../../../components/Button';
  import { Input, Form, FormItem, Row, Col, Select, SelectOption } from 'ant-design-vue';
  import { typeOptions } from './data';

  export default defineComponent({
    components: { Form, FormItem, Input, Row, Col, Button, Select, SelectOption },
    title: 'Fields.vue',
    props: {
      fields: [Array],
    },
    emits: ['change'],
    setup(props, { emit }) {

      // const fields = ref([
      //   {
      //     name: 'xx',
      //     sort: 1,
      //     type: 'select',
      //   },
      // ]);

      const mFields = toRef(props, 'fields');

      function remove(index) {
        mFields.value.splice(index, 1);
      }

      function add() {
        mFields.value.push({
          disabled: false,
          name: '',
          sort: 100,
          type: 'input',
          options: '',
        });
      }

      watch(
        mFields,
        (n, o) => {
          emit('change', n);
        },
        {
          immediate: true,
          deep: true,
        },
      );

      return {
        remove,
        add,
        mFields,
        typeOptions,
      };
    },
  });
</script>
