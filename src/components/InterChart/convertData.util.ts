import { ITrendDataSet } from 'types/trendDataSet'

const parseData = (rawStr: string) => {
  const y = Number(rawStr.substring(0, 4))
  const m = Number(rawStr.substring(5, 7)) - 1
  const d = Number(rawStr.substring(8))
  return new Date(y, m, d)
}

interface Data {
  x: string
  y: number
}

export const convertData = (data: ITrendDataSet[]) => {
  const imp: Data[] = []
  const click: Data[] = []
  const cost: Data[] = []
  const conv: Data[] = []
  // const convValue: Data[] = []
  // const ctr: Data[] = []
  // const cvr: Data[] = []
  // const cpc: Data[] = []
  // const cpa: Data[] = []
  const roas: Data[] = []
  const roi: Data[] = []
  const dateInfo: Date[] = []

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
    // convValue.push({
    //   x: parseData(d.date),
    //   y: d.convValue,
    // })
    // ctr.push({
    //   x: parseData(d.date),
    //   y: d.ctr,
    // })
    // cvr.push({
    //   x: parseData(d.date),
    //   y: d.cvr,
    // })
    // cpc.push({
    //   x: parseData(d.date),
    //   y: d.cpc,
    // })
    // cpa.push({
    //   x: parseData(d.date),
    //   y: d.cpa,
    // })
    roas.push({
      x: d.date,
      y: d.roas,
    })
    roi.push({
      x: d.date,
      y: Number((d.roas * d.cost) / 100),
    })
    dateInfo.push(parseData(d.date))
  })

  return {
    imp,
    click,
    cost,
    conv,
    // convValue,
    // ctr,
    // cvr,
    // cpc,
    // cpa,
    roas,
    roi,
    dateInfo,
  }
}
