import { useRecoil } from 'hooks/state'
import { currentDataState } from 'recoil/atom'
import styles from './infoList.module.scss'
import { ListItem } from './ListItem'

export const InfoList = () => {
  const [currentData] = useRecoil(currentDataState)
  return (
    <div className={styles.statusInner}>
      <h3>통합 광고 현황</h3>
      <ul className={styles.statusBoard}>
        {currentData &&
          Object.entries(currentData).map(([key, value], index) => (
            <ListItem key={`currnet-${value}`} index={index} keyword={key} value={value} />
          ))}
      </ul>
    </div>
  )
}
