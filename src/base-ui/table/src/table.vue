<template>
  <div class="cy-table">
    <div class="cy-table_header">
      <slot name="header">
        <div class="cy-table_header_title">{{ title + '列表' }}</div>
        <div class="cy-table_header_handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border @selection-change="handleSelectionChange">
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      >
      </el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="cy-table_footer">
      <slot name="footer">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const emit = defineEmits(['selectionChange'])

defineProps({
  title: {
    type: String,
    defautl: ''
  },
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array as PropType<any[]>,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  }
})

const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
</script>

<style scoped lang="less">
.cy-table_header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
}

.cy-table_header_title {
  font-size: 20px;
  font-weight: 700;
}

.cy-table_header_handler {
  align-items: center;
}

.cy-table_footer {
  margin-top: 15px;

  display: flex;

  justify-content: flex-end;
}
</style>
