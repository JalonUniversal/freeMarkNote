import { useEffect, useState } from 'react'

const useCountDown = () => {
  const { countDown, setCountDown } = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1)
      } else if (countDown <= 0) {
        clearInterval(timer)
      }
    }, countDown)
    return () => {
      clearInterval(timer)
    }
  }, [])
}

export default useCountDown
