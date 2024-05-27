import { PropsWithChildren } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import styles from "./Modal.module.css";
import Icon from "../Icon";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onDismiss: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}>;
export default function Modal({
  isOpen,
  onDismiss,
  title,
  children,
}: ModalProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => onDismiss(false)}
        className={styles.wrapper}
      >
        <div className={styles.modal}>
          <DialogPanel className={styles.panel}>
            <Icon
              name="x"
              size={24}
              color="#24053d"
              onClick={() => onDismiss(false)}
              className={styles.close}
            />
            {title && <DialogTitle>{title}</DialogTitle>}

            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
