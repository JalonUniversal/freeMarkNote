import { useEffect, useRef } from 'react';

const useInterval = (delay = 1000, fn = () => {}) => {
  const timer = useRef(null);
  const savedCallback = useRef(null);
  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  useEffect(() => {
    timer.current = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => {
      timer.current && clearInterval(timer.current);
    }
  }, [delay, fn]);
}

export default useInterval;