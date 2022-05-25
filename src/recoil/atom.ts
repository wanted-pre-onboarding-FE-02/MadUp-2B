import { atom, selector } from 'recoil'

export const pickedStartDateState = atom<string>({
  key: '#pickedStartDateState',
  default: '2022-03-01',
})

export const middleWareEndDataState = atom<string | null>({
  key: '#middleWareEndDataState',
  default: '2022-03-04',
})

export const pickedEndDateState = atom<string | null>({
  key: '#pickedEndDateState',
  default: '2022-03-04',
})
