export interface IReportData {
  daily: IDailyData[]
}

export interface IEmptyData {
  [key: string]: string | number | undefined
}

export interface IDailyData {
  imp: number
  click: number
  cost: number
  conv: number
  convValue?: number
  ctr?: number
  cvr?: number
  cpc?: number
  cpa?: number
  roas: number
  date?: string
  sales: number
  [key: string]: string | number | undefined
}

export interface IDiffData {
  imp: number
  click: number
  cost: number
  conv: number
  roas: number
  sales: number
  [key: string]: number
}
