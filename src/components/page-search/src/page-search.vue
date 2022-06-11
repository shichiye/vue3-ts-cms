<template>
  <div class="page-search">
    <cy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="page-search_header">高级检索</h1>
      </template>
      <template #footer>
        <div class="page-search_footer">
          <el-button :icon="RefreshLeft">重置</el-button>
          <el-button type="primary" :icon="Search">查询</el-button>
        </div>
      </template>
    </cy-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CyForm from '@/base-ui/form'
import { RefreshLeft, Search } from '@element-plus/icons-vue'

defineProps({
  searchFormConfig: {
    type: Object,
    require: true
  }
})

const formData = ref({
  username: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped>
.page-search_footer {
  text-align: right;
  padding: 0 30px 15px 0;
}
</style>
