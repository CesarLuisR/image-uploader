import React from "react";

interface ContextApp {
  file: string;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  loading: number;
  setLoading: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = React.createContext<ContextApp>({} as ContextApp);
