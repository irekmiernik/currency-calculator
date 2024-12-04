import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";
import { Calculator } from "./Calculator";
import { Updater } from "./Updater";
import { Dater } from "./Dater";
import { useManageRates } from "./useManageRates";
export let manageRates = null;

let initialRatesTable = [
  { id: 0, curriency: "---", rate: 0.00 },
  { id: 1, curriency: "PLN", rate: 1.00 },
];

export default function App() {

  manageRates = useManageRates({ initialRatesTable });

  return (
    <Container>
      <Dater />
      <Header title="Kalkulator walutowy" />
      {(manageRates.switcher && <Calculator />) || (!manageRates.switcher && <Updater />)}
      <Footer date="2024" />
    </Container>
  );
};