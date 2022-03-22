import styled from "styled-components";

interface ButtonProps {
  fontSize?: string;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #fafafb;
  position: relative;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #a9a9a9;
  padding: 24px 0;
`;

export const Button = styled.button<ButtonProps>`
  background: #2f80ed;
  border-radius: 8px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "12px"};
  height: 30px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #ffffff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Text = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.035em;
  color: #bdbdbd;
`;