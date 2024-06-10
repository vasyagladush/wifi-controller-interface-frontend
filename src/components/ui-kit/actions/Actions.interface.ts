export interface ActionsInterface {
  disabled?: boolean;
  label: string;
  color?: string;
  onClick: () => void;
  hidden?: boolean;
}

export interface ContextMenuProps {
  actions?: ActionsInterface[];
  externalUniqueId: string;
  externalOpenAction: (menuId: string | null) => void;
  externalOpenState: boolean;
}
