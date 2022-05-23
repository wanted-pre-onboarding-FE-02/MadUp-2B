import { IDataSet } from 'type/adListDataSet'
import styles from './managementItem.module.scss'

const ManagementItem = ({ id, adType, title, budget, status, startDate, endDate, report }: IDataSet) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.item__title}>
        {adType}_{title}
      </h1>
      <div className={styles.divider} />
      <div className={styles.item__content}>
        <h1>상태</h1>
        <p>{status}</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>광고 생성일</h1>
        <p>
          {startDate} {endDate && `(${endDate})`}
        </p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>일 희망 예산</h1>
        <p>{budget}</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>광고 수익률</h1>
        <p>{report.roas} %</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>매출</h1>
        <p>{report.convValue}</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>광고 비용</h1>
        <p>{report.cost}</p>
      </div>
      <div className={styles.divider} />

      <button type='button' className={styles.item__editBtn}>
        수정하기
      </button>
    </div>
  )
}

export default ManagementItem
