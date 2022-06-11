<template>
  <div class="user">
    <div class="user_search">
      <page-search :searchFormConfig="searchFormConfig"></page-search>
    </div>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
</script>

<style scoped></style>
