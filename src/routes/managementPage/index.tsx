import { useState } from 'react'

import { useRecoilValue } from 'recoil'
import { optionState } from 'recoil/atom'

import ManagementItem from 'routes/managementPage/ManagementItem'
import OptionBar from 'routes/managementPage/OptionBar'

import styles from './managementPage.module.scss'

import { getConvertedData } from 'utils/convertDataFormat'

const ManagementPage = () => {
  const [data, setData] = useState(getConvertedData())
  const option = useRecoilValue(optionState)

  return (
    <div className={styles.management}>
      <h1 className={styles.management__title}>광고관리</h1>
      <div className={styles.wrapper}>
        <OptionBar />
        <div className={styles.content}>
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

export default ManagementPage