import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuthCheck } from "../../hooks/useAuthCheck";

export const OpenLayout = () => {
  const { checkSignInStatus } = useAuthCheck();

  const asyncCheck = async () => {
    await checkSignInStatus();
  };

  useEffect(() => {
    asyncCheck();
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <Outlet />
      </div>
    </div>
  );
};
