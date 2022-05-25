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
  return (
    <div className={styles.list}>
      {data
        ? data.ads
            .filter((ad) => {
              if (option === '전체 광고') return true
              return option === ad.status
            })
            .map((ad) => <ManagementItem key={ad.id} {...ad} />)
        : null}
    </div>
  )
}

export default ManagementList
