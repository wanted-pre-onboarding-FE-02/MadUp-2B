import { atom } from 'recoil'

export const optionState = atom<string>({
  key: '#option',
  default: '전체 광고',
})
