import { useGetAPIRates } from "./useGetAPIRates";
import { Container } from "./Container";
import { Getter } from "./Getter";
import { Main } from "./Main";

export default function App() {

  const { requestState, stateAPI } = useGetAPIRates();

  if (stateAPI === 0 && (requestState === 2 || requestState === 3)) {
    return (<Container> <Getter /> </Container>);
  } else {
    return (<Container> <Main /> </Container>);
  };
};