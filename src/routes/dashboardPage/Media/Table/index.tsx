import styles from './table.module.scss'
import transformData from './transformData'
import { getMediaDataApi } from 'services/fakeApi'
import { useQuery } from 'react-query'

const Table = () => {
  const { data } = useQuery(
    'getAdvertiseStatus',
    () =>
      getMediaDataApi().then((res) => {
        const result = transformData(res)
        return result
      }),
    { suspense: true }
  )

  if (!data) return null
  const { dataList, total } = data
  return (
    <div className={styles.wrapper}>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>광고비</th>
            <th>매출</th>
            <th>ROAS</th>
            <th>노출수</th>
            <th>클릭수</th>
            <th>클릭률(CTR)</th>
            <th>클릭당 비용(CPC)</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((d, i) => {
            const key = `media-table-tr-${i}`
            return (
              <tr key={key}>
                <td className={styles.first}>{d.channel}</td>
                <td>{d.cost.toLocaleString()}</td>
                <td>{d.sales.toLocaleString()}</td>
                <td>{d.roas.toLocaleString()}</td>
                <td>{d.imp.toLocaleString()}</td>
                <td>{d.click.toLocaleString()}</td>
                <td>{d.ctr.toLocaleString()}</td>
                <td>{d.cpc.toLocaleString()}</td>
              </tr>
            )
          })}
          <tr>
            <td className={styles.first}>총계</td>
            <td>{total.cost.toLocaleString()}</td>
            <td>{total.sales.toLocaleString()}</td>
            <td>{total.roas.toLocaleString()}</td>
            <td>{total.imp.toLocaleString()}</td>
            <td>{total.click.toLocaleString()}</td>
            <td>{total.ctr.toLocaleString()}</td>
            <td>{total.cpc.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Table
