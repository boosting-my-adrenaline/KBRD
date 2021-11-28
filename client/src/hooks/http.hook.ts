import { useState, useCallback } from 'react'

const requestHeaders: HeadersInit = new Headers()
requestHeaders.set('Content-type', 'application/json')

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(
    async (
      url: string,
      method: string = 'GET',
      body = null,
      headers: { 'Content-Type': string }
    ) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
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
