import { SocketEmitTypes } from '@/shared/socket-events'

export function handleClientEvent(type: SocketEmitTypes, payload: any) {
  switch (type) {
    case SocketEmitTypes.CREATE_LOBBY:
      console.log('Lobby creation requested')
      break
  }
}
