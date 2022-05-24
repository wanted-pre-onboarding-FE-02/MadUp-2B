import IntergratedAdStatus from 'components/IntergratedAdStatus/IntergratedAdStatus'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Error from './Error'

const Corona = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallbackRender={Error}>
          <IntergratedAdStatus />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

export default Corona
