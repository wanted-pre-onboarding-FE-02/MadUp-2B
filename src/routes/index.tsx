import styles from './routes.module.scss'

import Corona from './Chart'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Corona />
      </div>
    </div>
  )
}

export default App
