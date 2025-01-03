import { useGetAPIRates } from "./useGetAPIRates";
import { Container } from "./Container";
import { Getter } from "./Getter";
import { Main } from "./Main";

export default function App() {

  const { requestState } = useGetAPIRates();

  if (requestState > 0) {
    return (<Container> <Getter /> </Container>);
  } else {
    return (<Container> <Main /> </Container>);
  };
};