import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Container, IconContainer, ContentContainer, Button } from "./styled";

const Modal = ({ content, icon, color, close }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const container = document.getElementById("modal");

  if (!mounted || !container) return null;
  return mounted
    ? createPortal(
        <Container>
          <IconContainer className="material-icons" color={color}>{icon}</IconContainer>
          <ContentContainer>{content}</ContentContainer>
          <Button onClick={close}>Close</Button>
        </Container>,
        container
      )
    : null;
};

type ModalProps = {
  content: string;
  icon: string;
  color: string;
  close: () => void;
};

export default Modal;
