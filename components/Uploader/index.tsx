import React from "react";
import DragAndDropZone from "../DragAndDropZone";
import useFile from "./hooks/useFile";
import { Context } from "../../contexts/Global/Context";
import LoadingBar from "../LoadingBar";
import Uploaded from "../Uploaded";
import {
  UploaderContainer,
  Title,
  Subtitle,
  Text,
  ChooseFileInput,
  ChooseFileButton,
} from "./styled";

const Uploader = () => {
  const { fileInputRef, handleChooseFile, handleChange } = useFile();
  const { file, loading } = React.useContext(Context);

  if (loading !== 0) return <LoadingBar loading={loading} />;
  if (file && loading === 0) return <Uploaded />
  return (
    <UploaderContainer>
      <Title> Upload your image </Title>
      <Subtitle> File should be Jpeg, Png,... </Subtitle>
      <DragAndDropZone />
      <Text> Or </Text>
      <ChooseFileInput ref={fileInputRef} onChange={handleChange} />
      <ChooseFileButton onClick={handleChooseFile}>
        Choose a file
      </ChooseFileButton>
    </UploaderContainer>
  );
};

export default Uploader;
