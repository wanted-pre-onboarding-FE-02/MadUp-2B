import { ITrendDataSet } from 'types/trendDataSet'

// const parseData = (rawStr: string) => {
//   const y = Number(rawStr.substring(0, 4))
//   const m = Number(rawStr.substring(5, 7)) - 1
//   const d = Number(rawStr.substring(8))
//   return new Date(y, m, d)
// }

export interface Data {
  x: string
  y: number
}

export const convertData = (data: ITrendDataSet[]) => {
  const imp: Data[] = []
  const click: Data[] = []
  const cost: Data[] = []
  const conv: Data[] = []
  const roas: Data[] = []
  const roi: Data[] = []

  data.forEach((d) => {
    imp.push({
      x: d.date,
      y: d.imp,
    })
    click.push({
      x: d.date,
      y: d.click,
    })
    cost.push({
      x: d.date,
      y: d.cost,
    })
    conv.push({
      x: d.date,
      y: d.conv,
    })
    roas.push({
      x: d.date,
      y: d.roas,
    })
    roi.push({
      x: d.date,
      y: Number((d.roas * d.cost) / 100),
    })
  })

  return {
    imp,
    click,
    cost,
    conv,
    roas,
    roi,
  }
}
