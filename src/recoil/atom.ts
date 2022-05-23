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
