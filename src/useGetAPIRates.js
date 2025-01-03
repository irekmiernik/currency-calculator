import { useState } from "react";

export const useGetAPIRates = () => {

  const [stateUseGet, setStateUseGet] = useState(0);

  let requestState = 0;
  if ((JSON.parse(localStorage.getItem("initialRates")) === null) ||
    (new Intl.DateTimeFormat().format(
      Date.parse(JSON.parse(localStorage.getItem("initialRates")).meta.last_updated_at))
      !== new Intl.DateTimeFormat().format(Date.now()))) {

    const request = new XMLHttpRequest();
    request.responseType = "json";
    request.open("GET",
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_39dcUeauuADbfc4CKypSdtm3n6uab6C1bnpQ8U6O&currencies=EUR%2CUSD%2CGBP%2CCHF%2CJPY&base_currency=PLN");
    requestState = request.readyState;
    request.onloadend = () => {
      if (request.status === 200)
        localStorage.setItem("initialRates", JSON.stringify(request.response));
      setStateUseGet(1);
    };
    request.send();
  };
  return {
    requestState,
    stateUseGet,
  };
};