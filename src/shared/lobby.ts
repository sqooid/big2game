import { ClientGame } from '@/shared/client-game'
import { User } from '@/shared/user'
import { DealOptions } from '@sqooid/big-two'

export interface ClientLobby {
  id: string
  host: User
  players: User[]
  spectators: User[]
  settings: LobbySettings
  game: ClientGame
}

export interface LobbySettings {
  deal: DealOptions
}
