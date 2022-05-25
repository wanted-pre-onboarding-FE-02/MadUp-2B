import { getDivide } from './num'

export const convertFormat = (value: number | string | undefined, keyword: string) => {
  let transformedValue: number | string = ''

  const newValue = Math.abs(Number(value))
  if (isNaN(newValue)) return undefined

  switch (keyword) {
    case 'roas':
      transformedValue = `${newValue?.toLocaleString()}%`
      break
    case 'cost':
      transformedValue = `${convertView(newValue)}원`
      break
    case 'imp':
      transformedValue = `${convertView(newValue)}회`
      break
    case 'click':
      transformedValue = `${convertView(newValue)}회`
      break
    case 'conv':
      transformedValue = `${convertView(newValue)}회`
      break
    case 'sales':
      transformedValue = `${convertView(newValue)}원`
      break
    default:
      return undefined
  }
  return transformedValue
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
