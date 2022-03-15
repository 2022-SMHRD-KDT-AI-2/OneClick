import React, { useCallback, useState } from "react";

function useSelectImage() {
  const [base64, setBase64] = useState("" | ArrayBuffer);
  const [image, setImage] = useState();
  const change = useCallback((e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setBase64(reader.result);
      setImage(e.target.files[0]);
    };
  }, []);
  return [base64, image, change];
}

export default useSelectImage;
