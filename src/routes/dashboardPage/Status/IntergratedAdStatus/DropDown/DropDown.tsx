import { MouseEvent, useRef, useState } from 'react'
import useOnClickOutside from 'hooks/useOnClickOutside'
import styles from './dropdown.module.scss'
import useColorPickCallback from 'hooks/useColorPickCallback'
import { cx } from 'styles'
import { ArrowIcon } from 'assets/svgs'

interface DropDownProps {
  menuList: string[]
  option?: string
  currentOption: string
  changeCurrentMenu: (data: string) => void
}

const DropDown = ({ menuList, option, currentOption, changeCurrentMenu }: DropDownProps) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const setColor = useColorPickCallback()

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
      <button
        type='button'
        className={cx(styles.currentMenu, styles[setColor(currentOption)])}
        onClick={onClickOpenButton}
      >
        {currentOption}
        <ArrowIcon className={styles.icon} />
      </button>
      {openDropdown ? (
        <div className={styles.menu}>
          {menuList.map((data) => (
            <button
              className={cx(styles.menuItem, styles[setColor(data)])}
              type='button'
              key={data}
              value={data}
              onClick={onClickMenuButton}
            >
              {data}
            </button>
          ))}
          {option && (
            <button
              className={cx(styles.menuItem, styles[setColor(option)])}
              type='button'
              value={option}
              onClick={onClickMenuButton}
            >
              {option}
            </button>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default DropDown
