import Dropdown from 'components/Dropdown'
import styles from './optionBar.module.scss'

const TEXT_LIST = ['전체 광고', '진행중', '중단됨']

const OptionBar = () => {
  return (
    <div className={styles.option}>
      <Dropdown list={TEXT_LIST} />
      <button type='button' className={styles.option__button}>
        광고 만들기
      </button>
    </div>
  )
}

export default OptionBar
