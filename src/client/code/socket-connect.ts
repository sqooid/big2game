import { ClientSocket } from '@/shared/socket-events'
import { io } from 'socket.io-client'

export function socketConnect(): ClientSocket {
  const host = window.location.hostname
  if (host === 'localhost') return io('http://' + host + ':3000') // For development
  return io()
}
