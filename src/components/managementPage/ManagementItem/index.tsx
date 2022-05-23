import styles from './managementItem.module.scss'

const ManagementItem = () => {
  return (
    <div className={styles.item}>
      <h1 className={styles.item__title}>웹광고_20210603123030</h1>
      <div className={styles.divider} />
      <div className={styles.item__content}>
        <h1>상태</h1>
        <p>진행중</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>광고 생성일</h1>
        <p>2021-06-04</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>일 희망 예산</h1>
        <p>40만원</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>광고 수익률</h1>
        <p>694%</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>매출</h1>
        <p>26,071만원</p>
      </div>
      <div className={styles.divider} />

      <div className={styles.item__content}>
        <h1>광고 비용</h1>
        <p>3,759만원</p>
      </div>
      <div className={styles.divider} />

      <button type='button' className={styles.item__editBtn}>
        수정하기
      </button>
    </div>
  )
}

export default ManagementItem
