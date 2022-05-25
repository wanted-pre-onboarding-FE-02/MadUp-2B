import { Suspense } from 'react'
import styles from './media.module.scss'
import PercentColumnChart from './PercentColumnChart'
import Table from './Table'

const Media = () => {
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<div>로딩중...</div>}>
        <PercentColumnChart />
        <Table />
      </Suspense>
    </div>
  )
}
export default Media
