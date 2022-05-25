import { Suspense } from 'react'
import Loading from 'components/Loading'
import ContentBox from '../_shared/ContentBox'
import InfoList from './InfoList'
import IntergratedAdStatus from './IntergratedAdStatus/IntergratedAdStatus'

export const Status = () => {
  return (
    <ContentBox title='통합 광고 현황'>
      <Suspense fallback={<Loading />}>
        <InfoList />
        <IntergratedAdStatus />
      </Suspense>
    </ContentBox>
  )
}
