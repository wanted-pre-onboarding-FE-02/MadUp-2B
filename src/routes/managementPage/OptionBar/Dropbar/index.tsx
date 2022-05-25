import { useState, MouseEvent } from 'react'

import styles from './dropbar.module.scss'

import { ArrowIcon } from 'assets/svgs'

interface Prop {
  setSelectOption: (option: string) => void
  selectedOption: string
}

const Dropbar = ({ setSelectOption, selectedOption }: Prop) => {
  const [isDropbarClicked, setIsDropbarClicked] = useState(false)

  const handleDropbar = () => {
    setIsDropbarClicked((prev) => !prev)
  }

  const handleOption = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectOption(e.currentTarget.innerText)
    setIsDropbarClicked(false)
  }

  return (
    <div className={styles.dropbar}>
      <button type='button' className={styles.dropbar__btn} onClick={handleDropbar}>
        {selectedOption} <ArrowIcon className={styles.icon} />
      </button>
      {isDropbarClicked && (
        <ul className={styles.dropbar__list}>
          <li>
            <button type='button' onClick={handleOption}>
              전체 광고
            </button>
          </li>
          <li>
            <button type='button' onClick={handleOption}>
              진행중
            </button>
          </li>
          <li>
            <button type='button' onClick={handleOption}>
              중단됨
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Dropbar
