import { useState } from "react";

function useSubmit(uri) {
  const [res, setRes] = useState(null);
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async (data) => {
    setIsPending(true);
    try {
      const options = {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(uri, options);

      if (!response.ok)
        throw new Error("sth wrong with request, please try again!");

      const result = await response.json();
      setTimeout(() => {
        setIsPending(false);
        setRes(result);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setIsPending(false);
        setErr(error);
      }, 1000);
    }
  };

  return [fetchData, res, err, isPending];
}

export { useSubmit };
