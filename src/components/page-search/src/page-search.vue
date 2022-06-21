<template>
  <div class="page-search">
    <cy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="page-search_header">高级检索</h1>
      </template>
      <template #footer>
        <div class="page-search_footer">
          <el-button icon="RefreshLeft" @click="handleReset">重置</el-button>
          <el-button type="primary" icon="Search">查询</el-button>
        </div>
      </template>
    </cy-form>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'
import CyForm from '@/base-ui/form'
import { IForm } from '@/base-ui/form'

const props = defineProps({
  searchFormConfig: {
    type: Object as PropType<IForm>,
    require: true
  }
})

const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: Record<string, string> = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)

const handleReset = () => {
  formData.value = formOriginData
}
</script>

<style scoped>
.page-search_footer {
  text-align: right;
  padding: 0 30px 15px 0;
}
</style>
