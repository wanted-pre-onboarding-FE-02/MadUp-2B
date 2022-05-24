import styles from './media.module.scss'
import PercentColumnChart from './PercentColumnChart'
import Table from './Table'

const Media = () => {
  return (
    <div className={styles.wrapper}>
      <PercentColumnChart />
      <Table />
    </div>
  )
}
export default Media
