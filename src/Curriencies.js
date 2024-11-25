import { rateSet } from "./App";

export const Curriencies = () => (
  <>
    {rateSet.ratesTable.map(rate => (
      <option key={rate.id}>
        {rate.curriency}
      </option>
    ))}
  </>
);