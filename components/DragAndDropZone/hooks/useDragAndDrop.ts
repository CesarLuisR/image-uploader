import React from "react";
import useFile from "../../Uploader/hooks/useFile";

const useDragAndDrop = (setIsOpen: (state: boolean) => void) => {
  const { readFile } = useFile();
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    if (!/image/.test(e.dataTransfer.files[0].type)) return setIsOpen(true);

    readFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return {
    isDragging,
    handleDrop,
    handleDragOver,
    handleDragLeave,
  };
};

export default useDragAndDrop;
