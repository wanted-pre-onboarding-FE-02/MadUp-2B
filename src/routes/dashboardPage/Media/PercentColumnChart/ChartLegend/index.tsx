import styles from './chartLegend.module.scss'

interface ISymbolData {
  name: string
  color: string
}

interface Props {
  symbolData: ISymbolData[]
}

const ChartLegend = ({ symbolData = [] }: Props) => {
  return (
    <ul className={styles.wrapper}>
      {symbolData.map(({ name, color }) => (
        <li key={`${name}-${color}`}>
          <div className={styles.symbol} style={{ backgroundColor: color }} />
          {name}
        </li>
      ))}
    </ul>
  )
}

export default ChartLegend
