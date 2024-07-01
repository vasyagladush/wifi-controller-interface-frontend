import Api from "../../../../../../util/api";
import { useState } from "react";
import {
  transformAPWithNetworkFormValuesToServer,
  transformNetworkToServerInput,
} from "../data-transformers/access-points";
import { NewAccessPointFormValues } from "../types";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../../hooks/useNotification";

export const useUpdateAccessPoint = () => {
  const { showNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const updateAccessPoint = async (
    accessPointId: string,
    networkId: string,
    formData: NewAccessPointFormValues,
    files?: File[],
    imagesToDetach?: string[]
  ) => {
    try {
      setLoading(true);
      const apiDataAccessPoint = transformAPWithNetworkFormValuesToServer(
        formData,
        !!accessPointId
      );
      const apiDataNetwork = transformNetworkToServerInput(formData);

      // const accessPointResult = await Api.updateAccessPoint(accessPointId, apiDataAccessPoint);
      // const networkResult = await Api.updateNetwork(
      //   accessPointId,
      //   networkId,
      //   apiDataNetwork
      // );

      // if (files && files.length > 0) {
      //   await Api.attachImagesToAccessPointNetwork(
      //     accessPointResult?.result._id,
      //     networkId,
      //     files
      //   );
      // }
      // if (imagesToDetach && imagesToDetach?.length > 0) {
      //   await Api.detachImagesFromAccessPointNetwork(
      //     accessPointResult?.result._id,
      //     networkId,
      //     imagesToDetach
      //   );
      // }
      // await Api.pushUpdatedAccessPointToIntegrations(accessPointResult.result._id);

      showNotification(
        "AccessPoint changed successfully",
        NotificationTypes.SUCCESS
      );
      setLoading(false);
      // return { accessPointResult, networkResult: {} };
      return {};
    } catch (e: any) {
      console.error(e);
      showNotification(
        e?.error?.message ?? "Something went wrong",
        NotificationTypes.WARNING
      );
      try {
        // await Api.pushUpdatedAccessPointToIntegrations(accessPointId);
      } catch (e: any) {
        console.error(
          "An error occurred while pushing updated accessPoint to integrations",
          e
        );
      }
    }
    setLoading(false);
  };
  return { updateAccessPoint, loading };
};
