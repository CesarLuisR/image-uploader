import React from "react";
import DragAndDropZone from "../DragAndDropZone";
import useFile from "./hooks/useFile";
import LoadingBar from "../LoadingBar";
import Uploaded from "../Uploaded";
import { Context } from "../../contexts/Global/Context";
import { Button, Text } from "../../styles";
import { UploaderContainer, Title, Subtitle, ChooseFileInput } from "./styled";

const Uploader = () => {
  const { fileInputRef, handleChooseFile, handleChange } = useFile();
  const { file, loading } = React.useContext(Context);

  if (loading !== 0) return <LoadingBar loading={loading} />;
  if (file && loading === 0) return <Uploaded />;
  return (
    <UploaderContainer>
      <Title> Upload your image </Title>
      <Subtitle> File should be Jpeg, Png,... </Subtitle>
      <DragAndDropZone />
      <Text>Or</Text>
      <ChooseFileInput ref={fileInputRef} onChange={handleChange} />
      <Button onClick={handleChooseFile}>Choose a file</Button>
    </UploaderContainer>
  );
};

export default Uploader;
