<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-global-style />
    <n-card>
      <n-button>Hello</n-button>
    </n-card>
  </n-config-provider>
</template>

<script lang="ts" setup>
import './styles.css'
import { useStore } from 'vuex'

import {
  NButton,
  NCard,
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
  if (store.state.theme === 'light') return null
  return darkTheme
})
</script>

<style scoped></style>
