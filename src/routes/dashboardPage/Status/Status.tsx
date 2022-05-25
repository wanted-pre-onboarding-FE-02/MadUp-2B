import styles from 'styles'
import { InfoList } from './InfoList/InfoList'
import IntergratedAdStatus from './IntergratedAdStatus/IntergratedAdStatus'
import { StatusTop } from './StatusHeader/StatusTop'

export const Status = () => {
  return (
    <div className={styles.statusWrapper}>
      <StatusTop />
      <InfoList />
      <IntergratedAdStatus />
    </div>
  )
}
