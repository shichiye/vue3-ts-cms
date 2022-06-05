<template>
  <div class="nav-header">
    <el-icon class="nav-header_icon" @click="handleFoldClick" :size="25">
      <component :is="isFold ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <div class="nav-header_content">
      <cy-breadcrumb :breadcrumbs="breadcrumbs"></cy-breadcrumb>
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import UserInfo from './user-info.vue'
import CyBreadcrumb from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapToBreadcrumbs } from '@/utils/map-menus'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const store = useStore()

const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = useRoute().path
  return pathMapToBreadcrumbs(userMenus, currentPath)
})
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
