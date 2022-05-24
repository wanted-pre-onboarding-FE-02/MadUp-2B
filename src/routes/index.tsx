import styles from './routes.module.scss'

import { Routes, Route } from 'react-router-dom'
import GNB from 'routes/_shared/GNB'
import Header from 'components/Header/index'

import ManagementPage from 'components/managementPage'
import PercentColumnChart from 'components/PercentColumnChart'
import { Status } from 'components/Status'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<PercentColumnChart />} />
          <Route path='management' element={<ManagementPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
