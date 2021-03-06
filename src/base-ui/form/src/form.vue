<template>
  <div class="cy-form">
    <div class="cy-form_header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :modelValue="modelValue[item.field]"
                  @update:modelValue="
                    handleUpdateModelValue($event, item.field)
                  "
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :modelValue="modelValue[item.field]"
                  @update:modelValue="
                    handleUpdateModelValue($event, item.field)
                  "
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    :label="option.title"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :modelValue="modelValue[item.field]"
                  @update:modelValue="
                    handleUpdateModelValue($event, item.field)
                  "
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="cy-form_footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IFormItem } from '../types'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({
      padding: '10px 40px'
    })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
})

const emit = defineEmits(['update:modelValue'])

const handleUpdateModelValue = (value: EventTarget, field: string) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style scoped>
.cy-form {
  padding-top: 18px;
}
</style>
