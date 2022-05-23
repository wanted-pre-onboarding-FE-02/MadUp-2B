import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { useRecoil } from 'hooks/state'
import { currentDataState, diffBetweenDataState } from 'recoil/atom'
import { getCurrentData, getDiffData } from 'utils/getDiff'

import styles from './status.module.scss'
import Calendar from 'react-calendar'

const titleKeys = ['ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출']
const initialDate = new Date(dayjs('2022-03-10').format())
const firstDate = new Date(dayjs('2022-02-01').format())
const lastDate = new Date(dayjs('2022-04-20').format())

export const Status = () => {
  const [currentData, setCurrentData] = useRecoil(currentDataState)
  const [diffData, setDiffData] = useRecoil(diffBetweenDataState)
  const [date, setDate] = useState(initialDate)

  useEffect(() => {
    getCurrentData('2022-02-06', '2022-02-10').then((data2) => setCurrentData(data2))
    getDiffData('2022-02-06', '2022-02-10').then((data3) => setDiffData(data3))
  }, [setCurrentData, setDiffData])

  return (
    <section className={styles.statusWrapper}>
      <div className={styles.statusHeader}>
        <h1>대시보드</h1>
        <div>
          <Calendar value={date} maxDate={lastDate} minDate={firstDate} />
          <p>데이트타임 피커가 들어갈 자리</p>
        </div>
      </div>
      {/* <div className={styles.statusInner}>
        <h3>통합 광고 현황</h3>
        <ul className={styles.statusBoard}>
          {Object.entries(currentData).map(([key, value], index) => (
            <li key={`current-${value}`}>
              <dl>
                <dt>{titleKeys[index]}</dt>
                <dd>{value}</dd>
              </dl>
              <dl>
                <dt className={styles.isNotVisible}>diff</dt>
                <dd className={styles.diffValue}>{diffData && diffData[key]?.toLocaleString()}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  )
}
