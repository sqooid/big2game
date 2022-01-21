import { BoardPlay, Card } from '@sqooid/big-two'

export interface ClientGame {
  turn: number
  playerIndex: number
  currentPlayerIndex: number
  board: BoardPlay[]
  cards: Card[]
  remainingCardCount: number[]
}
