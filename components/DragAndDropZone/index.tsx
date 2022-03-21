import { Container, Text } from "./styled";
import Image from "next/image";
import React from "react";
import useDragAndDrop from "./hooks/useDragAndDrop";
import Modal from "../Modal";

const DragAndDropZone = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { handleDrop, handleDragOver, handleDragLeave, isDragging } =
    useDragAndDrop(setIsOpen);

  if (isOpen)
    return (
      <Modal
        content="The file must be an image png or jpeg"
        icon="error"
        color="red"
        close={() => setIsOpen(false)}
      />
    );

  return (
    <Container
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      dragging={isDragging}
    >
      <Image src="/main-image.svg" alt="image" width="100" height="100" />
      <Text>Drag & Drop your image here</Text>
    </Container>
  );
};

export default DragAndDropZone;
