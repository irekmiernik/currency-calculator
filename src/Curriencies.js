import { manageRates } from "./Main";

export const Curriencies = () => {
  const { ratesTable } = manageRates;

  return (
    <>
      {ratesTable.map(rate => (
        <option key={rate.id}>
          {rate.curriency}
        </option>
      ))}
    </>
  );
};