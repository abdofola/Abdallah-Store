import { useState } from "react";

export default function useInput(init) {
  const [value, setValue] = useState(init);

  const handleChange = (e) => {
    setValue(e.target.value);
  } 
  
  return [
    {
      value,
      onChange: handleChange,
    },
    () => setValue(init),
  ];
}
