import { useEffect, useRef, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import dayjs from 'dayjs'

import { pickedEndDateState, pickedStartDateState } from 'recoil/atom'
import { FIRST_DATE, LAST_DATE } from 'recoil/statusValue'
import { useRecoil } from 'hooks/state'
import { ArrowIcon } from 'assets/svgs'

import styles from './dashBoard.module.scss'
import 'react-datepicker/dist/react-datepicker.css'

const DashBoardHeader = () => {
  const [startDate, setStartDate] = useRecoil(pickedStartDateState)
  const [endDate, setEndDate] = useRecoil(pickedEndDateState)

  const [isVisible, setIsVisible] = useState(false)
  const dayPickerRef = useRef<HTMLDivElement>(null)

  const START_DATE = new Date(startDate)
  const END_DATE = endDate ? new Date(endDate) : null

  const END_STRING = endDate === null ? '' : dayjs(endDate).format('YYYY년 MM월 DD일')

  const handleDatePicker = () => {
    setIsVisible((prev) => !prev)
  }

  const handleSelectDate = (dates: any) => {
    const [start, end] = dates
    const translatedStart = dayjs(start).format('YYYY-MM-DD')
    const translatedEnd = end && dayjs(end).format('YYYY-MM-DD')
    setStartDate(translatedStart)
    setEndDate(translatedEnd)

    if (start && end) {
      setIsVisible((prev) => !prev)
    }
  }

  useEffect(() => {
    if (!startDate || !endDate) return
    registerLocale('ko', ko)
  }, [endDate, startDate])

  return (
    <div className={styles.statusHeader}>
      <h1>대시보드</h1>
      <div className={styles.datePicker}>
        <button type='button' onClick={handleDatePicker}>
          {dayjs(startDate).format('YYYY년 MM월 DD일')} ~ {END_STRING}
          <ArrowIcon className={styles.icon} />
        </button>
        {isVisible && (
          <div className={styles.pickerWrap} ref={dayPickerRef}>
            <DatePicker
              minDate={FIRST_DATE}
              maxDate={LAST_DATE}
              selected={START_DATE}
              onChange={handleSelectDate}
              startDate={START_DATE}
              endDate={END_DATE}
              selectsRange
              inline
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default DashBoardHeader
