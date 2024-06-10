export interface DialogAction {
  handler?: () => void;
  type: "primary" | "outline" | "delete";
  text: string;
}

export interface DialogData {
  title: string;
  content?: string;
  actions: DialogAction[];
}

export interface IDialogProps extends DialogData {
  hideDialog: () => void;
}
