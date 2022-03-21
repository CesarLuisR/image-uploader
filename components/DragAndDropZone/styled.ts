import styled from "styled-components";

interface ContainerProps {
  dragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f6f8fb;
  border: 1px dashed #97bef4;
  box-sizing: border-box;
  border-radius: 12px;
  width: 90%;
  user-select: none;
  padding: 35px 0;
  margin: 30px 0 10px 0;
  cursor: pointer;
  transform: ${(props) => props.dragging && "scale(1.1)"};

  @media (min-width: 768px) {
    width: 80%;
  }
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
