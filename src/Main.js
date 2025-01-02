import { useManageRates } from "./useManageRates";
import { Dater } from "./Dater";
import { Header } from "./Header";
import { Calculator } from "./Calculator";
import { Updater } from "./Updater";
import { Footer } from "./Footer";
export let manageRates;

let initialRatesTable = [
  { id: 0, curriency: "---", rate: 0.00 },
  { id: 1, curriency: "PLN", rate: 1.00 },
];

export const Main = () => {
  manageRates = useManageRates({ initialRatesTable });
  const { ifUpdateRates } = manageRates;
  return (
    <>
      <Dater />
      <Header title="Kalkulator walutowy" />
      {(!ifUpdateRates && <Calculator />) || (ifUpdateRates && <Updater />)}
      <Footer date="2024" />
    </>
  );
};