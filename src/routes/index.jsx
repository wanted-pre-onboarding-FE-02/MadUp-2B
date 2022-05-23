import styles from './routes.module.scss'

import { Status } from 'components/Status'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Status />
      </div>
    </div>
  )
}

export default App
