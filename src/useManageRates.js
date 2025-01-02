import { useState } from "react";

export const useManageRates = ({ initialRatesTable }) => {

  const [ifUpdateRates, setIfUpdateRates] = useState(false);

  let initialRates = {
    meta: { last_updated_at: '2024-11-27T23:59:59Z' },
    data: {
      CHF: { code: "CHF", value: 0.2167871857 },
      EUR: { code: 'EUR', value: 0.2326377229 },
      GBP: { code: 'GBP', value: 0.1938356928 },
      USD: { code: 'USD', value: 0.2457068400 },
    },
  };

  if (JSON.parse(localStorage.getItem("initialRates")) !== null)
    initialRates = JSON.parse(localStorage.getItem("initialRates"));
  initialRatesTable = initialRatesTable.concat(Object.values(initialRates.data));
  initialRatesTable = initialRatesTable.map((e, i) =>
    i < 2 ? e : { id: i, curriency: e.code, rate: (1 / e.value).toFixed(2) });
  const initialRatesDate = new Intl.DateTimeFormat().format(Date.parse(initialRates.meta.last_updated_at));
  const [ratesTable, setRatesTable] = useState(initialRatesTable);

  let ratesLabel;
  if (initialRatesDate === new Intl.DateTimeFormat().format(Date.now())) {
    ratesLabel = "Aktualne kursy walut pobrano z currencyapi.com";
  } else {
    ratesLabel = `Nie udało się pobrać aktualnych kursów walut z currencyapi.com.
      Pobrano kursy historyczne z dnia ${initialRatesDate}r.`;
  };

  const index = (curriency) => {
    for (let i = 0; i < ratesTable.length; i++) {
      if (ratesTable[i].curriency === curriency) return i;
    };
  };

  const getRate = (curriency) => ratesTable[index(curriency)].rate;

  const saveRate = (curriency, newRate) => {
    setRatesTable(ratesTable => ratesTable.map((oneRate) => {
      if (oneRate.curriency === curriency) return { ...oneRate, rate: newRate }; else return oneRate;
    }));
  };

  const toggleIfUpdateRates = () => setIfUpdateRates(ifUpdateRates => !ifUpdateRates);

  return {
    ratesTable,
    getRate,
    saveRate,
    ifUpdateRates,
    toggleIfUpdateRates,
    ratesLabel,
  };
};