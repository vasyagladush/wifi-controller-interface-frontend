import React, { FC, useMemo } from "react";
import styled from "styled-components";
import {
  Button,
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import Key from "../../../../../components/icons/Key";
import ArrowLeft from "../../../../../components/icons/ArrowLeft";
import { useForm } from "react-hook-form";
import { ApiKeyFormValues } from "./types";
import {
  DropdownFormField,
  TextFormArea,
  TextFormInput,
} from "../../../../../components/form-fields";
// import { useRolesContext } from "../../context/RolesContextProvider";
import { useCreateApiKey } from "./hooks/useCreateApiKey";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../../constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { createApiKeySchema } from "../validation";
import { useApiKeysContext } from "../context/ApiKeysContextProvider";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewRow = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ApiKeysContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #eeeeee;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const GenerateBtn = styled(Button)`
  display: flex;
  flex: 1;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const ClickableBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  cursor: pointer;
`;

export const APIKeyCreate: FC = () => {
  // const { roles } = useRolesContext();

  const { refreshApiKeysData } = useApiKeysContext();
  const { createApiKey, loading } = useCreateApiKey();
  // const { checkAccessByPolicies } = usePolicyCheck();
  const navigate = useNavigate();
  const goBack = () => {
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

  const { control, handleSubmit } = useForm<ApiKeyFormValues>({
    mode: "onChange",
    resolver: yupResolver(createApiKeySchema),
    defaultValues: {
      name: "",
      description: "",
      redirectUrl: "",
      webhookUrl: "",
      role: "",
      // status: ApiKeyStatus.ENABLED,
    },
  });

  const onSubmit = async (values: ApiKeyFormValues) => {
    await createApiKey(values);
    refreshApiKeysData();
    navigate(-1);
  };

  return (
    <MainContainer>
      <HeaderRow>
        <ClickableBox onClick={goBack}>
          <ArrowLeft style={{ marginTop: 4, marginRight: 10 }} />
          <Typography
            variant={TypographyVariant.HEADER1}
            style={{ color: "#556CB1" }}
          >
            Generate API Keys
          </Typography>
        </ClickableBox>
      </HeaderRow>
      <ApiKeysContainer>
        <ViewRow>
          <Typography
            variant={TypographyVariant.HEADER2}
            style={{ color: "#556CB1", flex: 4 }}
          >
            Generate API keys
          </Typography>
          {
            // checkAccessByPolicies(
            //   [Policies.API_KEY.ADMIN_ACCESS],
            //   [Policies.API_KEY.CREATE_API_KEYS]
            // )
            true && (
              <GenerateBtn
                loading={loading}
                leftIcon={<Key />}
                onClick={handleSubmit(onSubmit)}
              >
                Generate API key
              </GenerateBtn>
            )
          }
        </ViewRow>
        <Line />
        <FormContainer>
          <TextFormInput
            control={control}
            name="name"
            label="API key name"
            required
          />
          <TextFormArea
            control={control}
            name="description"
            label="Description"
          />
          <DropdownFormField
            name="status"
            control={control}
            label="Status"
            required
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
          />
          {/* <DropdownFormField
            control={control}
            items={roleOptions}
            name="role"
            label="Role"
            required
          /> */}
          <TextFormInput
            control={control}
            name="webhookUrl"
            label="Webhook / Payment Notification URL"
            required
          />
          <TextFormInput
            control={control}
            name="redirectUrl"
            label="Redirect URL"
            required
          />
        </FormContainer>
      </ApiKeysContainer>
    </MainContainer>
  );
};
