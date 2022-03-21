import { Title } from "../Uploader/styled";
import {
  Button,
  Container,
  FileUrl,
  ImageContainer,
  UrlContainer,
} from "./styled";
import Image from "next/image";
import React from "react";
import { Context } from "../../contexts/Global/Context";
import Modal from "../Modal";

const Uploaded = () => {
  const { file, setFile } = React.useContext(Context);
  const [isOpen, setIsOpen] = React.useState(false);

  if (isOpen)
    return (
      <Modal
        content="Copied to clipboard successfully!"
        icon="check_circle"
        color="#219653"
        close={() => setIsOpen(false)}
      />
    );

  return (
    <Container>
      <span className="material-icons">check_circle</span>
      <Title> Uploaded Successfully! </Title>
      <ImageContainer>
        <Image className="image" src={file} layout="fill" alt="Your image" />
      </ImageContainer>
      <UrlContainer>
        <FileUrl href={file} target="_blank" rel="noopener noreferrer">
          {file}
        </FileUrl>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(file);
            setIsOpen(true);
          }}
        >
          Copy link
        </Button>
      </UrlContainer>
      <Button onClick={() => setFile("")} font={10}>
        Get Back
      </Button>
    </Container>
  );
};

export default Uploaded;
