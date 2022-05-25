import { cx } from 'styles'
import { ITrend2DataSet, ITitleDataSet } from 'types/trendDataSet'
import { convertFormat } from 'utils/convertFormat'
import { DownIcon, UpIcon } from 'assets/svgs'

import styles from './listItem.module.scss'

const TITLE_KEYS: ITitleDataSet = {
  imp: '노출 수',
  roas: 'ROAS',
  click: '클릭 수',
  cost: '광고비',
  conv: '전환 수',
  sales: '매출',
}
interface IProps {
  keyword: string
  currData: ITrend2DataSet | undefined
  diffData: ITrend2DataSet | undefined
}

const ListItem = ({ keyword, currData, diffData }: IProps) => {
  const currValue = currData && currData[keyword]
  const diffValue = diffData && diffData[keyword]
  const isUp = diffValue && diffValue > 0

  return (
    <li className={styles.listItem}>
      <dl>
        <dt>{TITLE_KEYS[keyword]}</dt>
        <dd>{convertFormat(currValue, keyword)}</dd>
      </dl>
      <dl>
        <dt className={styles.isNotVisible}>diff</dt>
        <dd className={styles.diffValue}>
          <span className={cx(styles.upAndDown, { [styles.isNotVisible]: !diffValue })}>
            {isUp ? <UpIcon /> : <DownIcon />}
          </span>
          <span className={styles.isNothing}>{!diffValue && '―'}</span>
          {convertFormat(diffValue, keyword)}
        </dd>
      </dl>
    </li>
  )
}

export default ListItem
