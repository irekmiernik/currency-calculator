import { useState } from "react";
import { useGetRates } from "./useGetRates";

export const useManageRates = ({ initialRatesTable }) => {

  let ratesState = useGetRates();

  let initialRates = {
    meta: { last_updated_at: '2024-11-27T23:59:59Z' },
    data: {
      CHF: { code: "CHF", value: 0.2167871857 },
      EUR: { code: 'EUR', value: 0.2326377229 },
      GBP: { code: 'GBP', value: 0.1938356928 },
      USD: { code: 'USD', value: 0.2457068400 },
    },
  };

  initialRates = JSON.parse(localStorage.getItem("initialRates")) || initialRates;

  let initialRatesDate = new Intl.DateTimeFormat().format(Date.parse(initialRates.meta.last_updated_at));
  initialRatesTable = initialRatesTable.concat(Object.values(initialRates.data));


  initialRatesTable = initialRatesTable.map((e, i) =>
    i < 2 ? e : { id: i, curriency: e.code, rate: e.value }
  );

  const [ratesTable, setRatesTable] = useState(initialRatesTable);

  const index = (curriency) => {
    for (let i = 0; i < ratesTable.length; i++) {
      if (ratesTable[i].curriency === curriency) return i;
    }
  };

  const getRate = (curriency) => ratesTable[index(curriency)].rate;

  const saveRate = (curriency, newRate) => {
    setRatesTable(ratesTable => ratesTable.map((oneRate) => {
      if (oneRate.curriency === curriency) return { ...oneRate, rate: newRate }; else return oneRate;
    }))
  };

  const [switcher, setSwitcher] = useState(true);
  const toggleSwitcher = () => setSwitcher(switcher => !switcher);

  return {
    ratesTable,
    getRate,
    saveRate,
    switcher,
    toggleSwitcher,
    ratesState,
    initialRatesDate,
  };
};

