<template>
  <div class="user">
    <div class="user_search">
      <cy-form v-bind="searchFormConfig" v-model="formData" />
    </div>
    <div class="user_content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

const formData = ref({
  username: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped></style>
