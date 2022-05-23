import { useState } from 'react'

import { useRecoilValue } from 'recoil'
import { optionState } from 'recoil/management'

import ManagementItem from 'components/managementPage/ManagementItem'
import OptionBar from 'components/managementPage/OptionBar'

import styles from './routes.module.scss'

import { getConvertedData } from 'utils/convertDataFormat'

const App = () => {
  const [data, setData] = useState(getConvertedData())
  const option = useRecoilValue(optionState)
  console.log('option:', option)

  return (
    <div className={styles.management}>
      <h1 className={styles.management__title}>광고관리</h1>
      <div className={styles.wrapper}>
        <OptionBar />
        <div className={styles.content}>
          {/* {data.ads.map((ad) => {
            console.log('ad.status', ad.status)
            if (option === ad.status) return <ManagementItem key={ad.id} {...ad} />
            return <ManagementItem key={ad.id} {...ad} />
          })} */}
          {data.ads
            .filter((ad) => {
              if (option === '전체 광고') return true
              return option === ad.status
            })
            .map((ad) => (
              <ManagementItem key={ad.id} {...ad} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
