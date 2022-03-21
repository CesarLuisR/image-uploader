import React from "react";
import { Context } from "../../../contexts/Global/Context";

const useFile = () => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { setFile, setLoading } = React.useContext(Context);

  const handleChooseFile = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    readFile(file);
  };

  const readFile = (file: any) => {
    const reader = new FileReader();
    setLoading(0);

    reader.readAsDataURL(file);

    reader.onprogress = async (e) => {
      // The real one is very fast, we need to simulate it
      // if (e.lengthComputable) {
      //   const percentLoaded = Math.round((e.loaded / e.total) * 100);
      //   setLoading(percentLoaded);
      // }

      // Simulate the loading
      let percentLoaded = 0;

      const interval = setInterval(() => {
        setLoading(percentLoaded++);

        if (percentLoaded === 100) {
          clearInterval(interval);
          setLoading(0);
        }
      }, 5);
    };

    reader.onload = (e: any) => {
      setFile(e.target.result);
      setLoading(0);
    };
  };

  return {
    fileInputRef,
    handleChooseFile,
    handleChange,
    readFile
  };
};

export default useFile;
