import { useState, useEffect } from "react";

export const useGetRates = () => {

  const [ratesState, setRatesState] = useState(0);
  const [serverResponse, setServerResponse] = useState();

  useEffect(() => {
    if ((JSON.parse(localStorage.getItem("initialRates")) == null) ||
      (new Intl.DateTimeFormat().format(
        Date.parse(JSON.parse(localStorage.getItem("initialRates")).meta.last_updated_at))
        !== new Intl.DateTimeFormat().format(Date.now()))) {
      const request = new XMLHttpRequest();
      request.open("GET",
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_39dcUeauuADbfc4CKypSdtm3n6uab6C1bnpQ8U6O&currencies=EUR%2CUSD%2CGBP%2CCHF%2CJPY&base_currency=PLN");
      request.responseType = "json";
      request.send();
      request.onabort = () => {
        setRatesState(request.status);
        setServerResponse(request.response);
        return;
      };
      request.onerror = () => {
        setRatesState(request.status);
        setServerResponse(request.response);
        return;
      };
      request.onloadend = () => {
        if (request.status === 200) {
          localStorage.setItem("initialRates", JSON.stringify(request.response));
        };
        setRatesState(request.status);
        setServerResponse(request.response);
        return;
      };
    };
  }, [ratesState]);
  return {
    ratesState,
    serverResponse,
  };
};