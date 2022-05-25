import { useState, useRef } from 'react'

import { useRecoilState } from 'recoil'
import { optionState } from 'recoil/atom'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { ArrowIcon } from 'assets/svgs/index'
import styles from './dropdown.module.scss'

const Dropdown = (props: any) => {
  const { list } = props
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectOption, setSelectOption] = useState<string>(list[0])
  const [, setSelectedOption] = useRecoilState(optionState)
  const [dropdownClick, setDropdownClick] = useState(false)

  const handleDropdownClick = () => {
    setDropdownClick((prev) => !prev)
  }

  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetText = (event.target as HTMLElement).textContent
    if (list.length === 3) {
      setSelectedOption(targetText as string)
    }
    setSelectOption(targetText as string)
    setDropdownClick(false)
  }

  useOnClickOutside(dropdownRef, () => setDropdownClick(false))

  return (
    <div className={styles.dropdownWrap} ref={dropdownRef}>
      <button type='button' className={styles.dropdown} onClick={handleDropdownClick}>
        {selectOption}
        <ArrowIcon className={styles.arrowIcon} />
      </button>
      <ul className={styles.dropdownListWrap} style={dropdownClick ? { display: 'block' } : { display: 'none' }}>
        {list.map((text: string, i: number) => {
          const index = `ad-${i}`
          return (
            <li key={index}>
              <button type='button' onClick={handleOptionClick}>
                {text}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown
