import { useState, useEffect } from "react";

export const useCurrentDate = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => { setDate(new Date()) }, 1000);
    return () => clearInterval(id);
  }, []);

  return date;
};
