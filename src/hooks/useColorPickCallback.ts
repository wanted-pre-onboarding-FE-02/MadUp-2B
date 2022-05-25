import { useCallback } from 'react'

export default function useColorPickCallback() {
  return useCallback((data: string) => {
    const resultColor =
      {
        ROAS: 'red',
        광고비: 'orange',
        노출수: 'gold',
        클릭수: 'green',
        전환수: 'blue',
        매출: 'purple',
      }[data] ?? 'black'
    return resultColor
  }, [])
}
