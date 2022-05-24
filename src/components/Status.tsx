import { useEffect, useState, useRef } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'

import { useRecoil } from 'hooks/state'
import { currentDataState, diffBetweenDataState } from 'recoil/atom'
import { getCurrentData, getDiffData } from 'utils/getDiff'

import { ArrowIcon } from 'assets/svgs/index'
import styles from './status.module.scss'
import 'react-datepicker/src/stylesheets/datepicker.scss'

const titleKeys = ['ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출']

export const Status = () => {
  const dayPickerRef = useRef<HTMLDivElement>(null)

  const [startDate, setStartDate] = useState<Date | null>(new Date('2021-02-01'))
  const [endDate, setEndDate] = useState<Date | null>(new Date('2021-02-03'))
  const [currentData, setCurrentData] = useRecoil(currentDataState)
  const [diffData, setDiffData] = useRecoil(diffBetweenDataState)
  const [isVisible, setIsVisible] = useState(false)

  const formatStartDate = dayjs(startDate).format('YYYY-MM-DD')
  const formatEndDate = dayjs(endDate).format('YYYY-MM-DD')

  const handleDatePicker = () => {
    setIsVisible((prev) => !prev)
  }

  const handleDateChange = (dates: [React.SetStateAction<Date | null>, React.SetStateAction<Date | null>]): void => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  const handleClickOutside = (event: React.BaseSyntheticEvent | MouseEvent): void => {
    if (dayPickerRef.current != null) {
      const target = event.target as HTMLButtonElement
      if (isVisible && !dayPickerRef.current.contains(target)) {
        setIsVisible(false)
      }
    }
  }

  useEffect(() => {
    if (isVisible) document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    getCurrentData(formatStartDate, formatEndDate).then((data2) => setCurrentData(data2))
    getDiffData(formatStartDate, formatEndDate).then((data3) => setDiffData(data3))
  }, [formatEndDate, setCurrentData, setDiffData, formatStartDate])

  return (
    <section className={styles.statusWrapper}>
      <div className={styles.statusHeader}>
        <h1>대시보드</h1>
      </div>
      <div className={styles.statusInner}>
        <div className={styles.datePicker}>
          <h3>통합 광고 현황</h3>
          <button type='button' onClick={handleDatePicker}>
            {dayjs(formatStartDate).format('YYYY년 MM월 DD일')} ~ {dayjs(formatEndDate).format('YYYY년 MM월 DD일')}
            <ArrowIcon className={styles.icon} />
          </button>
          {isVisible && (
            <div className={styles.pickerWrap} ref={dayPickerRef}>
              <DatePicker
                minDate={new Date('2021-02-01')}
                maxDate={new Date('2021-04-20')}
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
            </div>
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
