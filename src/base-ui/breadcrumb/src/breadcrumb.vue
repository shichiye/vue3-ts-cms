<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <template v-if="item.path">
          <el-breadcrumb-item :to="{ path: item.path }">
            {{ item.name }}
          </el-breadcrumb-item>
        </template>
        <template v-else>
          <el-breadcrumb-item>
            {{ item.name }}
          </el-breadcrumb-item>
        </template>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IBreadcrumb } from '../types'

defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style scoped></style>
