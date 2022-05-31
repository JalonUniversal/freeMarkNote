import { useState, useEffect } from 'react';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const keyPressCallback = ({ key }) => {
    if(key === targetKey) setKeyPressed(true);
  }
  const keyUpCallback = ({ key }) => {
    if(key === targetKey) setKeyPressed(false);
  }
  useEffect(() => {
    window.addEventListener('keypress', keyPressCallback);
    window.addEventListener('keyup', keyUpCallback);
    return () => {
      window.removeEventListener('keypress', keyPressCallback);
      window.removeEventListener('keyup', keyUpCallback);
    }
  }, []);

  return keyPressed;
}

export default useKeyPress;