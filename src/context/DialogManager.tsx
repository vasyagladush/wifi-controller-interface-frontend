import { ReactNode, createContext, useContext, useState } from "react";
import { DialogData } from "../components/dialog/Dialog.interface";
import { Dialog } from "../components/dialog/Dialog";

export interface IDialogContext {
  showDialog: (dialog: DialogData) => void;
  hideDialog: () => void;
}

const initial: IDialogContext = {
  showDialog: () => {},
  hideDialog: () => {},
};

const DialogContext = createContext(initial);

export const useDialogManager = () => useContext(DialogContext);

export const DialogManager: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [shownDialog, setShownDialog] = useState<DialogData | null>(null);

  const showDialog = (dialog: DialogData) => {
    setShownDialog(dialog);
  };

  const hideDialog = () => {
    setShownDialog(null);
  };

  return (
    <DialogContext.Provider value={{ showDialog, hideDialog }}>
      {children}
      {shownDialog && (
        <Dialog
          title={shownDialog.title}
          content={shownDialog.content}
          actions={shownDialog.actions}
          hideDialog={hideDialog}
        />
      )}
    </DialogContext.Provider>
  );
};
