import { Route, Routes } from "react-router-dom";
import { AccessPointsList } from "./access-points-list/AccessPointsList";
import { AddNewAccessPoint } from "./add-new/AddNewAccessPoint";

const AccessPointsModule = () => {
  return (
    <Routes>
      <Route index element={<AccessPointsList />} />
      {/* <Route path="new" element={<AddNewAP />} /> */}
      <Route path="edit/:id" element={<AddNewAccessPoint editing />} />
    </Routes>
  );
};

export default AccessPointsModule;
