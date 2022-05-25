import styles from 'styles'
import { InfoList } from './InfoList/InfoList'
import IntergratedAdStatus from './IntergratedAdStatus/IntergratedAdStatus'
import { StatusTop } from './StatusHeader/StatusTop'
// {} ??, index로
export const Status = () => {
  return (
    // ContentBox 사용
    <div className={styles.statusWrapper}>
      <StatusTop />
      <InfoList />
      <IntergratedAdStatus />
    </div>
  )
}
