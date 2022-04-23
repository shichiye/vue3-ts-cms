<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <div class="login-phone_code">
          <el-input v-model="phone.verificationCode" />
          <el-button class="login-phone_code-btn" type="primary"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const phone = reactive({
  number: '',
  verificationCode: ''
})
</script>

<style lang="less" scoped>
.login-phone_code {
  display: flex;
}

.login-phone_code-btn {
  margin-left: 8px;
}
</style>
