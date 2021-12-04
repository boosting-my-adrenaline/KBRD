import { useState, useCallback } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | string>(null)

  const request = useCallback(
    async (url: string, method: string = 'GET', body, headers = {}) => {
      setLoading(true)
      console.log('statring useHttp hook')
      try {
        console.log('starting try in hook')
        console.log('bodyJSONed: ', JSON.stringify(body))
        console.log('body: ', body)
        if (body.email && body.password) {
          body = JSON.stringify(body)
          console.log(body)
          headers['Content-Type'] = 'application/json'
        } else {
          console.log('body is undefined???')
        }

        const response = await fetch(url, {
          method,
          body,
          headers,
        })
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Something gone wrong')
        }

        setLoading(false)

        return data
      } catch (e: any) {
        console.log('error:', e.message)
        setLoading(false)
        setError(e.message)
        throw e
      }
    },
    []
  )

  const clearError = () => setError(null)

  return { loading, request, error, clearError }
}
