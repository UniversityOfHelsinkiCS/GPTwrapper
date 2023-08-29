import { useQuery } from '@tanstack/react-query'

import { PUBLIC_URL } from '../../config'
import { Service } from '../types'

const useService = (id: string) => {
  const queryKey = ['service', id]

  const queryFn = async (): Promise<Service | null> => {
    const res = await fetch(`${PUBLIC_URL}/api/services/${id}`)

    const data = await res.json()

    return data
  }

  const { data: service, ...rest } = useQuery(queryKey, queryFn)

  return { service, ...rest }
}

export default useService
