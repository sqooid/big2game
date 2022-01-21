import { Socket } from 'socket.io-client'
import { Socket as SSocket } from 'socket.io'
import { ClientLobby } from '@/shared/interfaces/client-interfaces'

export enum ClientEmits {
  CREATE_USER,
  CREATE_LOBBY,
}

export interface CreateUserPayload {
  name: string
}

export enum ServerEmits {
  SYNC_LOBBY,
}

export interface SyncLobbyPayload {
  lobby: Partial<ClientLobby>
}

export interface ServerToClientEvents {
  server: (type: ServerEmits, payload?: any) => void
}

export interface ClientToServerEvents {
  client: (type: ClientEmits, payload?: any) => void
}

export type ClientSocket = Socket<ServerToClientEvents, ClientToServerEvents>
export type ServerSocket = SSocket<ServerToClientEvents, ClientToServerEvents>
