import { useRef } from 'react'

const useDebounce = () => {
  const timer = useRef()
  if (timer.current) clearTimeout(timer.current)
  timer.current = setTimeout(() => {}, {})
}

export default useDebounce
