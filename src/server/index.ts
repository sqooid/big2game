import { handleClientEvent } from '@/server/event-handler'
import { createUser } from '@/server/maps'
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '@/shared/socket-events'
import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

dotenv.config()

const app = express()
const server = http.createServer(app)
export const io = new Server(server, {
  serveClient: false,
  cors: {
    origin: ['http://localhost:8080'],
  },
})

const workingDir = process.env.WORKING_DIR ?? '../client'
process.chdir(workingDir)
app.use(express.static(workingDir)) // Fix working root directory

app.get('/', (req, res) => {
  console.log('Page served')
  res.sendFile(process.cwd() + '/index.html')
})

io.on('connection', (socket) => {
  console.log('Client connected')

  socket.on('client', (type, payload) => {
    handleClientEvent(socket.id, type, payload)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

const port = process.env.SERVER_PORT || 80
server.listen(port, () => {
  console.log('Listening on port', port)
})
