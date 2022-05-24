import { atom, selector } from 'recoil'

export const dropdownFirstMenuState = atom<string>({
  key: 'dropdownFirstMenuState',
  default: 'ROAS',
})

export const dropdownSecondMenuState = atom<string>({
  key: 'dropdownSecondMenuState',
  default: '선택사항 없음',
})

export const dropdownThirdMenuState = atom<string>({
  key: 'dropdownThirdMenuState',
  default: '주간',
})

const drowdownMenuList = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출', '선택사항 없음']
const selectDayAndWeek = ['주간', '일별']

export const drowdownMenuListState = selector<string[]>({
  key: 'drowdownMenuListState',
  get: ({ get }) => {
    const first = get(dropdownFirstMenuState)
    const second = get(dropdownSecondMenuState)
    const filterd = drowdownMenuList.filter((item) => item !== first && item !== second)
    return filterd
  },
})

export const selectDayAndWeekState = selector<string[]>({
  key: 'selectDayAndWeekState',
  get: ({ get }) => {
    const TimeType = get(dropdownThirdMenuState)
    const filterd = selectDayAndWeek.filter((item) => item !== TimeType)
    return filterd
  },
})
