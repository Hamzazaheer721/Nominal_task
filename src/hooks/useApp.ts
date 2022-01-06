import { useCallback, useEffect, useState } from 'react'
import { measurementType } from '../types/measurements'

const useApp = (get_Data: () => Promise<measurementType[]>) => {
  const [data, setData] = useState<measurementType[]>([])

  const getAsyncData = useCallback(async () => {
    const data: measurementType[] = await get_Data()
    setData(data)
  }, [])

  useEffect(() => {
    getAsyncData()
  }, [])

  return {
    data,
    getAsyncData
  }
}

export default useApp
