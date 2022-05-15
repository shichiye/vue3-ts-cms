<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

// 获取store
const store = useStore()

const account = reactive({
  name: localCache.getCache('name') || '',
  password: localCache.getCache('password') || ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isRememberPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      if (isRememberPassword) {
        // 本地缓存
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      // 登陆
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style scoped></style>
