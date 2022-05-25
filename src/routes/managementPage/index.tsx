import { Suspense, useState } from 'react'

import OptionBar from 'routes/managementPage/OptionBar'
import Loading from 'components/Loading'
import ManagementList from './ManagementList'

import styles from './managementPage.module.scss'

const ManagementPage = () => {
  const [option, setOption] = useState('전체 광고')

  const handleOption = (selectedOption: string) => {
    setOption(selectedOption)
  }

  return (
    <div className={styles.management}>
      <h1 className={styles.management__title}>광고관리</h1>
      <div className={styles.wrapper}>
        <OptionBar setSelectOption={handleOption} selectedOption={option} />
        <Suspense fallback={<Loading />}>
          <ManagementList option={option} />
        </Suspense>
      </div>
    </div>
  )
}

export default ManagementPage
