import styles from './table.module.scss'
import transformData from './transformData'
import MEDIA_DATA from 'assets/json/MEDIA_DATA.json'

const Table = () => {
  const { dataList, total } = transformData(MEDIA_DATA)

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
          {dataList.map((data, i) => {
            const key = `media-table-tr-${i}`
            return (
              <tr key={key}>
                <td className={styles.first}>{data.channel}</td>
                <td>{data.cost}</td>
                <td>{data.sales}</td>
                <td>{data.roas}</td>
                <td>{data.imp}</td>
                <td>{data.click}</td>
                <td>{data.ctr}</td>
                <td>{data.cpc}</td>
              </tr>
            )
          })}
          <tr>
            <td className={styles.first}>총계</td>
            <td>{total.cost}</td>
            <td>{total.sales}</td>
            <td>{total.roas}</td>
            <td>{total.imp}</td>
            <td>{total.click}</td>
            <td>{total.ctr}</td>
            <td>{total.cpc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Table
