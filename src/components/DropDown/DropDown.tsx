import { MouseEvent, useRef, useState } from 'react'
import useOnClickOutside from 'utils/useOnClickOutside'
import styles from './dropdown.module.scss'

interface DropDownProps {
  menuList: string[]
  currentOption: string
  changeCurrentMenu: (data: string) => void
}

const DropDown = ({ menuList, currentOption, changeCurrentMenu }: DropDownProps) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null)

  const onClickMenuButton = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    changeCurrentMenu(value)
    setOpenDropdown(false)
  }

  const onClickOpenButton = () => {
    setOpenDropdown((prev) => !prev)
  }

  useOnClickOutside(dropDownRef, () => setOpenDropdown(false))

  return (
    <div ref={dropDownRef} className={styles.wrapper}>
      <button type='button' onClick={onClickOpenButton}>
        {currentOption}
      </button>
      {openDropdown ? (
        <div className={styles.menu}>
          {menuList.map((data) => (
            <button className={styles.menuItem} type='button' key={data} value={data} onClick={onClickMenuButton}>
              {data}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default DropDown
