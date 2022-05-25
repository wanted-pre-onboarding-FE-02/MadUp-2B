import Dropbar from './Dropbar'

import styles from './optionBar.module.scss'

interface Prop {
  setSelectOption: (option: string) => void
  selectedOption: string
}

const OptionBar = ({ setSelectOption, selectedOption }: Prop) => {
  return (
    <div className={styles.option}>
      <Dropbar setSelectOption={setSelectOption} selectedOption={selectedOption} />
      <button type='button' className={styles.option__button}>
        광고 만들기
      </button>
    </div>
  )
}

export default OptionBar
