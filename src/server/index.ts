import {
  ClientSocket,
  ClientToServerEvents,
  ServerSocket,
  ServerToClientEvents,
} from '@/shared/socket-events'
import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server<ServerToClientEvents, ClientToServerEvents>(server, {
  serveClient: false,
  cors: {
    origin: ['http://localhost:8080'],
  },
})

const workingDir = process.env.WORKING_DIR ?? '.'
process.chdir(workingDir)
app.use(express.static(workingDir)) // Fix working root directory

app.get('/', (req, res) => {
  console.log('Page served')
  res.sendFile(process.cwd() + '/client/index.html')
})

io.on('connection', (socket) => {
  console.log('Client connected')

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

const port = process.env.SERVER_PORT || 80
server.listen(port, () => {
  console.log('Listening on port', port)
})
