import { useState, useEffect, useCallback } from 'react'

/**
 * localStorage hook
 * @param {*} key
 * @returns
 */
const useLocalStorage = key => {
  const [state, setState] = useState()

  const setVal = useCallback(
    targetVal => {
      console.log('useLocalStorage setVal:', state)
      localStorage.setItem(key, JSON.stringify({ val: targetVal }))
      setState(targetVal)
    },
    [key]
  )

  const getVal = useCallback(() => {
    console.log('useLocalStorage getVal:', state)
    const ret = key ? localStorage.getItem(key) : '{}'
    return ret ? JSON.parse(ret)?.val : null
  }, [key])

  useEffect(() => {
    console.log('useLocalStorage 2:', state)
    setState(getVal(key))
  }, [key])

  console.log('useLocalStorage 3:', state)
  return [state, setVal]
}

export default useLocalStorage
