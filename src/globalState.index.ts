import { atom } from 'recoil'

export const userChoiceState = atom({
  key: 'userChoice',
  default: '',
})

export const winCountState = atom({
  key: 'winCount',
  default: 0,
})

export const loseCountState = atom({
  key: 'loseCount',
  default: 0,
})
