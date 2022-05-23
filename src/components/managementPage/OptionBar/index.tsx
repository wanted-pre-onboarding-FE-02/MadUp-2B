import { ArrowDown } from 'assets/svgs'

import styles from './optionBar.module.scss'

const OptionBar = () => {
  return (
    <div className={styles.option}>
      <button type='button' className={styles.option__dropbar}>
        전체 광고 <ArrowDown className={styles.icon} />
      </button>
      <button type='button' className={styles.option__button}>
        광고 만들기
      </button>
    </div>
  )
}

export default OptionBar
