import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";
import { Calculator } from "./Calculator";
import { Updater } from "./Updater";
import { Dater } from "./Dater";
import { useManageRates } from "./useManageRates";
export let rateSet = null;

const initialRatesTable = [
  { id: 0, curriency: "---", rate: 0.00 },
  { id: 1, curriency: "PLN", rate: 1.00 },
  { id: 2, curriency: "EUR", rate: 4.56 },
  { id: 3, curriency: "USD", rate: 3.95 },
  { id: 4, curriency: "GBP", rate: 5.30 },
  { id: 5, curriency: "CHF", rate: 4.88 },
];

export default function App() {

  rateSet = useManageRates({ initialRatesTable });

  return (
    <Container>
      <Dater />
      <Header title="Kalkulator walutowy" />
      {(rateSet.switcher && <Calculator />) || (!rateSet.switcher && <Updater />)}
      <Footer date="2024" />
    </Container>
  );
};