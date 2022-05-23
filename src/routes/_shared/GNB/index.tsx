import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './gnb.module.scss'

import { LogoImage, DashboardIcon, ChartIcon, GuideIcon, ArrowIcon } from 'assets/svgs/index'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <div className={styles.left}>
        <h1>
          <a href='/'>
            <LogoImage className={styles.logoImg} />
          </a>
        </h1>
        <div className={styles.serviceWrap}>
          <p className={styles.subTitle}>서비스</p>
          <div className={styles.dropdownWrap}>
            <select>
              <option>매드업</option>
              <option>서비스 추가하기</option>
            </select>
            <ArrowIcon className={styles.arrowIcon} />
          </div>
        </div>
        <div className={styles.adWrap}>
          <p className={styles.subTitle}>광고 센터</p>
          <ul className={styles.navWrap}>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.active]: isActive })}>
                <DashboardIcon className={styles.dashboardIcon} />
                <span>대시보드</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.active]: isActive })}>
                <ChartIcon className={styles.chartIcon} />
                <span>광고관리</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
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
