import { useState } from "react";

export const useGetRates = () => {

  const [state, setState] = useState(0);

  const request = new XMLHttpRequest();
  request.open("GET",
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_39dcUeauuADbfc4CKypSdtm3n6uab6C1bnpQ8U6O&currencies=EUR%2CUSD%2CGBP%2CCHF%2CJPY&base_currency=PLN"
  );
  request.responseType = "json";
  request.send();
  request.onloadend = () => {
    setState(request.status);
    if (state === 200)
      localStorage.setItem("initialRates", JSON.stringify(request.response));
  };
  return state;
};