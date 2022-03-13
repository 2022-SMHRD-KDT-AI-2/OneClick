import { useCallback, useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const change = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, change, setValue];
};

export default useInput;
