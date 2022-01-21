import { Socket } from 'socket.io-client'
import { Socket as SSocket } from 'socket.io'
import { ClientLobby, ClientUser } from '@/shared/interfaces/client-interfaces'

export enum ClientEmits {
  CREATE_USER,
  CREATE_LOBBY,
  JOIN_LOBBY,
}

export enum ServerEmits {
  SYNC_LOBBY,
  SYNC_USER,
}

export interface ServerSyncLobby {
  lobby: Partial<ClientLobby>
}

export interface ServerSyncUser {
  user: ClientUser
}

export interface ServerToClientEvents {
  server: (type: ServerEmits, payload?: any) => void
}

export interface ClientToServerEvents {
  client: (type: ClientEmits, payload?: any) => void
}

export type ClientSocket = Socket<ServerToClientEvents, ClientToServerEvents>
export type ServerSocket = SSocket<ServerToClientEvents, ClientToServerEvents>
