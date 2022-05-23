import styles from './routes.module.scss'

import PercentColumnChart from 'components/PercentColumnChart'
import Practice from 'components/PercentColumnChart/Practice'

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
