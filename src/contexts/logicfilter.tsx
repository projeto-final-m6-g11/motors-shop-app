import { createContext, useState } from "react";

export interface MainContextData{
  setCar                :  Function
  car                   :  boolean
  motocyclesFilter      :  boolean
  setmotocyclesFilter   :  Function
}
export interface InterfaceProduct{
  srcImg: string 
  category: string
  title: string
  textDescription: string
  price: string
}
interface MainContextProviderType{
  children :React.ReactNode;
}

export const LogicFilterContext = createContext({}as MainContextData);

export const LogicFilterProvider = ({ children }: MainContextProviderType) => {

  const [car, setCar] = useState<boolean>(false);
  const [motocyclesFilter, setmotocyclesFilter] = useState<boolean>(false);
  

  return (
    <LogicFilterContext.Provider value={{car,setCar,motocyclesFilter,setmotocyclesFilter}}>
      {children}
    </LogicFilterContext.Provider>
  );
};
