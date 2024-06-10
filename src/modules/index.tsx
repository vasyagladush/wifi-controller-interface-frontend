// This is the main module where we will determine whether the user is logged in, not banned, etc.,
// and make necessary preparations (for example initializing the redux store wil the main data we need)

import React from "react";
import { createRoutesFromElements, Route } from "react-router-dom";
import OpenModule from "./open";
import PrivateModule from "./private";

export const mainRoutes = createRoutesFromElements(
  <>
    <Route index path="*" element={<OpenModule />} />
    <Route path="private/*" element={<PrivateModule />} />
  </>
);
