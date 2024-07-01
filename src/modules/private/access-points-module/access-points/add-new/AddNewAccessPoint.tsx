import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import BasicInfo from "./components/AccessPointBasicInfo";
import NetworksList from "./components/NetworksList";
import {
  useNavigate,
  useParams,
  useBlocker,
  useLocation,
} from "react-router-dom";
import { AnimateAppearanceWrapper } from "../../../../../components/animate-appearence/AnimateAppearanceWrapper";
import { addNewAccessPointSchema } from "../validation";
import {
  Button,
  ImageUploader,
  PageTitle,
  Spinner,
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import { AccessPointFormValues, NetworkFormValues } from "./types";
import { useGetAccessPoint } from "./hooks/useGetAccessPoint";
import { useUpdateAccessPoint } from "./hooks/useEditAccessPoint";
import { useDialogManager } from "../../../../../context/DialogManager";
import AccessPointPreview from "./components/AccessPointPreview";
import NetworkBasicInfo from "./components/NetworkBasicInfo";
// import { AccessPointNetworkApiType } from "../../../../../util/types";
import { transformNetworkServerInputToFormValues } from "./data-transformers/access-points";
import { AppRoutes } from "../../../../../constants/routes";
import { useSetDefaultValues } from "./hooks/useSetDefaultValues";
import { useCheckModified } from "./hooks/useCheckModified";
import { AccessPointsFilters } from "../access-points-list/hooks/useAccessPointsList";
import NetworkWirelessConfig from "./components/NetworkWirelessConfig";
import NetworkSecurityConfig from "./components/NetworkSecurityConfig";
import { useGetNetwork } from "./hooks/useGetNetwork";
import { components } from "../../../../../util/backend-api-types";

const LoadingNetworkSpinner = styled(Spinner)`
  margin: 20px auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;

const LeftSide = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const RightSide = styled.div`
  flex: 2.5;
`;

export const AddNewAccessPoint: React.FunctionComponent<{
  editing?: boolean;
}> = ({ editing }) => {
  const navigate = useNavigate();
  const { showDialog } = useDialogManager();
  const { id: accessPointId } = useParams();
  const { state } = useLocation();
  const incomingNetworkFilters: Partial<AccessPointsFilters> = state?.filters;

  const { updateAccessPoint, loading: updateLoading } = useUpdateAccessPoint();
  const {
    accessPointFormInfo,
    accessPointBackendInfo,
    refreshAccessPointInfo,
    loading,
  } = useGetAccessPoint(accessPointId);
  const networkId = state?.networkId;
  const {
    networkFormInfo,
    refreshNetworkInfo,
    loading: loadingNetwork,
  } = useGetNetwork(networkId ?? accessPointBackendInfo?.networks[0].id);

  const [networksFilters, setNetworksFilters] = useState<
    Partial<AccessPointsFilters>
  >(
    incomingNetworkFilters?.name
      ? {
          name: incomingNetworkFilters.name,
        }
      : {}
  );

  const [currentDefaultNetworkValues, setCurrentDefaultNetworkValues] =
    useState<NetworkFormValues>();

  const { defaultValues } = useSetDefaultValues(
    accessPointFormInfo,
    currentDefaultNetworkValues
  );

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,

    formState: { isSubmitting },
  } = useForm<AccessPointFormValues>({
    resolver: yupResolver(addNewAccessPointSchema),
    mode: "onChange",
    defaultValues,
  });

  const watchAll = watch();
  const currentNetworkFields = watch("network");

  // const [triggerSetNetwork, setTriggerSetNetwork] = useState(false);

  const { isAnythingModified, setIsAnythingModified } = useCheckModified(
    defaultValues,
    watchAll
  );

  const blocker = useBlocker(() => {
    return !!isAnythingModified && !isSubmitting;
  });

  const handleFindCorrespondingNetwork = (id: string) => {
    const foundNetwork = accessPointBackendInfo?.networks.filter(
      (el) => String(el.id) === String(id)
    );

    return foundNetwork?.[0];
  };

  const prepareAccessPointWithNetworksForEditing = async () => {
    debugger;
    if (editing && accessPointId && !currentDefaultNetworkValues?.id) {
      const foundNetwork = handleFindCorrespondingNetwork(networkId);
      handleNetworkSelect(
        networkId
          ? foundNetwork
            ? foundNetwork
            : accessPointBackendInfo?.networks[0]!
          : accessPointBackendInfo?.networks[0]!,
        true
      );
      if (accessPointFormInfo) {
        (
          Object.keys(accessPointFormInfo) as Array<keyof AccessPointFormValues>
        ).forEach((k) => {
          setValue(k, accessPointFormInfo[k]!);
        });
      }
      console.warn(accessPointFormInfo);
    }
  };

  const handleNetworkSelect = (
    network: components["schemas"]["APSchema"]["networks"][number],
    avoidIsModified?: boolean
  ) => {
    if (isAnythingModified && !avoidIsModified) {
      showDialog({
        title: "Unsaved changes",
        content:
          "You have unsaved changes for this accessPoint and network. Please save them.",
        actions: [
          {
            type: "outline",
            text: "Cancel",
          },
          {
            type: "primary",
            text: "Save",
            handler: async () => {
              handleSubmit(onSubmit)();
              setIsAnythingModified(false);
            },
          },
        ],
      });
    } else {
      refreshNetworkInfo(String(network.id));
    }
  };

  const onSubmit = async (values: AccessPointFormValues) => {
    try {
      addNewAccessPointSchema.validate(values);
      if (editing && accessPointId) {
        await updateAccessPoint(accessPointId, currentNetworkFields.id, values);
        // refreshBrands();
        handleRefresh();
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  const onBack = () => {
    navigate(-1);
  };

  const handleRefresh = async () => {
    try {
      // setTriggerSetNetwork(true);

      await refreshAccessPointInfo();

      // setTriggerSetNetwork(false);
    } catch (e) {}
  };

  const handleSetNetworksFilters = (filters: Record<string, any>) => {
    setNetworksFilters(filters);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [reset, accessPointFormInfo, currentDefaultNetworkValues]);

  useEffect(() => {
    if (accessPointBackendInfo) {
      prepareAccessPointWithNetworksForEditing();
    }
    // }, [triggerSetNetwork, accessPointBackendInfo, currentNetworkFields?.id]);
  }, [accessPointBackendInfo, currentNetworkFields?.id]);

  useEffect(() => {
    if (blocker.state === "blocked") {
      showDialog({
        title: "Unsaved changes",
        content:
          "You have unsaved changes for this access point. Do you want to discard them?",
        actions: [
          {
            type: "outline",
            text: "Stay",
          },
          {
            type: "delete",
            text: "Discard changes and leave",
            handler: () => {
              blocker.proceed();
            },
          },
        ],
      });
    }
  }, [blocker]);

  useEffect(() => {
    if (networkFormInfo) {
      setValue("network", networkFormInfo);
      setCurrentDefaultNetworkValues(networkFormInfo);
    }
  }, [networkFormInfo]);

  return (
    <AnimateAppearanceWrapper>
      <Header>
        <PageTitle
          title={editing ? "Edit access point" : "Add access point"}
          subtitle={"Modify access point data"}
          onBack={onBack}
        />

        <Button
          onClick={handleSubmit(onSubmit)}
          loading={loading || loadingNetwork || updateLoading}
        >
          Save
        </Button>
      </Header>

      <Content>
        <LeftSide>
          {/* <AccessPointPreview control={control} networksLength={totalDocs} /> */}
          <AccessPointPreview control={control} networksLength={1} />
          <NetworksList
            networksListItems={accessPointBackendInfo?.networks}
            setSelectedNetwork={handleNetworkSelect}
            selectedNetworkId={currentNetworkFields?.id}
            networkListLoading={loading}
            setFilters={handleSetNetworksFilters}
            filterValues={networksFilters}
            handleFiltersClear={() => {
              setNetworksFilters({});
            }}
          />
        </LeftSide>

        <RightSide>
          <BasicInfo control={control} />
          {loadingNetwork ? (
            <>
              <LoadingNetworkSpinner size={50} />
            </>
          ) : (
            <>
              <NetworkBasicInfo control={control} />
              <NetworkWirelessConfig control={control} />
              <NetworkSecurityConfig control={control} />
            </>
          )}
        </RightSide>
      </Content>
    </AnimateAppearanceWrapper>
  );
};
