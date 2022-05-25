import { DownIcon, UpIcon } from 'assets/svgs'
import { useRecoilValue } from 'recoil'
import { diffBetweenDataState } from 'recoil/atom'
import { TITLE_KEYS } from 'recoil/statusValue'
import { cx } from 'styles'
import { convertFormat } from 'utils/convertFormat'

import styles from './listItem.module.scss'

interface IProps {
  index: number
  keyword: string
  value: number | string | undefined
}

export const ListItem = ({ index, keyword, value }: IProps) => {
  const diffData = useRecoilValue(diffBetweenDataState)
  const notEmptyDiffData = diffData && diffData[keyword]
  const isUp = notEmptyDiffData && notEmptyDiffData > 0

  return (
    <li className={styles.listItem}>
      <dl>
        <dt>{TITLE_KEYS[index]}</dt>
        <dd>{convertFormat(value, keyword)}</dd>
      </dl>
      <dl>
        <dt className={styles.isNotVisible}>diff</dt>
        <dd className={styles.diffValue}>
          <span className={cx(styles.upAndDown, { [styles.isNotVisible]: !diffData[keyword] })}>
            {isUp ? <UpIcon /> : <DownIcon />}
          </span>
          <span className={styles.isNothing}>{!diffData[keyword] && '―'}</span>
          {diffData && convertFormat(diffData[keyword], keyword)}
        </dd>
      </dl>
    </li>
  )
}
