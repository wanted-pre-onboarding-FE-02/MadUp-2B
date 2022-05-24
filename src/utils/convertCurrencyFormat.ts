export const getConvertedCurrnecy = (koreanWon: number) => {
  let 만원: number
  let 천원: number
  if (koreanWon / 100000 > 0) {
    만원 = (koreanWon - (koreanWon % 10000)) / 10000
    천원 = ((koreanWon % 10000) - ((koreanWon % 10000) % 1000)) / 1000
    if (천원 === 0) return `${만원}만원`
    return `${만원}만 ${천원}천원`
  }
  천원 = (koreanWon - (koreanWon % 1000)) / 1000
  return `${천원}천원`
}
