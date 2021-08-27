import{ useState } from "react";

export default function useInput(init) {
  const [value, setValue] = useState(init);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(init),
  ];
}
