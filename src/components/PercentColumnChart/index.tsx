// import styles from './percentColumnChart.module.scss'

import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from 'victory'

const myDataset = [
  [
    { x: 'a', y: 1 },
    { x: 'b', y: 2 },
    { x: 'c', y: 3 },
    { x: 'd', y: 2 },
    { x: 'e', y: 1 },
  ],
  [
    { x: 'a', y: 2 },
    { x: 'b', y: 3 },
    { x: 'c', y: 4 },
    { x: 'd', y: 5 },
    { x: 'e', y: 5 },
  ],
  [
    { x: 'a', y: 1 },
    { x: 'b', y: 2 },
    { x: 'c', y: 3 },
    { x: 'd', y: 4 },
    { x: 'e', y: 4 },
  ],
]

interface IData {
  x: string
  y: number
}

const transformData = (dataset: any[]) => {
  const totals = dataset[0].map((data: IData, i: number) => {
    return dataset.reduce((memo, curr) => {
      return memo + curr[i].y
    }, 0)
  })
  return dataset.map((data) => {
    return data.map((datum: IData, i: number) => {
      return { x: datum.x, y: (datum.y / totals[i]) * 100 }
    })
  })
}

const PercentColumnChart = () => {
  const dataset = transformData(myDataset)
  return (
    <div>
      <VictoryChart height={400} width={400} domainPadding={{ x: 30, y: 20 }}>
        <VictoryStack colorScale={['black', 'blue', 'tomato']}>
          {dataset.map((data, i) => {
            return <VictoryBar data={data} key={i} />
          })}
        </VictoryStack>
        <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}%`} />
        <VictoryAxis tickFormat={['a', 'b', 'c', 'd', 'e']} />
      </VictoryChart>
    </div>
  )
}

export default PercentColumnChart
