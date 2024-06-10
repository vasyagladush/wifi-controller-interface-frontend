import { toast } from "react-toastify";
import { toastifyIcons } from "../components/notification/ToastifyIcons";

export enum NotificationTypes {
  INFO = "info",
  WARNING = "warning",
  DANGER = "danger",
  SUCCESS = "success",
}

const { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } = toastifyIcons();

export const useNotification = () => {
  const showNotification = (content: string, type = NotificationTypes.INFO) => {
    switch (type) {
      case NotificationTypes.INFO:
        toast.info(content, { icon: InfoIcon });
        break;
      case NotificationTypes.SUCCESS:
        toast.success(content, { icon: SuccessIcon });
        break;
      case NotificationTypes.WARNING:
        toast.warning(content, { icon: WarningIcon });
        break;
      case NotificationTypes.DANGER:
        toast.error(content, { icon: ErrorIcon });
        break;
    }
  };

  return { showNotification };
};
