import {
  createContext,
  type ReactElement,
  useContext,
  useState,
  ReactNode,
} from "react";
import { Modal } from "../components/modal/Modal";

export interface IModalContext {
  modals: Array<{ modal: ReactElement; canHideOnBackground?: boolean }>;
  addModal: (modal: ReactElement, canHideOnBackground?: boolean) => void;
  removeLastModal: () => void;
}

const initial: IModalContext = {
  modals: [],
  addModal: () => {},
  removeLastModal: () => {},
};

const ModalContext = createContext(initial);

export const useModalManager = () => useContext(ModalContext);

export const ModalManager: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modals, setModals] = useState<
    Array<{ modal: ReactElement; canHideOnBackground?: boolean }>
  >([]);

  const addModal = (modal: ReactElement, canHideOnBackground?: boolean) => {
    setModals([...modals, { modal, canHideOnBackground }]);
  };

  const removeLastModal = () => {
    const copy = [...modals];
    copy.pop();
    setModals(copy);
  };

  return (
    <ModalContext.Provider value={{ addModal, removeLastModal, modals }}>
      {children}
      {modals.map(
        (m: { modal: ReactElement; canHideOnBackground?: boolean }) => (
          <Modal
            key={m.modal.key}
            canHideOnBackground={m.canHideOnBackground}
            onHide={removeLastModal}
          >
            {m.modal}
          </Modal>
        )
      )}
    </ModalContext.Provider>
  );
};
