import { useRecoilState, useRecoilValue } from 'recoil'
import {
  dropdownFirstMenuState,
  dropdownSecondMenuState,
  dropdownThirdMenuState,
  drowdownMenuListState,
  selectDayAndWeekState,
} from 'recoil/recoil.state'

import InterChart from 'routes/dashboardPage/Status/IntergratedAdStatus/InterChart/InterChart'
import DropDown from 'routes/dashboardPage/Status/IntergratedAdStatus/DropDown/DropDown'

import styles from './intergratedAdStatus.module.scss'

const IntergratedAdStatus = () => {
  const [firstMenuState, setFirstMenuState] = useRecoilState(dropdownFirstMenuState)
  const [secondMenuState, setSecondMenuState] = useRecoilState(dropdownSecondMenuState)
  const [thirdMenuState, setThirdMenuState] = useRecoilState(dropdownThirdMenuState)
  const DrowdownMenuListState = useRecoilValue(drowdownMenuListState)
  const SelectDayAndWeekState = useRecoilValue(selectDayAndWeekState)

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdownSelectBar}>
        <DropDown
          menuList={DrowdownMenuListState}
          currentOption={firstMenuState}
          changeCurrentMenu={setFirstMenuState}
        />

        <DropDown
          menuList={DrowdownMenuListState}
          option='선택사항 없음'
          currentOption={secondMenuState}
          changeCurrentMenu={setSecondMenuState}
        />
        <div className={styles.justpadding} />

        <DropDown
          menuList={SelectDayAndWeekState}
          currentOption={thirdMenuState}
          changeCurrentMenu={setThirdMenuState}
        />
      </div>
      <div className={styles.chart}>
        <InterChart firstMenuState={firstMenuState} secondMenuState={secondMenuState} thirdMenuState={thirdMenuState} />
      </div>
    </div>
  )
}
export default IntergratedAdStatus
