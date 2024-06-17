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
  const showNotification = (content: any, type = NotificationTypes.INFO) => {
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
        if ("detail" in content && content.detail) {
          console.log(toast.error(content.detail, { icon: ErrorIcon }));
        } else {
          try {
            console.log(
              toast.error(JSON.stringify(content), { icon: ErrorIcon })
            );
          } catch {
            toast.error("Something went wrong", { icon: ErrorIcon });
          }
        }
        break;
    }
  };

  return { showNotification };
};
