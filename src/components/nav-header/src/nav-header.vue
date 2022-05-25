<template>
  <div class="nav-header">
    <el-icon class="nav-header_icon" @click="handleFoldClick" :size="25">
      <component :is="isFold ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <div class="nav-header_content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserInfo from './user-info.vue'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
}

.nav-header_icon {
  cursor: pointer;
}

.nav-header_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 20px;
}
</style>
