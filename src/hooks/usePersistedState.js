import { useState, useRef, useEffect } from 'react';

const usePersistedStates = (name, defaultVal) => {
  const [value, setValue] = useState(defaultVal);
  const nameRef = useRef(name);

  useEffect(() => {
    try {
      const storedVal = localStorage.getItem(name);
      if(storedVal !== null) setValue(storedVal);
      else localStorage.setItem(name, defaultVal);
    } catch {
      setValue(defaultVal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(nameRef.current, value);
  }, [value]);

  useEffect(() => {
    const lastName = nameRef.current;
    if (name !== lastName) {
      localStorage.setItem(name, defaultVal);
      nameRef.current = name;
      localStorage.removeItem(lastName);
    }
  }, [name]);

  return [value, setValue];
}

export default usePersistedStates;