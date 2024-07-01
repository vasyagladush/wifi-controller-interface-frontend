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
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import { NewAccessPointFormValues, NetworkFormValues } from "./types";
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagesBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 10px;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
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
  // const { checkAccessByPolicies } = usePolicyCheck();
  const { id: accessPointId } = useParams();
  const { state } = useLocation();
  const networkId = state?.networkId;
  const incomingNetworkFilters: Partial<AccessPointsFilters> = state?.filters;

  const { updateAccessPoint, loading: updateLoading } = useUpdateAccessPoint();
  // const { refreshBrands } = useBrandsContext();
  const { accessPointInfo, refreshAccessPointInfo, loading } =
    useGetAccessPoint(accessPointId);

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
    accessPointInfo,
    currentDefaultNetworkValues,
    editing
  );

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,

    formState: { isSubmitting },
  } = useForm<NewAccessPointFormValues>({
    resolver: yupResolver(addNewAccessPointSchema),
    mode: "onChange",
    defaultValues,
  });

  const watchAll = watch();
  const currentNetworkFields = watch("network");

  // const { data: availableIntegrations } = useListIntegrations();

  const [currentPage, setCurrentPage] = useState(1);
  const [triggerSetNetwork, setTriggerSetNetwork] = useState(false);
  const [files, setFiles] = useState<File[]>();
  const [imagesToDetach, setImagesToDetach] = useState<string[]>();
  const [isOptionsEditingMode, setIsOptionsEditingMode] = useState(false);

  const { isAnythingModified, setIsAnythingModified } = useCheckModified(
    defaultValues,
    watchAll,
    files,
    imagesToDetach
  );

  useEffect(() => {
    reset(defaultValues);
  }, [reset, accessPointInfo, currentDefaultNetworkValues]);

  const handleFindCorrespondingNetwork = (id: string) => {
    // const foundNetwork = accessPointNetworksList.filter((el) => el._id === id); // TODO
    const foundNetwork = [].filter((el: any) => el._id === id);

    return foundNetwork[0];
  };

  useEffect(() => {
    if (triggerSetNetwork) {
      const foundNetwork = handleFindCorrespondingNetwork(
        currentNetworkFields.id
      );
      // handleNetworkSelect(foundNetwork ?? accessPointNetworksList[0], true); // TODO
      handleNetworkSelect(foundNetwork, true);
    }
  }, [triggerSetNetwork, currentNetworkFields.id]); // TODO
  // }, [triggerSetNetwork, accessPointNetworksList, currentNetworkFields.id]);

  const blocker = useBlocker(() => {
    return !!isAnythingModified && !isSubmitting;
  });

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

  const handleNetworkSelect = (network: any, avoidIsModified?: boolean) => {
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
      const transformedNetwork =
        transformNetworkServerInputToFormValues(network);
      setValue("network", transformedNetwork);
      setCurrentDefaultNetworkValues(transformedNetwork);
    }
  };

  const prepareAccessPointWithNetworksForEditing = async () => {
    if (editing && accessPointId && !currentDefaultNetworkValues?.id) {
      const foundNetwork = handleFindCorrespondingNetwork(networkId);
      // handleNetworkSelect(
      //   networkId ? foundNetwork : accessPointNetworksList[0],
      //   true
      // );
      // TODO
      handleNetworkSelect(foundNetwork, true);
      if (accessPointInfo) {
        (
          Object.keys(accessPointInfo) as Array<keyof NewAccessPointFormValues>
        ).forEach((k) => {
          setValue(k, accessPointInfo[k]);
        });
      }
      console.warn(accessPointInfo);
    }
  };

  // useEffect(() => {
  //   setAvailableIntegrationsForCreation();
  // }, [availableIntegrations]);

  useEffect(() => {
    prepareAccessPointWithNetworksForEditing();
  }, [accessPointInfo, accessPointInfo, currentDefaultNetworkValues?.id]);

  const onSubmit = async (values: NewAccessPointFormValues) => {
    try {
      addNewAccessPointSchema.validate(values);
      if (editing && accessPointId) {
        await updateAccessPoint(
          accessPointId,
          currentNetworkFields.id,
          values,
          files,
          imagesToDetach
        );
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
      setTriggerSetNetwork(true);

      await refreshAccessPointInfo();

      setTriggerSetNetwork(false);
    } catch (e) {}
  };

  const handleOptionsEdit = (val: boolean) => {
    setIsOptionsEditingMode(val);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSetNetworksFilters = (filters: Record<string, any>) => {
    setNetworksFilters(filters);
    setCurrentPage(1);
  };

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
          loading={loading || updateLoading}
        >
          Save
        </Button>
      </Header>

      <Content>
        <LeftSide>
          {/* <AccessPointPreview control={control} networksLength={totalDocs} /> */}
          <AccessPointPreview control={control} networksLength={1} />
          <NetworksList
            // networksListItems={accessPointNetworksList}
            networksListItems={[]}
            handleNextPage={onNextPage}
            setSelectedNetwork={handleNetworkSelect}
            selectedNetworkId={currentNetworkFields?.id}
            // networkListLoading={networkListLoading}
            networkListLoading={false}
            setFilters={handleSetNetworksFilters}
            filterValues={networksFilters}
            handleFiltersClear={() => {
              setNetworksFilters({});
            }}
          />
        </LeftSide>

        <RightSide>
          <BasicInfo control={control} />
          <NetworkBasicInfo control={control} />
          <NetworkWirelessConfig control={control} />
          <NetworkSecurityConfig control={control} />
        </RightSide>
      </Content>
    </AnimateAppearanceWrapper>
  );
};
