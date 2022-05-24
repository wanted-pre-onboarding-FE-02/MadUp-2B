import styles from './routes.module.scss'

import PercentColumnChart from 'components/PercentColumnChart'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <PercentColumnChart />
      </div>
    </div>
  )
}

export default App
