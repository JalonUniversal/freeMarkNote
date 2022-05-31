import { useRef } from 'react'

const usePersistFn = fn => {
  const ref = useRef(fn)
  ref.current = fn

  const persistFn = useRef()
  if (!persistFn.current) {
    persistFn.current = function (...args) {
      return ref.current.apply(this, args)
    }
  }

  return persistFn.current
}

export default usePersistFn
