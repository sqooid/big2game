import { ClientGame } from '@/client/code/game'
import { LobbySettings } from '@/shared/lobby'
import { ClientSocket } from '@/shared/socket-events'
import { User } from '@/shared/user'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  socket?: ClientSocket
  lobby?: {
    host: User
    players: User[]
    spectators: User[]
    settings: LobbySettings
    game: ClientGame
  }
  clientSettings: {
    theme: 'light' | 'dark'
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const Mutations = {
  SOCKET: 'socket',
  HOST: 'host',
  PLAYERS: 'players',
  SPECTATORS: 'spectators',
  LOBBY_SETTINGS: 'lobbysettings',
  GAME: 'game',
}

export default createStore<State>({
  state: {
    clientSettings: {
      theme: 'light',
    },
  },
  getters: {},
  mutations: {
    [Mutations.SOCKET](state, socket: ClientSocket) {
      state.socket = socket
    },
    [Mutations.HOST](state, host: User) {
      if (!state.lobby) return
      state.lobby.host = host
    },
    [Mutations.PLAYERS](state, players: User[]) {
      if (!state.lobby) return
      state.lobby.players = players
    },
    [Mutations.SPECTATORS](state, spectators: User[]) {
      if (!state.lobby) return
      state.lobby.spectators = spectators
    },
    [Mutations.LOBBY_SETTINGS](state, lobbySettings: LobbySettings) {
      if (!state.lobby) return
      state.lobby.settings = lobbySettings
    },
    [Mutations.GAME](state, game: ClientGame) {
      if (!state.lobby) return
      state.lobby.game = game
    },
  },
  actions: {},
  modules: {},
})
