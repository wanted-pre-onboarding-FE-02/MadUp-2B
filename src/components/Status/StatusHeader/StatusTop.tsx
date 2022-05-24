import { useEffect } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import dayjs from 'dayjs'

import { currentDataState, diffBetweenDataState, pickedEndDateState, pickedStartDateState } from 'recoil/atom'
import { FIRST_DATE, LAST_DATE } from 'recoil/statusValue'
import { useRecoil } from 'hooks/state'
import { getCurrentData, getDiffData } from 'utils/getDiff'

import styles from './statusTop.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

export const StatusTop = () => {
  const [, setCurrentData] = useRecoil(currentDataState)
  const [, setDiffData] = useRecoil(diffBetweenDataState)
  const [startDate, setStartDate] = useRecoil(pickedStartDateState)
  const [endDate, setEndDate] = useRecoil(pickedEndDateState)

  const START_DATE = new Date(startDate)
  const END_DATE = endDate ? new Date(endDate) : null

  const handleSelectDate = (dates: any) => {
    const [start, end] = dates
    const translatedStart = dayjs(start).format('YYYY-MM-DD')
    const translatedEnd = end && dayjs(end).format('YYYY-MM-DD')
    setStartDate(translatedStart)
    setEndDate(translatedEnd)
  }

  useEffect(() => {
    if (!startDate || !endDate) return
    getCurrentData(startDate, endDate).then((currData) => setCurrentData(currData))
    getDiffData(startDate, endDate).then((differData) => setDiffData(differData))
    registerLocale('ko', ko)
  }, [endDate, setCurrentData, setDiffData, startDate])

  return (
    <div className={styles.statusHeader}>
      <h1>대시보드</h1>
      <div className={styles.datePicker}>
        <ReactDatePicker
          dateFormat='yyyy년 MM월 dd일'
          onChange={handleSelectDate}
          minDate={FIRST_DATE}
          maxDate={LAST_DATE}
          startDate={START_DATE}
          endDate={END_DATE}
          selectsRange
        />
      </div>
    </div>
  )
}
