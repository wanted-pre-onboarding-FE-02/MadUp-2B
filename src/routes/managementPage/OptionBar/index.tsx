import Dropbar from './Dropbar'

import styles from './optionBar.module.scss'

const OptionBar = () => {
  return (
    <div className={styles.option}>
      <Dropbar />
      <button type='button' className={styles.option__button}>
        광고 만들기
      </button>
    </div>
  )
}

export default OptionBar
