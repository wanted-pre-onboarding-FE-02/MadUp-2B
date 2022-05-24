import { MouseEvent, useRef, useState } from 'react'
import useOnClickOutside from 'hooks/useOnClickOutside'
import styles from './dropdown.module.scss'
import useColorPickCallback from 'hooks/useColorPickCallback'
import cx from 'styles'

interface DropDownProps {
  menuList: string[]
  option?: string
  currentOption: string
  changeCurrentMenu: (data: string) => void
}

const DropDown = ({ menuList, option, currentOption, changeCurrentMenu }: DropDownProps) => {
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
  const setColor = useColorPickCallback()
  useOnClickOutside(dropDownRef, () => setOpenDropdown(false))

  return (
    <div ref={dropDownRef} className={styles.wrapper}>
      <button type='button' className={styles.menuItem} onClick={onClickOpenButton}>
        {currentOption}
      </button>
      {openDropdown ? (
        <div className={styles.menu}>
          {menuList.map((data) => (
            <button className={styles.menuItem} type='button' key={data} value={data} onClick={onClickMenuButton}>
              {data}
            </button>
          ))}
          {option && (
            <button className={styles.menuItem} type='button' value={option} onClick={onClickMenuButton}>
              {option}
            </button>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default DropDown
