import { Suspense } from 'react'
import ContentBox from '../_shared/ContentBox'
import PercentColumnChart from './PercentColumnChart'
import Table from './Table'

const Media = () => {
  return (
    <ContentBox title='매체 현황'>
      <Suspense fallback={<div>로딩중...</div>}>
        <PercentColumnChart />
        <Table />
      </Suspense>
    </ContentBox>
  )
}
export default Media
