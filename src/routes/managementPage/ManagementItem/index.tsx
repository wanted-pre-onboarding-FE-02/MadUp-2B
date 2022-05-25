import { IDataSet } from 'types/adListDataSet'

import styles from './managementItem.module.scss'

const ManagementItem = ({ adType, title, budget, status, startDate, endDate, report }: IDataSet) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.item__title}>
        {adType}_{title}
      </h1>
      <div className={styles.divider} />
      <div className={styles.item__content}>
        <dt>상태</dt>
        <dd>{status}</dd>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <dt>광고 생성일</dt>
        <dd>
          {startDate} {endDate && `(${endDate})`}
        </dd>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <dt>일 희망 예산</dt>
        <dd>{budget}</dd>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <dt>광고 수익률</dt>
        <dd>{report.roas} %</dd>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <dt>매출</dt>
        <dd>{report.convValue}</dd>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <dt>광고 비용</dt>
        <dd>{report.cost}</dd>
      </div>
      <div className={styles.divider} />

      <button type='button' className={styles.item__editBtn}>
        수정하기
      </button>
    </div>
  )
}

export default ManagementItem
