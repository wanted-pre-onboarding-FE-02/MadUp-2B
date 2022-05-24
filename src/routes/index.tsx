import { Routes, Route } from 'react-router-dom'
import GNB from 'routes/_shared/GNB'
import Header from 'components/Header/index'

import styles from './routes.module.scss'
import ManagementPage from 'routes/managementPage'
import DashboardPage from './dashboardPage'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='management' element={<ManagementPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
