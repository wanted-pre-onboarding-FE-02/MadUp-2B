import Media from './Media'
import { Status } from './Status'
import DashBoardHeader from './DashBoardHeader'

const DashboardPage = () => {
  return (
    <div>
      <DashBoardHeader />
      <Status />
      <Media />
    </div>
  )
}
export default DashboardPage
