import { useEffect, useState, useCallback } from 'react';

// const useHash = () => {
//   const lastHash = useRef();
//   const handleChangeHash = useRef((val) => {
//     location.hash = val;
//   });
//   const hash = location.hash;
//   useEffect(() => {
//     if (hash !== lastHash.current) {
//       console.log('hash: ', hash);
//       console.log('lastHash.current: ', lastHash.current);
//       lastHash.current = hash.substring(1);
//     }
//   }, [hash]);
//   return [lastHash.current, handleChangeHash.current];
// }

const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  const updateHash = useCallback(
    newHash => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );

  return [hash, updateHash];
};

export default useHash;