import { socketConnect } from '@/client/code/socket-connect'
import { startSyncLobby } from '@/client/code/synchronisation'
import storeInstance, { Mutations } from '@/client/store'
import { SocketEmitTypes } from '@/shared/socket-events'

export async function createLobby() {
  const socket = socketConnect()
  const store = storeInstance
  store.commit(Mutations.SOCKET, socket)
  socket.emit('general', SocketEmitTypes.CREATE_LOBBY)
  startSyncLobby(socket)
}
