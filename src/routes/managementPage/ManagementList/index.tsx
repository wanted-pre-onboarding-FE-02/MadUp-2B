import { useQuery } from 'react-query'

import { getAdDataApi } from 'services/fakeApi'
import { getConvertedData } from 'utils/convertDataFormat'

import ManagementItem from '../ManagementItem'
import styles from './managementList.module.scss'

const ManagementList = ({ option }: { option: string }) => {
  const { data } = useQuery(
    'getAdDataApi',
    () =>
      getAdDataApi().then((res) => {
        return getConvertedData(res)
      }),
    { suspense: true }
  )

  if (!data) return null

  return (
    <div className={styles.list}>
      {data.ads
        .filter((ad) => {
          if (option === '전체 광고') return true
          return option === ad.status
        })
        .map((ad) => (
          <ManagementItem key={ad.id} {...ad} />
        ))}
    </div>
  )
}

export default ManagementList
