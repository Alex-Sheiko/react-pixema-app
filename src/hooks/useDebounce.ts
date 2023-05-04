import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debounceValue, setDebounseValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounseValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debounceValue;
};
