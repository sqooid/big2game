import { socketConnect } from '@/client/code/socket-connect'
import { listenLobby, listenUser } from '@/client/code/synchronisation'
import store, { Mutations } from '@/client/store'
import { ClientEmits, ServerEmits } from '@/shared/socket-events'

export async function startUser() {
  if (store.state.socket) store.state.socket.disconnect()
  const socket = socketConnect()
  store.commit(Mutations.SOCKET, socket)
  socket.emit('client', ClientEmits.CREATE_USER)
  listenUser(socket)
}

export async function startLobby() {
  const socket = store.state.socket
  if (!socket) return
  socket.emit('client', ClientEmits.CREATE_LOBBY)
  listenLobby(socket)
}

export async function joinLobby() {
  const socket = store.state.socket
  if (!socket) return
  socket.emit('client', ClientEmits.JOIN_LOBBY)
}
