import { atom } from 'recoil'

export const pickedStartDateState = atom<string>({
  key: '#pickedStartDateState',
  default: '2022-03-01',
})

export const pickedEndDateState = atom<string | null>({
  key: '#pickedEndDateState',
  default: '2022-03-04',
})

export const optionState = atom<string>({
  key: '#option',
  default: '전체 광고',
})
