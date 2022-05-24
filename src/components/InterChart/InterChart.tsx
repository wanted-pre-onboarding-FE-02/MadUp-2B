import styles from 'styles'
import TRENDDATASET from './trendDataSet.json'
import {
  VictoryChart,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
} from 'victory'
import { convertData } from './convertData.util'

const { imp, click, cost, conv, roas, roi } = convertData(TRENDDATASET)

interface InterChartProps {
  firstMenuState: string
  secondMenuState: string
  thirdMenuState: string
}
const InterChart = ({ firstMenuState, secondMenuState, thirdMenuState }: InterChartProps) => {
  return (
    <div className={styles.chart}>
      <VictoryChart width={960} height={320}>
        <VictoryAxis />
        <VictoryAxis
          dependentAxis
          offsetX={50}
          tickLabelComponent={<VictoryLabel dy={5} dx={5} />}
          style={{
            axis: { stroke: 'none' },
            tickLabels: { fill: 'black' },
          }}
        />
        <VictoryAxis
          dependentAxis
          offsetX={960}
          tickLabelComponent={<VictoryLabel dy={5} dx={10} />}
          style={{
            axis: { stroke: 'none' },
            tickLabels: { fill: 'black' },
          }}
        />
        <VictoryLine data={imp.slice(0, 8)} y={(datum) => datum.y} style={{ data: { stroke: 'red' } }} />
        <VictoryLine data={cost.slice(0, 8)} y={(datum) => datum.y / 5} style={{ data: { stroke: 'orange' } }} />
        <VictoryLine data={roas.slice(0, 8)} y={(datum) => datum.y * 100} style={{ data: { stroke: 'yellow' } }} />
        <VictoryLine data={click.slice(0, 8)} y={(datum) => datum.y * 100} style={{ data: { stroke: 'green' } }} />
        <VictoryLine data={conv.slice(0, 8)} y={(datum) => datum.y * 1000} style={{ data: { stroke: 'Blue' } }} />
        <VictoryLine data={roi.slice(0, 8)} y={(datum) => datum.y / 100} style={{ data: { stroke: 'purple' } }} />
      </VictoryChart>
    </div>
  )
}

export default InterChart
