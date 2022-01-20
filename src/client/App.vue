<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-global-style />
    <router-view v-slot="{ Component }">
      <transition name="fade-left" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </n-config-provider>
</template>

<script lang="ts" setup>
import './styles.css'
import { useStore } from 'vuex'

import {
  darkTheme,
  GlobalThemeOverrides,
  NConfigProvider,
  NGlobalStyle,
} from 'naive-ui'

import { key } from '@/client/store'
import { computed } from 'vue'

const store = useStore(key)

const themeOverrides: GlobalThemeOverrides = {}

// Theme management
const theme = computed(() => {
  if (store.state.clientSettings.theme === 'light') return null
  return darkTheme
})
</script>

<style scoped></style>
