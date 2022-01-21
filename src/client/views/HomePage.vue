<template>
  <div class="home-page center-wrapper">
    <n-space vertical>
      <h1 class="name">Big Two</h1>
      <n-space justify="center">
        <n-button @click="onCreate">Create</n-button>
      </n-space>
      <n-space justify="center">
        <n-input-group class="input-group">
          <n-input placeholder="Lobby code" @keydown.enter="onJoin" />
          <n-button @click="onJoin">Join</n-button>
        </n-input-group>
      </n-space>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { createLobby } from '@/client/code/session'
import router from '@/client/router'
import { NSpace, NButton, NInput, NInputGroup } from 'naive-ui'

const onCreate = async () => {
  createLobby()
}

const onJoin = () => {
  console.log('Joining lobby')
}
</script>

<style scoped>
.home-page {
  box-sizing: border-box;
  height: 100%;
}
.center-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.name {
  text-align: center;
}
</style>
