<template>
  <div class="user-info">
    <el-dropdown>
      <span class="user-info_dropdown">
        <el-avatar
          :size="30"
          class="user-info_dropdown_avatar"
          src="https://th.bing.com/th/id/R.8daa7ee26391a412a0b0d2b2b6bc7a46?rik=SBMaDD8FCe7YCg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180508%2f8a2bf96052b54dedbbfc4433f7adfe75.jpeg&ehk=jI7dC9niTeEDZCxQV%2fr5JdOOfCpcapYQJeKOZZOujNQ%3d&risl=&pid=ImgRaw&r=0"
        />
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="avatar">用户信息</el-dropdown-item>
          <el-dropdown-item icon="operation">系统管理</el-dropdown-item>
          <el-dropdown-item divided icon="close">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const name = computed(() => store.state.login.userInfo.name)
</script>

<style lang="less" scoped>
.user-info_dropdown {
  cursor: pointer;
  display: flex;
  align-items: center;

  &_avatar {
    margin-right: 10px;
  }
}
</style>
