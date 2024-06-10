import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { NotificationContainer } from "./components/notification/NotificationContainer";
import { ModalManager } from "./context/ModalManager";
import { UserContextProvider } from "./context/UserContextProvider";
import { DialogManager } from "./context/DialogManager";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <UserContextProvider>
            <ThemeProvider theme={defaultTheme}>
              <ModalManager>
                <DialogManager>
                  <Outlet />
                </DialogManager>
              </ModalManager>
              <NotificationContainer />
            </ThemeProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
