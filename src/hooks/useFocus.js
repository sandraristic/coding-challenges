import { useEffect, useRef, useState } from 'react';

const useFocus = () => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener('focus', handleFocus);
      currentRef.addEventListener('blur', handleBlur);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('focus', handleFocus);
        currentRef.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return { ref, isFocused };
};

export default useFocus;
