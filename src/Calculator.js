import { useState } from "react";
import { manageRates } from "./App";
import { Curriencies } from "./Curriencies";
import { StyledForm, StyleP, StyleStrong, StyledButton } from "./styled";

export const Calculator = () => {

  const [inValue, setInValue] = useState("");
  const [outValue, setOutValue] = useState("");
  const [inCurrency, setInCurrency] = useState("");
  const [outCurrency, setOutCurrency] = useState("");

  const calculateValue = (inValue, rateIn, rateOut) =>
    (rateIn > 0 & rateOut > 0 & +inValue > 0) ? ((1 / (rateIn / rateOut)) * +inValue).toFixed(2) : "";

  const onOblicz = (event) => {
    event.preventDefault();
    let a = calculateValue(inValue, manageRates.getRate(inCurrency), manageRates.getRate(outCurrency));
    setOutValue(a);
  };

  return (
    <>
      <StyledForm onSubmit={onOblicz}>
        <StyleP $label>
          <input
            value={inValue}
            onChange={({ target }) => setInValue(target.value)}
            type="number" step="0.01" min="0.01"
            placeholder="Twoja wartość"
            autoFocus
          />
          <select
            value={inCurrency}
            onChange={({ target }) => {
              setOutValue("");
              setInCurrency(target.value)
            }}
          >
            <Curriencies />
          </select>
          <StyleStrong> = </StyleStrong>
          <input
            value={outValue}
            type="number"
            readOnly={true}
            placeholder="Obliczona wartość"
          />
          <select
            value={outCurrency}
            onChange={({ target }) => {
              setOutValue("");
              setOutCurrency(target.value)
            }}
          >
            <Curriencies />
          </select>
        </StyleP>
        <p>
          <StyledButton
            disabled={inCurrency === "" || outCurrency === ""
              || inCurrency === "---" || outCurrency === "---"}
          >
            Przelicz
          </StyledButton>
        </p>
        <StyleP $dater>
          Aktualne kursy walut pobrano z currencyapi.com
          <StyleStrong
            $rates
            onClick={manageRates.toggleSwitcher}
          >
            (Wprowadź własne kursy)
          </StyleStrong>
        </StyleP>
      </StyledForm>
    </>
  )
};