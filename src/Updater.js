import { useState } from "react";
import { manageRates } from "./Main";
import { Curriencies } from "./Curriencies";
import { StyledForm, StyleP, StyleStrong, StyledButton } from "./styled";

export const Updater = () => {

  const { getRate, saveRate, toggleIfUpdateRates } = manageRates;
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [showRate, setShowRate] = useState(true);

  const onClick = (event) => {
    event.preventDefault();
    if (showRate) {
      setRate(getRate(currency));
    } else {
      setShowRate(true);
      saveRate(currency, rate);
    }
  };

  return (
    <StyledForm onSubmit={onClick}>
      <StyleP>
        <input
          value={rate}
          onChange={({ target }) => {
            setShowRate(false);
            setRate(target.value)
          }}
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Aktualny kurs"
          autoFocus
        />
        <select
          value={currency}
          onChange={({ target }) => {
            setShowRate(true);
            setRate("");
            setCurrency(target.value)
          }}
        >
          <Curriencies />
        </select>
      </StyleP>
      <p>
        <StyledButton
          disabled={currency === "" || currency === "---" || currency === "PLN"}
        >
          {showRate
            ? "Pokaż kurs"
            : "Zapisz kurs"}
        </StyledButton>
      </p>
      <p>
        <StyleStrong
          $rates
          onClick={toggleIfUpdateRates}
        >
          Powrót do kalkulacji
        </StyleStrong>
      </p>
    </StyledForm>
  )
};