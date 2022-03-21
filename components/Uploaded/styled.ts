import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 90%;
  max-width: 402px;
  height: 430px;
  padding: 36px 0;

  .material-icons {
    color: #219653;
    font-size: 35px;
  }

  .image {
    border-radius: 12px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  height: 225px;
  margin: 20px 0;
`;

export const UrlContainer = styled.div`
  display: grid;
  grid-template-columns: 77% 20%;
  column-gap: 2%;
  width: 90%;
  height: 34px;
  background: #f6f8fb;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const FileUrl = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #4f4f4f;
  text-decoration: none;
  padding: 10px;
  overflow: hidden;
`;

export const Button = styled.button<{ font?: number }>`
  background: #2f80ed;
  border-radius: 8px;
  padding: 9px 16px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #ffffff;
  height: 95%;
  max-height: 34px;
  border: none;
  outline: none;
  cursor: pointer;
`;
