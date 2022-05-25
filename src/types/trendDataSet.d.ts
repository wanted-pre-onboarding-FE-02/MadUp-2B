export interface ITrendDataSet {
  imp: number
  click: number
  cost: number
  conv: number
  convValue: number
  ctr: number
  cvr: number
  cpc: number
  cpa: number
  roas: number
  date: string
}

export interface IReportDataSet {
  report: {
    daily: ITrendDataSet[]
  }
}

export interface IDiffDataSet {
  imp: number
  click: number
  cost: number
  conv: number
  roas: number
  sales: number
  [key: string]: number
}

export interface ITrend2DataSet {
  imp: number
  click: number
  cost: number
  conv: number
  roas: number
  sales: number
  date?: string
  [key: string]: number | string
}

export interface ITitleDataSet {
  imp: string
  click: string
  cost: string
  conv: string
  roas: string
  sales: string
  [key: string]: string
}
