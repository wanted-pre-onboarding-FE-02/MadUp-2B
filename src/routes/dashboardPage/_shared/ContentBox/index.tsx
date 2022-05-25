import styles from './contentBox.module.scss'

interface Props {
  children: React.ReactNode
  title: string
}

const ContentBox = ({ children, title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <div className={styles.board}>{children}</div>
    </div>
  )
}
export default ContentBox
