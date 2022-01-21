import storeInstance, { key, Mutations } from '@/client/store'
import { ClientLobby } from '@/shared/interfaces/client-interfaces'
import { ClientSocket, ServerEmits } from '@/shared/socket-events'

export function startSyncLobby(socket: ClientSocket) {
  socket.on('server', (type, payload) => {
    if (type === ServerEmits.SYNC_LOBBY) {
      updateLobby(payload.lobby)
    }
  })
}

export function updateLobby(lobby: Partial<ClientLobby>) {
  console.log('Updated lobby', lobby)
  const store = storeInstance
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
