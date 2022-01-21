import { socketConnect } from '@/client/code/socket-connect'
import { startSyncLobby } from '@/client/code/synchronisation'
import storeInstance, { Mutations } from '@/client/store'
import { ClientEmits } from '@/shared/socket-events'

export async function startUser() {
  const store = storeInstance
  if (store.state.socket) store.state.socket.disconnect()
  const socket = socketConnect()
  store.commit(Mutations.SOCKET, socket)
  const name = store.state.name
  socket.emit('client', ClientEmits.CREATE_USER, { name })
}

export async function startLobby() {
  const store = storeInstance
  const socket = store.state.socket
  if (!socket) return
  socket.emit('client', ClientEmits.CREATE_LOBBY)
  startSyncLobby(socket)
}
