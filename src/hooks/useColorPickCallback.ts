import { useCallback } from 'react'

export default function useColorPickCallback() {
  return useCallback((data: string) => {
    const resultColor = {
      ROAS: 'red',
      광고비: 'orange',
      노출수: 'yellow',
      클릭수: 'green',
      전환수: 'blue',
      매출: 'purple',
    }[data]
    if (!data) return 'black'
    return resultColor
  }, [])
}
