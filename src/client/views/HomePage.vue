<template>
  <div class="home-page center-wrapper">
    <n-space vertical>
      <h1 class="name">Big Two</h1>
      <n-space justify="center">
        <n-input placeholder="Player name" @change="onChangeName" />
      </n-space>
      <n-space justify="center">
        <n-button @click="onCreate">Create</n-button>
      </n-space>
      <n-space justify="center">
        <n-input-group class="input-group">
          <n-input
            v-model:value="joinId"
            placeholder="Lobby code"
            @keydown.enter="onJoin" />
          <n-button @click="onJoin">Join</n-button>
        </n-input-group>
      </n-space>
      <n-switch :on-update:value="onSwitchTheme"></n-switch>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { startLobby, startUser } from '@/client/code/session'
import router from '@/client/router'
import { key, Mutations } from '@/client/store'
import { NSpace, NButton, NInput, NInputGroup, NSwitch } from 'naive-ui'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore(key)

const playerName = computed(() => {
  return store.state.name
})

watch(
  () => store.state.lobby?.id || '',
  (id) => {
    if (!id) return
    router.push({ name: 'lobby', params: { id } })
  },
)

const onChangeName = (name: string) => {
  console.log('Hello', name)
  store.commit(Mutations.NAME, name)
}

const onCreate = async () => {
  startUser()
  startLobby()
}

const joinId = ref('')
const onJoin = () => {
  router.push({ name: 'lobby', params: { id: joinId.value } })
}

const onSwitchTheme = (value: boolean) => {
  if (value) store.commit(Mutations.THEME, 'dark')
  else store.commit(Mutations.THEME, 'light')
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
