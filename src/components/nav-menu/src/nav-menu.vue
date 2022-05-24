<template>
  <div class="nav-menu">
    <div class="nav-menu_head">
      <img
        class="nav-menu_head_logo"
        :class="{ 'nav-menu_head_logo--expand': !collapse }"
        src="@/assets/img/logo.svg"
        alt="logo"
      />
      <span v-if="!collapse" class="nav-menu_head_title">Vue3+TS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      :collapse="collapse"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="handleIconString(item.icon)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">
                {{ subItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type == 2">
          <el-menu-item :index="item.id + ''">
            <el-icon> </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const store = useStore()

const userMenus = computed(() => store.state.login.userMenus)

const handleIconString = (icon: string) => {
  return icon.substring(8)
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  &_head {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: center;
    align-items: center;

    &_logo {
      height: 100%;

      &--expand {
        margin-right: 8px;
      }
    }

    &_title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin-left: 8px;
    }
  }
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :deep(.el-submenu__title) {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}

:deep(.el-sub-menu__title) {
  padding: 0px 16px !important;
}
</style>
