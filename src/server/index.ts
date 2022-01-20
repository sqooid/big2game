import { SocketEvent } from '@shared/socket-events'
import dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const workingDir = process.env.WORKING_DIR ?? '.'
process.chdir(workingDir)
app.use(express.static(workingDir)) // Fix working root directory

app.get('/', (req, res) => {
  console.log('Page served')
  res.sendFile(process.cwd() + '/client/index.html')
})

io.on(SocketEvent.CONNECTION, (socket: any) => {
  console.log('Client connected')

  socket.on(SocketEvent.DISCONNECT, () => {
    console.log('Client disconnected')
  })
})

const port = process.env.PORT
server.listen(port, () => {
  console.log('Listening on port', port)
})
