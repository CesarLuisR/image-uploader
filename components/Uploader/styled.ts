import styled from "styled-components";

export const UploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 90%;
  max-width: 402px;
  height: 469px;
  padding: 36px 0;
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.035em;
  color: #4f4f4f;
`;

export const Subtitle = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #828282;
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

export const ChooseFileInput = styled.input.attrs((props) => ({
  type: "file",
  accept: "image/png, image/jpeg",
}))`
  display: none;
`;

export const ChooseFileButton = styled.button`
  background: #2f80ed;
  border-radius: 8px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #ffffff;
  padding: 8px 16px;
  margin-top: 8px;
  cursor: pointer;
  border: none;
  outline: none;
`;