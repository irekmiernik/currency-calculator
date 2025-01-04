import { useGetAPIRates } from "./useGetAPIRates";
import { Container } from "./Container";
import { Getter } from "./Getter";
import { Main } from "./Main";

export default function App() {

  const { requestState, stateUseGet } = useGetAPIRates();

  if ((stateUseGet === 0) && (requestState > 0) && (requestState < 4)) {
    return (<Container> <Getter /> </Container>);
  } else {
    return (<Container> <Main /> </Container>);
  };
};