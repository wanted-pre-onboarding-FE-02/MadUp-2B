import { atom } from 'recoil'
import { IDailyData, IDiffData, IEmptyData } from 'types/advertise'

export const diffBetweenDataState = atom<IDiffData | IEmptyData>({
  key: '#diffBetweenData',
  default: {},
})

export const currentDataState = atom<IDailyData | IEmptyData>({
  key: '#currentData',
  default: {},
})

export const pickedStartDateState = atom<string>({
  key: '#pickedStartDateState',
  default: '2022-03-01',
})

export const pickedEndDateState = atom<string | null>({
  key: '#pickedEndDateState',
  default: '2022-03-04',
})
