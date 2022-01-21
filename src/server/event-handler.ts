import { sendLobby } from '@/server/send'
import { createLobby, createUser, userMap } from '@/server/maps'
import { ClientEmits } from '@/shared/socket-events'
import { generateName } from '@/server/utils'

export function handleClientEvent(
  socketId: string,
  type: ClientEmits,
  payload?: any,
) {
  switch (type) {
    case ClientEmits.CREATE_USER:
      {
        const name = payload?.name ?? generateName()
        createUser(socketId, name)
      }
      break
    case ClientEmits.CREATE_LOBBY:
      {
        const host = userMap.get(socketId)
        if (!host) return
        const newLobby = createLobby(host)
        console.log('New lobby created')
        host.lobby = newLobby
        sendLobby(host)
      }
      break
  }
}
