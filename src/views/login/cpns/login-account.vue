<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="fromRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'

const account = reactive({
  name: '',
  password: ''
})

const fromRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
  fromRef.value?.validate((valid) => {
    if (valid) {
      console.log('真正执行登陆逻辑')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style scoped></style>
