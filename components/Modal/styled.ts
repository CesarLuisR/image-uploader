import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: max-content;
  height: max-content;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  z-index: 10;
`;

export const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  font-size: 35px;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #4f4f4f;
  margin-bottom: 20px;
`;