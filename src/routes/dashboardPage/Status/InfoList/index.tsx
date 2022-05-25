import { useRecoil } from 'hooks/state'
import { useQuery } from 'react-query'
import { pickedEndDateState, pickedStartDateState } from 'recoil/atom'
import { getTrendDataApi } from 'services/fakeApi'
import { getCurrentData, getDiffData, getTransformedData } from './getTransformedData'
import styles from './infoList.module.scss'
import ListItem from './ListItem'

const InfoList = () => {
  const [startDate] = useRecoil(pickedStartDateState)
  const [endDate] = useRecoil(pickedEndDateState)

  const { data } = useQuery(
    ['getTrendData', endDate],
    () =>
      getTrendDataApi().then(({ report }) => {
        const newArr = getTransformedData(report.daily)
        const currentData = getCurrentData(startDate, endDate, newArr)
        const diffData = getDiffData(startDate, endDate, newArr)
        return { currentData, diffData }
      }),
    {
      enabled: !!endDate && !!startDate,
      suspense: true,
      // keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  return (
    <ul className={styles.statusBoard}>
      {data &&
        data?.currentData &&
        Object.keys(data.currentData).map((value) => (
          <ListItem key={`currnet-${value}`} keyword={value} currData={data.currentData} diffData={data.diffData} />
        ))}
    </ul>
  )
}
export default InfoList
