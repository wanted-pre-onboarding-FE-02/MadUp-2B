import ManagementItem from 'components/managementPage/ManagementItem'
import styles from './routes.module.scss'

import OptionBar from 'components/managementPage/OptionBar'
import { useState } from 'react'
import { getConvertedData } from 'utils/convertDataFormat'

const App = () => {
  const [data, setData] = useState(getConvertedData())

  return (
    <div className={styles.management}>
      <h1 className={styles.management__title}>광고관리</h1>
      <div className={styles.wrapper}>
        <OptionBar />
        <div className={styles.content}>
          {data.ads.map((ad) => (
            <ManagementItem key={ad.id} {...ad} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
