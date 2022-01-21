import { Socket } from 'socket.io-client'
import { Socket as SSocket } from 'socket.io'

export enum SocketEmitTypes {
  CREATE_LOBBY,
  SYNC_LOBBY,
}

export interface ServerToClientEvents {
  ping: () => void
  general: (type: SocketEmitTypes, payload?: any) => void
}

export interface ClientToServerEvents {
  ping: () => void
  general: (type: SocketEmitTypes, payload?: any) => void
}

export type ClientSocket = Socket<ServerToClientEvents, ClientToServerEvents>
export type ServerSocket = SSocket<ServerToClientEvents, ClientToServerEvents>
