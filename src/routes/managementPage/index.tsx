import { Suspense, useState } from 'react'
import { useQuery } from 'react-query'

import ManagementItem from 'routes/managementPage/ManagementItem'
import OptionBar from 'routes/managementPage/OptionBar'
import Loading from 'components/Loading'

import styles from './managementPage.module.scss'

import { getAdDataApi } from '../../services/fakeApi'
import { getConvertedData } from 'utils/convertDataFormat'

const ManagementPage = () => {
  const { data } = useQuery(
    'getAdDataApi',
    () =>
      getAdDataApi().then((res) => {
        return getConvertedData(res)
      }),
    { suspense: true }
  )

  // const [data, setData] = useState(getConvertedData())
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
          <div className={styles.content}>
            {data &&
              data.ads
                .filter((ad) => {
                  if (option === '전체 광고') return true
                  return option === ad.status
                })
                .map((ad) => <ManagementItem key={ad.id} {...ad} />)}
          </div>
        </Suspense>
      </div>
    </div>
  )
}

export default ManagementPage
