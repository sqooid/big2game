import { LobbySettings } from '@/shared/lobby'
import { User } from '@/shared/user'
import { Game } from '@sqooid/big-two'

export interface ServerLobby {
  host: User
  players: User[]
  spectators: User[]
  settings: LobbySettings
  game: Game
}
