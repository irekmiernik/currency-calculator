import { manageRates } from "./App";

export const Curriencies = () => (
  <>
    {manageRates.ratesTable.map(rate => (
      <option key={rate.id}>
        {rate.curriency}
      </option>
    ))}
  </>
);