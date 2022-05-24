import cx from 'classnames'
import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './gnb.module.scss'

import { LogoImage, DashboardIcon, ChartIcon, GuideIcon, ArrowIcon } from 'assets/svgs/index'

const GNB = () => {
  const dropdownRef = useRef<HTMLUListElement>(null)
  const [selectedOption, setSelectedOption] = useState<string>('매드업')
  const [dropdownClick, setDropdownClick] = useState(false)

  const handleDropdownClick = () => {
    setDropdownClick((prev) => {
      return !prev
    })
  }

  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetText = (event.target as HTMLElement).textContent
    setSelectedOption(targetText as string)
    setDropdownClick(false)
  }

  const handleClickOutside = (event: React.BaseSyntheticEvent | MouseEvent): void => {
    if (dropdownRef.current != null) {
      const target = event.target as HTMLButtonElement
      if (dropdownClick && !dropdownRef.current.contains(target)) {
        setDropdownClick(false)
      }
    }
  }

  useEffect(() => {
    if (dropdownClick) document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <nav className={styles.gnb}>
      <div className={styles.top}>
        <h1>
          <Link to='/'>
            <LogoImage className={styles.logoImg} />
          </Link>
        </h1>
        <div className={styles.serviceWrap}>
          <p className={styles.subTitle}>서비스</p>
          <div className={styles.dropdownWrap}>
            <button type='button' className={styles.dropdown} onClick={handleDropdownClick}>
              {selectedOption}
            </button>
            <ul
              className={styles.dropdownListWrap}
              style={dropdownClick ? { display: 'block' } : { display: 'none' }}
              ref={dropdownRef}
            >
              <li>
                <button type='button' onClick={handleOptionClick}>
                  매드업
                </button>
              </li>
              <li>
                <button type='button' onClick={handleOptionClick}>
                  서비스 추가하기
                </button>
              </li>
            </ul>
            <ArrowIcon className={styles.arrowIcon} />
          </div>
        </div>
        <div className={styles.adWrap}>
          <p className={styles.subTitle}>광고 센터</p>
          <ul className={styles.navWrap}>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.active]: isActive })}>
                <DashboardIcon className={styles.icon} />
                <span>대시보드</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/a' className={({ isActive }) => cx({ [styles.active]: isActive })}>
                <ChartIcon className={styles.icon} />
                <span>광고관리</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <button type='button' className={styles.guideWrap}>
          <div className={styles.guideIconWrap}>
            <GuideIcon className={styles.guideIcon} />
          </div>
          <div className={styles.guideTextWrap}>
            <p>레버 이용 가이드</p>
            <span>시작하기 전에 알아보기</span>
          </div>
        </button>
        <div className={styles.conditionWrap}>
          <p>레버는 함께 만들어갑니다.</p>
          <a href='/'>이용약관</a>
        </div>
      </div>
    </nav>
  )
}

export default GNB
