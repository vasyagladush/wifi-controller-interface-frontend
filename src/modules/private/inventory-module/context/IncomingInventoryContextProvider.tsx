import {
  createContext,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
// import { AddedProduct } from "../incoming-inventory/types";

interface IIncomingInventoryContext {
  addedProducts: any[];
  setAddedProducts: Dispatch<SetStateAction<any[]>>;
  supplierId: string;
  setSupplierId: (id: string) => void;
  clearPo: () => void;
}

const IncomingInventoryContext = createContext<IIncomingInventoryContext>({
  addedProducts: [],
  setAddedProducts: () => null,
  supplierId: "",
  setSupplierId: () => null,
  clearPo: () => null,
});

export const IncomingInventoryContextProvider: FC<{
  children: ReactElement;
}> = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState<any[]>([]);
  const [supplierId, setSupplierId] = useState<string>("");

  const clearPo = () => {
    setAddedProducts([]);
    setSupplierId("");
  };

  return (
    <IncomingInventoryContext.Provider
      value={{
        addedProducts,
        setAddedProducts,
        supplierId,
        setSupplierId,
        clearPo,
      }}
    >
      {children}
    </IncomingInventoryContext.Provider>
  );
};

export const useIncomingInventoryContext = () => {
  return useContext(IncomingInventoryContext);
};
