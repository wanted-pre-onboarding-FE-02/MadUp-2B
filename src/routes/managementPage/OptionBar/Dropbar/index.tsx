import { useState, useRef, MouseEvent } from 'react'

import useOnClickOutside from 'hooks/useOnClickOutside'

import styles from './dropbar.module.scss'

import { ArrowIcon } from 'assets/svgs'

interface Prop {
  setSelectOption: (option: string) => void
  selectedOption: string
}

const Dropbar = ({ setSelectOption, selectedOption }: Prop) => {
  const [isDropbarClicked, setIsDropbarClicked] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropbar = () => {
    setIsDropbarClicked((prev) => !prev)
  }

  useOnClickOutside(dropdownRef, () => setIsDropbarClicked(false))

  const handleOption = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectOption(e.currentTarget.innerText)
    setIsDropbarClicked(false)
  }

  return (
    <div className={styles.dropbar} ref={dropdownRef}>
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
