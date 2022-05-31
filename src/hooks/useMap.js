import { useState, useCallback } from 'react';

const useMap = () => {
  const [val, setVal] = useState(new Map());

  const add = (key, value) => {
    val.set(key, value);
  }
  return {
    val: val,
    add,
  }
}

export default useMap;