import ManagementItem from 'components/managementPage/ManagementItem'

import styles from './routes.module.scss'

import OptionBar from 'components/managementPage/OptionBar'

const App = () => {
  return (
    <div className={styles.management}>
      <h1 className={styles.management__title}>광고관리</h1>
      <div className={styles.wrapper}>
        <OptionBar />
        <div className={styles.content}>
          <ManagementItem />
          <ManagementItem />
          <ManagementItem />
          <ManagementItem />
          <ManagementItem />
          <ManagementItem />
        </div>
      </div>
    </div>
  )
}

export default App
