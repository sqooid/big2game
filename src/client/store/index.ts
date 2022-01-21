import {
  ClientGame,
  ClientLobby,
  LobbySettings,
  ClientUser,
} from '@/shared/interfaces/client-interfaces'
import { ClientSocket } from '@/shared/socket-events'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  socket?: ClientSocket
  name: string
  lobby?: ClientLobby
  clientSettings: {
    theme: 'light' | 'dark'
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const Mutations = {
  NAME: 'name',
  LOBBY: 'lobby',
  ID: 'id',
  SOCKET: 'socket',
  HOST: 'host',
  PLAYERS: 'players',
  SPECTATORS: 'spectators',
  LOBBY_SETTINGS: 'lobbysettings',
  GAME: 'game',
  THEME: 'theme',
}

export default createStore<State>({
  state: {
    name: 'Jimmy',
    clientSettings: {
      theme: 'light',
    },
  },
  getters: {},
  mutations: {
    [Mutations.NAME](state, name: string) {
      state.name = name
    },
    [Mutations.LOBBY](state, lobby: ClientLobby) {
      state.lobby = lobby
    },
    [Mutations.ID](state, id: string) {
      if (!state.lobby) return
      state.lobby.id = id
    },
    [Mutations.SOCKET](state, socket: ClientSocket) {
      state.socket = socket
    },
    [Mutations.HOST](state, host: ClientUser) {
      if (!state.lobby) return
      state.lobby.host = host
    },
    [Mutations.PLAYERS](state, players: ClientUser[]) {
      if (!state.lobby) return
      state.lobby.players = players
    },
    [Mutations.SPECTATORS](state, spectators: ClientUser[]) {
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
    [Mutations.THEME](state, theme: 'light' | 'dark') {
      state.clientSettings.theme = theme
    },
  },
  actions: {},
  modules: {},
})
