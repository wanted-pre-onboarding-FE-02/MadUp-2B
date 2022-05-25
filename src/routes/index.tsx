import { Routes, Route } from 'react-router-dom'

import GNB from 'routes/_shared/GNB'
import Profile from 'components/Profile'

import styles from './routes.module.scss'
import ManagementPage from 'routes/managementPage'
import DashboardPage from './dashboardPage'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <main className={styles.app}>
        <Profile />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='management' element={<ManagementPage />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
