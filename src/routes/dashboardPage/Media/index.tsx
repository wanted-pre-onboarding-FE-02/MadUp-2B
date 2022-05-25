import { Suspense } from 'react'

import Loading from 'components/Loading'
import ContentBox from '../_shared/ContentBox'
import PercentColumnChart from './PercentColumnChart'
import Table from './Table'

const Media = () => {
  return (
    <ContentBox title='매체 현황'>
      <Suspense fallback={<Loading />}>
        <PercentColumnChart />
        <Table />
      </Suspense>
    </ContentBox>
  )
}
export default Media
