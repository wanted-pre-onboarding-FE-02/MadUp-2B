import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryTheme, VictoryVoronoiContainer } from 'victory'

import { firstCurrentData, secondCurrentData } from 'recoil/recoil.state'
import { Data } from './convertData.util'
import useColorPickCallback from 'hooks/useColorPickCallback'

import styles from 'styles'

interface InterChartProps {
  firstMenuState: string
  secondMenuState: string
  thirdMenuState: string
}

const InterChart = ({ firstMenuState, secondMenuState, thirdMenuState }: InterChartProps) => {
  const firstData = useRecoilValue(firstCurrentData)
  const secondData = useRecoilValue(secondCurrentData)

  const maxValue = useCallback((value: Data[]) => {
    return Math.max(...value.map((data) => data.y))
  }, [])
  const firstMaxValue = maxValue(firstData)
  const secondMaxValue = maxValue(secondData)
  const setUnit = useCallback((menuState: string, tickData: number) => {
    const tickFormSet = {
      ROAS: `${Math.round(tickData)}%`,
      광고비: `${Math.round(tickData / 10000)}만원`,
      노출수: `${Math.round(tickData / 1000)}K`,
      클릭수: `${Math.round(tickData)}CLK`,
      전환수: `${Math.round(tickData)}CV`,
      매출: `${Math.round(tickData / 10000)}만원`,
    }[menuState]
    if (!menuState) return ''
    return tickFormSet
  }, [])

  const setColor = useColorPickCallback()

  const setDayType = useCallback((dataType: string) => {
    const dayCutNum = {
      주간: 14,
      일별: 7,
    }[dataType]
    if (!dataType) return 7
    return dayCutNum
  }, [])

  return (
    <div className={styles.chart}>
      <VictoryChart
        theme={VictoryTheme.grayscale}
        width={960}
        height={320}
        domain={{ y: [0, 1] }}
        containerComponent={
          <VictoryVoronoiContainer voronoiBlacklist={['redPoints']} labels={({ datum }) => `${datum.y.toFixed(1)}`} />
        }
      >
        <VictoryAxis
          tickFormat={(t) => `${t.slice(5, 7)}월 ${t.slice(8)}일`}
          style={{
            tickLabels: { fill: 'gray', fontSize: 12 },
          }}
        />

        <VictoryAxis
          dependentAxis
          orientation='left'
          offsetX={50}
          style={{
            axis: { strokeWidth: 0 },
            grid: { stroke: 'gray', strokeWidth: 1 },
            ticks: { padding: 0 },
            tickLabels: { fill: 'gray', textAnchor: 'end' },
          }}
          tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={(t) => `${setUnit(firstMenuState, t * firstMaxValue)}`}
        />
        <VictoryLine
          data={firstData.slice(0, setDayType(thirdMenuState))}
          style={{ data: { stroke: setColor(firstMenuState) } }}
          y={(datum) => datum.y / firstMaxValue}
        />

        {!!secondData.length && (
          <VictoryAxis
            dependentAxis
            orientation='right'
            offsetX={50}
            style={{
              axis: { strokeWidth: 0 },
              grid: { stroke: 'gray', strokeWidth: 1 },
              ticks: { padding: 0 },
              tickLabels: { fill: 'gray', textAnchor: 'start', padding: 0 },
            }}
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) => `${setUnit(secondMenuState, t * secondMaxValue)}`}
          />
        )}
        <VictoryLine
          data={secondData.slice(0, setDayType(thirdMenuState))}
          style={{ data: { stroke: setColor(secondMenuState) } }}
          y={(datum) => datum.y / secondMaxValue}
        />
      </VictoryChart>
    </div>
  )
}

export default InterChart
