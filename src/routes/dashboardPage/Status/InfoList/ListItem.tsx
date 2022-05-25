import { DownIcon, UpIcon } from 'assets/svgs'
import { useRecoil } from 'hooks/state'
import { pickedEndDateState, pickedStartDateState } from 'recoil/atom'
import { TITLE_KEYS } from 'recoil/statusValue'
import { cx } from 'styles'
import { ITrend2DataSet } from 'types/trendDataSet'
import { convertFormat } from 'utils/convertFormat'
import { getDiffData } from './getTransformedData'

import styles from './listItem.module.scss'

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
