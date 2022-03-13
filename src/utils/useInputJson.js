import { useCallback, useState } from "react";

const useInputJson = (initValue) => {
  const [value, setValue] = useState(initValue);
  const change = useCallback(
    (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    },
    [value]
  );
  return [value, change, setValue];
};

export default useInputJson;
