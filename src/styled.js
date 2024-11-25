import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
    max-height: 1000px;
    max-width: 600px;
    padding: 20px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5%;
    text-align: center;
`;

export const StyleP = styled.p`
    background-color: #fff;
    text-align: center;
    font-weight: bold;
    max-width: 700px;
  
    ${({ $dater }) => $dater && css`
        text-align: right;
        font-family: monospace;
        color: #00000099;
        margin: 0 0 10px;
        font-weight: normal;  
    `};

    ${({ $label }) => $label && css`
        font-weight: bold;
        max-width: 700px;
        background-color: #fff;  
    `};
`;

export const StyledHeader = styled.header`
  color: #009999;
  text-align: center;
  padding: 0;
  font-size: 25px;
  font-weight: 700;
  text-shadow: 1px -1px 1px #009999;
`;

export const StyleFooter = styled.footer`
  font-family: monospace;
  color: #00000077;
  text-align: center;
  margin: 0 auto;
  max-width: 400px;
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  background-color: #fff;
  max-width: 600px;
  text-align: center;
`;

export const StyleStrong = styled.strong`
  font-weight: bold;
  max-width: 700px;
  background-color: #fff;
  padding: 0px 5px;

  ${({ $rates }) => $rates && css`
    font-weight: bold;
    max-width: 700px;
    background-color: #fff;
    font-size: small;
    font-style: italic;
    text-decoration: underline;
    color: #009999;

    &:hover {
      background-color: #00ffff;
    }`
  };
`;

export const StyledButton = styled.button`
color: #fff;
background-color: hsl(180, 100%, 30%);
border-style: none;
padding: 5px 10%;
transition: 1s;

&:hover {
background-color: hsl(180, 100%, 40%);
transform: scale(1.1);
}

&:disabled {
color: #aaa;
background-color: #fff;
border-style: solid;
};
`;