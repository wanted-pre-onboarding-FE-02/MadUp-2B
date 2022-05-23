import { Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Corona from './Chart'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Route path='corona' element={<Corona />} />
        <Route path='*' element={<div>404</div>} />
      </div>
    </div>
  )
}

export default App
