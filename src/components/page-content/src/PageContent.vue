<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import CyTable from '@/base-ui/table'
import formatUtcString from '@/utils/dateFormat'

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const listData = computed(() =>
  store.getters['system/pageListData'](props.pageName)
)
</script>

<template>
  <div class="page-content">
    <cy-table
      :listData="listData"
      v-bind="contentTableConfig"
      :propList="contentTableConfig.propList"
    >
      <template #headerHandler>
        <el-button type="primary" icon="User" size="small">
          新建{{ contentTableConfig.title }}
        </el-button>
        <el-button icon="Refresh" size="small"> 刷新 </el-button>
      </template>

      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ formatUtcString(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatUtcString(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="user_content_btns">
          <el-button size="small" type="text" icon="Edit">编辑</el-button>
          <el-button size="small" type="text" icon="Delete">删除</el-button>
        </div>
      </template>
    </cy-table>
  </div>
</template>

<style scoped></style>
