import { Route, Routes } from "react-router-dom";
import { APIKeysList } from "./list/APIKeysList";
import { APIKeyCreate } from "./create/APIKeyCreate";
import { ApiKeysContextProvider } from "./context/ApiKeysContextProvider";
import { APIKeysDetails } from "./details/APIKeysDetails";

const ApiKeysModule = () => {
  return (
    <ApiKeysContextProvider>
      <Routes>
        <Route index element={<APIKeysList />} />
        <Route path="create" element={<APIKeyCreate />} />
        <Route path=":id/details" element={<APIKeysDetails />} />
      </Routes>
    </ApiKeysContextProvider>
  );
};

export default ApiKeysModule;
