import { Context } from "./Context";
import React from "react";

const AppProvider = ({ children }: AppProviderProps) => {
  const [file, setFile] = React.useState("");
  const [loading, setLoading] = React.useState(0);

  return (
    <Context.Provider value={{ file, setFile, loading, setLoading }}>
      {children}
    </Context.Provider>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export default AppProvider;
