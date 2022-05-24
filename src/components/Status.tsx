import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { DateRange, DayPicker } from 'react-day-picker'

import { useRecoil } from 'hooks/state'
import { currentDataState, diffBetweenDataState } from 'recoil/atom'
import { getCurrentData, getDiffData } from 'utils/getDiff'

import styles from './status.module.scss'
import 'react-day-picker/dist/style.css'

const titleKeys = ['ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출']

const firstDate = new Date('2022-02-01')
const lastDate = new Date('2022-04-20')

const initialRange = { from: new Date('2022-03-01'), to: new Date('2022-03-04') }

export const Status = () => {
  const [currentData, setCurrentData] = useRecoil(currentDataState)
  const [diffData, setDiffData] = useRecoil(diffBetweenDataState)
  const [range, setRange] = useState<DateRange | undefined>(initialRange)
  const [isVisible, setIsVisible] = useState(false)

  const startDate = dayjs(range?.from).format('YYYY-MM-DD')
  const endDate = dayjs(range?.to).format('YYYY-MM-DD')

  const handleDatePicker = () => {
    setIsVisible((prev) => !prev)
  }

  useEffect(() => {
    getCurrentData(startDate, endDate).then((data2) => setCurrentData(data2))
    getDiffData(startDate, endDate).then((data3) => setDiffData(data3))
  }, [endDate, setCurrentData, setDiffData, startDate])

  return (
    <section className={styles.statusWrapper}>
      <div className={styles.statusHeader}>
        <h1>대시보드</h1>
      </div>
      <div className={styles.statusInner}>
        <div className={styles.datePicker}>
          <h3>통합 광고 현황</h3>
          <button type='button' onClick={handleDatePicker}>
            {startDate} ~ {endDate}
          </button>
          {isVisible && (
            <DayPicker
              mode='range'
              min={1}
              max={5}
              selected={range}
              onSelect={setRange}
              fromDate={firstDate}
              toDate={lastDate}
              className={styles.picker}
            />
          )}
        </div>
        <ul className={styles.statusBoard}>
          {Object.entries(currentData).map(([key, value], index) => (
            <li key={`current-${value}`}>
              <dl>
                <dt>{titleKeys[index]}</dt>
                <dd>{value?.toLocaleString()}</dd>
              </dl>
              <dl>
                <dt className={styles.isNotVisible}>diff</dt>
                <dd className={styles.diffValue}>{diffData && diffData[key]?.toLocaleString()}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
