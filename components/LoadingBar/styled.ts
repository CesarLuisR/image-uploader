import styled from "styled-components";

interface BarProps {
  size: number;
}

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 60%;
  height: 143.57px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;

  @media (min-width: 768px) {
    width: 340.71px;
  }
`;

export const Bar = styled.div`
  background: #f2f2f2;
  border-radius: 8px;
  width: 100%;
  height: 6px;
`;

export const Load = styled.div<BarProps>`
  background: #2f80ed;
  width: ${(props) => props.size}%;
  height: 100%;
  border-radius: 8px;
`;