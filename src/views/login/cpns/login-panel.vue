<template>
  <div class="login-panel">
    <h1 class="login-panel_title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="login-panel_tab-icon">
              <avatar />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="login-panel_tab-icon"><cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="login-panel_account-control">
      <el-checkbox v-model="isRememberPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button
      type="primary"
      class="login-panel_login-btn"
      @click="handleLoginClick"
      >立即登陆</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Avatar, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

const isRememberPassword = ref(true)

const accountRef = ref<InstanceType<typeof LoginAccount>>()

const handleLoginClick = () => {
  console.log('立即登陆')
  accountRef.value?.loginAction()
}
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
}

.login-panel_title {
  text-align: center;
}

.login-panel_tab-icon {
  vertical-align: middle;
  margin-right: 3px;
  margin-bottom: 3px;
}

.login-panel_account-control {
  display: flex;
  justify-content: space-between;
}

.login-panel_login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
