import React from 'react';
import { usePersistedState } from '@/hooks';

// eslint-disable-next-line react/prop-types
const MyComponent = ({ name }) => {
  const [val, setVal] = usePersistedState(name, 10);
  return (
    <input
      value={val}
      onChange={e => {
        setVal(e.target.value);
      }}
    />
  );
};

export default MyComponent;