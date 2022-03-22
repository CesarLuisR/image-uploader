import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Container, IconContainer, ContentContainer } from "./styled";
import { Button } from "../../styles";

type ModalProps = {
  content: string;
  icon: string;
  color: string;
  close: () => void;
};

const ModalUI = ({ content, icon, color, close }: ModalProps) => {
  return (
    <Container>
      <IconContainer className="material-icons" color={color}>
        {icon}
      </IconContainer>
      <ContentContainer>{content}</ContentContainer>
      <Button onClick={close}>Close</Button>
    </Container>
  );
};

const Modal = (props: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const container = document.getElementById("modal");

  if (!mounted || !container) return null;
  return createPortal(<ModalUI {...props} />, container);
};

export default Modal;
