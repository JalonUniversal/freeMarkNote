import React, { useState, useCallback } from 'react';
import { Provider } from '@/model';

// eslint-disable-next-line react/prop-types
const ContextContainer = ({ children }) => {
  const [list, setList] = useState([]);

  const updateList = useCallback(newList => {
    setList(newList);
  }, []);
  return <Provider value={{ list, updateList }}>{children}</Provider>;
};

export default ContextContainer;
