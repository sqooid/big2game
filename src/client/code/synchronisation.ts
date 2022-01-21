import storeInstance, { key, Mutations } from '@/client/store'
import { ClientLobby } from '@/shared/lobby'
import { ClientSocket, SocketEmitTypes } from '@/shared/socket-events'

export function startSyncLobby(socket: ClientSocket) {
  socket.on('general', (type, payload: ClientLobby) => {
    if (type === SocketEmitTypes.SYNC_LOBBY) updateLobby(payload)
  })
}

export function updateLobby(info: ClientLobby) {
  const store = storeInstance
  if (info.id) store.commit(Mutations.ID, info.id)
  if (info.host) store.commit(Mutations.HOST, info.host)
  if (info.players) store.commit(Mutations.PLAYERS, info.players)
  if (info.spectators) store.commit(Mutations.SPECTATORS, info.spectators)
  if (info.settings) store.commit(Mutations.LOBBY_SETTINGS, info.settings)
  if (info.game) store.commit(Mutations.GAME, info.game)
}
