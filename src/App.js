import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";
// import { Calculator } from "./Calculator";
// import { Updater } from "./Updater";
// import { Dater } from "./Dater";
import { Getter } from "./Getter";
// import { useManageRates } from "./useManageRates";
import { useGetRates } from "./useGetRates";
export let manageRates = null;
export let ratesState = null;

/* let initialRatesTable = [
  { id: 0, curriency: "---", rate: 0.00 },
  { id: 1, curriency: "PLN", rate: 1.00 },
]; */

export default function App() {

  ratesState = useGetRates();

  if (ratesState === 0) {

    return (
      <Container>
        <Header title="Kalkulator walutowy" />
        <Getter />
        <Footer date="2024" />
      </Container>
    );

  } else {

    // manageRates = useManageRates({ initialRatesTable });

    return (
      <Container>
        {/* <Dater /> */}
        <Header title="Kalkulator walutowy" />
        {/* {(manageRates.switcher && <Calculator />) || (!manageRates.switcher && <Updater />)} */}
        <Footer date="2024" />
      </Container>
    );
  }

};