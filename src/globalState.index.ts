import { atom } from 'recoil'

export const userChoiceState = atom({
  key: 'userChoice',
  default: '',
})

export const winCount = atom({
  key: 'winCount',
  default: 0,
})

export const loseCount = atom({
  key: 'loseCount',
  default: 0,
})
