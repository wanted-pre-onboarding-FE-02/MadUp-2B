import { getConvertedCurrnecy } from './convertCurrencyFormat'

// export const convertFormat = (value: number | string | undefined, keyword: string) => {
//   switch (keyword) {
//     case 'roas':
//       console.log(`${value}%`)
//       break
//     case 'cost':
//       console.log(getConvertedCurrnecy(value))
//       break
//     // case 'imp':
//     // case 'click':
//     // case 'conv':
//     // case 'sales':
//     // default:
//     default:
//       console.log('hello')
//   }
//   // let 만원: number
//   // let 천원: number
//   // if (koreanWon / 100000 > 0) {
//   //   만원 = (koreanWon - (koreanWon % 10000)) / 10000
//   //   천원 = ((koreanWon % 10000) - ((koreanWon % 10000) % 1000)) / 1000
//   //   if (천원 === 0) return `${만원}만원`
//   //   return `${만원}만 ${천원}천원`
//   // }
//   // 천원 = (koreanWon - (koreanWon % 1000)) / 1000
//   // return `${천원}천원`
// }

// const convertCurrency = () => {
//   let 만원: number
//   let 천원: number
//   if (koreanWon / 100000 > 0) {
//     만원 = (koreanWon - (koreanWon % 10000)) / 10000
//     천원 = ((koreanWon % 10000) - ((koreanWon % 10000) % 1000)) / 1000
//     if (천원 === 0) return `${만원}만원`
//     return `${만원}만 ${천원}천원`
//   }
//   천원 = (koreanWon - (koreanWon % 1000)) / 1000
//   return `${천원}천원`
// }
