<template>
  <div class="nav-header">
    <el-icon class="nav-header_icon" @click="handleFoldClick" :size="25">
      <component :is="isFold ? 'Expand' : 'Fold'"></component>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header_icon {
  cursor: pointer;
}
</style>
