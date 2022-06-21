<template>
  <div class="role">
    <div class="role_search">
      <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    </div>
    <div class="role_content">
      <PageContent
        :contentTableConfig="contentTableConfig"
        :pageName="pageName"
      ></PageContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

const pageName = 'role'
</script>

<style scoped>
.role_content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
