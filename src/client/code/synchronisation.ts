import store, { key, Mutations } from '@/client/store'
import { ClientLobby, ClientUser } from '@/shared/interfaces/client-interfaces'
import {
  ClientSocket,
  ServerEmits,
  ServerSyncLobby,
  ServerSyncUser,
} from '@/shared/socket-events'

export function listenLobby(socket: ClientSocket) {
  socket.on('server', (type, payload: ServerSyncLobby) => {
    if (type === ServerEmits.SYNC_LOBBY) {
      updateLobby(payload.lobby)
      console.log(payload.lobby)
    }
  })
}

export function updateLobby(lobby: Partial<ClientLobby>) {
  if (!store.state.lobby) {
    store.commit(Mutations.LOBBY, lobby)
    return
  }
  if (lobby.id) store.commit(Mutations.ID, lobby.id)
  if (lobby.host) store.commit(Mutations.HOST, lobby.host)
  if (lobby.players) store.commit(Mutations.PLAYERS, lobby.players)
  if (lobby.spectators) store.commit(Mutations.SPECTATORS, lobby.spectators)
  if (lobby.settings) store.commit(Mutations.LOBBY_SETTINGS, lobby.settings)
  if (lobby.game) store.commit(Mutations.GAME, lobby.game)
}

export function listenUser(socket: ClientSocket) {
  socket.on('server', (type, payload: ServerSyncUser) => {
    if (type === ServerEmits.SYNC_USER) {
      updateUser(payload.user)
    }
  })
}

export function updateUser(user: Partial<ClientUser>) {
  if (!store.state.user) {
    store.commit(Mutations.USER, user)
    return
  }
  if (user.name) store.commit(Mutations.NAME, user.name)
}
