import { Button, PageTitle } from "../../../../../components/ui-kit";
import styled from "styled-components";
import {
  DropdownFormField,
  TextFormArea,
  TextFormInput,
} from "../../../../../components/form-fields";
import React, { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ApiKeyFormValues } from "../create/types";
import { AppRoutes } from "../../../../../constants/routes";
// import { useRolesContext } from "../../context/RolesContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useGetApiKey } from "./hooks/useGetApiKey";
import { useEditApiKey } from "./hooks/useEditApiKey";
import { yupResolver } from "@hookform/resolvers/yup";
import { createApiKeySchema } from "../validation";
import { LoadingBlock } from "../../../../../components/loading-block/LoadingBlock";
import { useApiKeysContext } from "../context/ApiKeysContextProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const ClickableBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SaveButton = styled(Button)`
  margin-top: 20px;
`;

export const APIKeysDetails = () => {
  const { id } = useParams();
  // const { roles } = useRolesContext();
  const navigate = useNavigate();
  const { apiKeyData: data, loading: dataLoading } = useGetApiKey(id!);
  const { editApiKey, loading } = useEditApiKey();
  const { refreshApiKeysData } = useApiKeysContext();

  const { control, handleSubmit, setValue } = useForm<ApiKeyFormValues>({
    mode: "onChange",
    resolver: yupResolver(createApiKeySchema),
    defaultValues: {
      name: data?.name,
      description: data?.description,
      redirectUrl: data?.redirectUrl,
      webhookUrl: data?.webhookUrl,
      role: data?.role,
      status: data?.status,
    },
  });

  const roleValue = useWatch({ name: "role", control });
  const statusValue = useWatch({ name: "status", control });

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("redirectUrl", data.redirectUrl);
      setValue("webhookUrl", data.webhookUrl);
      setValue("role", (data.role as any)._id);
      setValue("status", data.status);
    }
  }, [data]);

  const goBack = () => {
    refreshApiKeysData();
    navigate(-1);
  };

  const onSave = async (values: ApiKeyFormValues) => {
    try {
      await editApiKey(id!, values);
    } catch (e: any) {
      console.warn(e);
    }
    refreshApiKeysData();
    navigate(AppRoutes.Private.Settings.API_KEYS);
  };

  // const roleOptions = useMemo(() => {
  //   return (
  //     roles
  //       // .filter(
  //       //   (r) => r.type === RoleType.API_KEY || r.type === RoleType.UNIVERSAL
  //       // )
  //       .map((r) => ({ label: r.name, value: r._id }))
  //   );
  // }, [roles]);

  return (
    <Wrapper>
      <LoadingBlock loading={dataLoading}>
        <ClickableBox>
          <PageTitle
            title={"API key details"}
            subtitle={"Edit your API key here"}
            onBack={goBack}
          />
        </ClickableBox>

        <FormContainer>
          <TextFormInput control={control} name="name" label="API key name" />
          <TextFormArea
            control={control}
            name="description"
            label="Description"
          />
          <DropdownFormField
            name="status"
            control={control}
            label="Status"
            value={statusValue}
            items={[
              {
                label: "Enabled",
                // value: ApiKeyStatus.ENABLED,
                value: "enabled",
              },
              {
                label: "Disabled",
                // value: ApiKeyStatus.DISABLED,
                value: "disabled",
              },
            ]}
            disabled={
              // !checkAccessByPolicies(
              //   [Policies.API_KEY.ADMIN_ACCESS],
              //   [Policies.API_KEY.UPDATE_API_KEY_STATUS]
              // )
              false
            }
          />
          {/* <DropdownFormField
            control={control}
            items={roleOptions}
            name="role"
            label="Role"
            value={roleValue}
            disabled={
              // !checkAccessByPolicies(
              //   [Policies.API_KEY.ADMIN_ACCESS],
              //   [Policies.API_KEY.UPDATE_API_KEY_POLICIES]
              // )
              false
            }
          /> */}
          <TextFormInput
            control={control}
            name="webhookUrl"
            label="Webhook / Payment Notification URL"
          />
          <TextFormInput
            control={control}
            name="redirectUrl"
            label="Redirect URL"
          />

          <SaveButton loading={loading} onClick={handleSubmit(onSave)}>
            Save
          </SaveButton>
        </FormContainer>
      </LoadingBlock>
    </Wrapper>
  );
};
