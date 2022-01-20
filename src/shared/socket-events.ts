import { Socket } from 'socket.io-client'
import { Socket as SSocket } from 'socket.io'

export interface ServerToClientEvents {
  ping: () => void
}

export interface ClientToServerEvents {
  ping: () => void
}

export type ClientSocket = Socket<ServerToClientEvents, ClientToServerEvents>
export type ServerSocket = SSocket<ServerToClientEvents, ClientToServerEvents>
