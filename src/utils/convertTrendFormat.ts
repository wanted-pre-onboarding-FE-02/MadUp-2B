import { getDivide } from './num'

export const convertTrendFormat = (value: number | string | undefined, keyword: string) => {
  const newValue = Math.abs(Number(value))
  if (isNaN(newValue)) return undefined

  const trendUnit = {
    roas: '%',
    cost: '원',
    imp: '회',
    click: '회',
    conv: '회',
    sales: '원',
  }[keyword]

  const isRoas = keyword === 'roas' ? newValue?.toLocaleString() : convertView(newValue)

  return `${isRoas}${trendUnit}`
}

const convertView = (view: number | string | undefined) => {
  let answer: string | number | undefined = ''
  const unit = 10000
  let index = 0
  let division = unit ** index

  if (getDivide(Number(view), 10000) <= 1) {
    answer = view?.toLocaleString()
    return answer
  }

  while (Math.floor(getDivide(Number(view), division)) > 0) {
    if (index >= 2) {
      answer = `${Number(getDivide(Number(view), division).toFixed(0)).toLocaleString()}억`
      return answer
    }

    answer = `${Number(getDivide(Number(view), 10000).toFixed(0)).toLocaleString()}만`
    division = unit ** (index += 1)
  }
  return answer
}
