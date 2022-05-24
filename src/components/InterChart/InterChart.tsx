import { useRecoilValue } from 'recoil'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryLabel } from 'victory'

import { firstCurrentData, secondCurrentData } from 'recoil/recoil.state'
import { Data } from './convertData.util'

import styles from 'styles'

const InterChart = () => {
  const firstData = useRecoilValue(firstCurrentData)
  const secondData = useRecoilValue(secondCurrentData)
  const maxValue = (value: Data[]) => {
    return value.reduce((max, current) => (current.y > max ? current.y : max), value[0].y)
  }

  return (
    <div className={styles.chart}>
      <VictoryChart width={960} height={320}>
        <VictoryAxis />
        <VictoryAxis
          dependentAxis
          offsetX={50}
          standalone={false}
          domain={[0, 1]}
          tickLabelComponent={<VictoryLabel dy={5} dx={5} />}
          style={{
            axis: { stroke: 'none' },
            tickLabels: { fill: 'black' },
          }}
        />

        {secondData.length > 0 && (
          <VictoryAxis
            dependentAxis
            offsetX={960}
            standalone={false}
            domain={[0, 1]}
            tickLabelComponent={<VictoryLabel dy={5} dx={10} />}
            style={{
              axis: { stroke: 'none' },
              tickLabels: { fill: 'black' },
            }}
          />
        )}

        <VictoryLine
          data={firstData.slice(0, 8)}
          y={(datum) => datum.y / maxValue(firstData)}
          style={{ data: { stroke: 'red' } }}
        />
        <VictoryLine
          data={secondData.slice(0, 8)}
          y={(datum) => datum.y / maxValue(secondData)}
          style={{ data: { stroke: 'orange' } }}
        />
      </VictoryChart>
    </div>
  )
}

export default InterChart
