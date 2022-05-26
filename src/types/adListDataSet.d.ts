export interface IDataSet {
  id: number
  adType: string
  title: string
  budget: string
  status: string
  startDate: string
  endDate: string | null
  report: {
    cost: string
    convValue: string
    roas: number
  }
}

export interface IAdData {
  count: number
  ads: {
    id: number
    adType: string
    title: string
    budget: number
    status: string
    startDate: string
    endDate: string | null
    report: {
      cost: number
      convValue: number
      roas: number
    }
  }[]
}
