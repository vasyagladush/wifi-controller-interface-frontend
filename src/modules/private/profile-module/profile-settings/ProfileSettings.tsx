import styled from "styled-components";
import {
  Typography,
  Button,
  TypographyVariant,
  ButtonVariant,
  AvatarUploader,
} from "../../../../components/ui-kit";
import React, { useEffect, useMemo, useState } from "react";
import {
  PhoneFormField,
  TextFormInput,
} from "../../../../components/form-fields";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useUserContext } from "../../../../context/UserContextProvider";
import { PasswordForm } from "./components/PasswordForm";
import { useUpdateUser } from "./hooks/useUpdateUser";
import { profileSettingsSchema } from "../validation";
import { useModalManager } from "../../../../context/ModalManager";
import DialogueModal from "./components/DialogueModal";
import { Verified } from "../../../../components/icons";
import api from "../../../../util/api";
import {
  NotificationTypes,
  useNotification,
} from "../../../../hooks/useNotification";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  //height: 834px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #eeeeee;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const ViewRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTextFormInput = styled(TextFormInput)`
  margin-right: 10px;
`;

const Btn = styled(Button)`
  width: 150px;
  white-space: nowrap;
`;

const StyledTypography = styled(Typography)`
  font-size: 13px;
  color: #00bc82;
  text-align: right;
  margin-right: 10px;
  font-weight: 500;
`;
const ClickableStyledTypography = styled(StyledTypography)`
  color: #027aff;
  :hover {
    cursor: pointer;
  }
`;

const InputWithIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const ContactFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* margin-right: 10px; */
`;
const VerificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;
const VerifiedIcon = styled(Verified)`
  position: absolute;
  right: 10px;
  top: 47px;
  padding: 0 7px;
`;

const StyledPhoneFormField = styled(PhoneFormField)`
  flex: 1;
  margin-right: 10px;
`;

export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  username: string;
}

export const ProfileSettings: React.FunctionComponent = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [dialogueBtnLoading, setDialogueBtnLoading] = useState(false);

  const { user, refreshUserData } = useUserContext();
  const { updateUser, loading } = useUpdateUser();
  // const { checkAccessByPolicies } = usePolicyCheck();
  const { addModal, removeLastModal } = useModalManager();
  const { showNotification } = useNotification();
  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>();

  const { control, handleSubmit, setValue, watch } = useForm<ProfileFormValues>(
    {
      mode: "onChange",
      resolver: yupResolver(profileSettingsSchema),
    }
  );

  const newValues = watch();
  const disabled = useMemo(() => {
    const fieldsTheSame =
      newValues.firstName === (user.firstName ?? "") &&
      newValues.lastName === (user.lastName ?? "") &&
      newValues.username === (user.username ?? "");

    return user.avatar?.url
      ? fieldsTheSame && user.avatar?.url === avatarUrl
      : fieldsTheSame && !avatarUrl && !file;
  }, [user, newValues, avatarUrl, file]);

  const onSubmit = async (values: ProfileFormValues) => {
    await updateUser(values, file, file === null && !avatarUrl);
    refreshUserData();
    setTimeout(refreshUserData, 1500);
  };

  const handlePasswordChange = (state: boolean) => () => {
    setChangePasswordOpen(state);
  };

  useEffect(() => {
    setAvatarUrl(user.avatar?.url);
    setValue("firstName", user.firstName ?? "");
    setValue("lastName", user.lastName ?? "");
    setValue("username", user.username ?? "");
  }, [user]);

  return (
    <MainContainer>
      <ContainerBox>
        <Typography
          variant={TypographyVariant.HEADER2}
          style={{ color: "#556CB1" }}
        >
          Personal information
        </Typography>
        <Line />
        <ViewRow>
          <StyledTextFormInput
            control={control}
            name="firstName"
            label="First name"
            placeholder="John"
          />
          <StyledTextFormInput
            control={control}
            name="lastName"
            label="Last name"
            placeholder="Doe"
          />
        </ViewRow>
        <ViewRow>
          <ContactFieldContainer>
            <InputWithIconContainer>
              <StyledTextFormInput
                control={control}
                name="username"
                label="Username"
                placeholder="user.name"
                disabled
              />
            </InputWithIconContainer>
          </ContactFieldContainer>
          <div style={{ flex: 1 }} />
        </ViewRow>
      </ContainerBox>
    </MainContainer>
  );
};
