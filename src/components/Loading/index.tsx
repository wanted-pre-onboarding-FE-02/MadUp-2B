import styles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <div className={styles.text}>loading</div>
    </div>
  )
}

export default Loading
