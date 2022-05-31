import { useState, useEffect, useCallback } from 'react'

/**
 * localStorage hook
 * @param {*} key
 * @returns
 */
const useSessionStorage = key => {
  const [state, setState] = useState()

  const setVal = useCallback(
    targetVal => {
      console.log('useSessionStorage setVal:', state)
      sessionStorage.setItem(key, JSON.stringify({ val: targetVal }))
      setState(targetVal)
    },
    [key]
  )

  const getVal = useCallback(() => {
    console.log('useSessionStorage getVal:', state)
    const ret = key ? sessionStorage.getItem(key) : '{}'
    return ret ? JSON.parse(ret)?.val : null
  }, [key])

  useEffect(() => {
    console.log('useSessionStorage 2:', state)
    setState(getVal(key))
  }, [key])

  console.log('useSessionStorage 3:', state)
  return [state, setVal]
}

export default useSessionStorage
