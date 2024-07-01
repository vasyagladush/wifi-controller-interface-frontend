import styled from "styled-components";
import {
  // Checkbox,
  ModalHeader,
  Typography,
  TypographyVariant,
} from "../../../../../../../components/ui-kit";
import { useModalManager } from "../../../../../../../context/ModalManager";
import { useForm } from "react-hook-form";
// import { EditBtn } from "../../../../../../../components/ui-kit/button/EditButton.stories";
import { useEffect, useState } from "react";
// import { NoImage } from "../../../../../../../components/icons";
// import { BottomMenu } from "./BottomMenu";
// import { AccessPointOptionApiType } from "../../../../../../../util/types";
// import { Refresh } from "../../../../../../../components/icons";

const Wrapper = styled.div`
  width: 780px;
  max-height: 615px;
  overflow-y: auto;
  position: relative;
`;

const Content = styled.div`
  padding: 15px 30px;
`;

const OptionsList = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  flex-direction: column;
  /* border-bottom: 1px solid #eee; */
  /* gap: 20px; */
  /* padding: 20px 0; */
`;

const OvalButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const OvalButton = styled.div`
  display: flex;
  width: fit-content;
  padding: 3px 15px;
  border-radius: 30px;
  border: 1px solid #eee;
  background: #f4f5f9;
`;

const OptionItem = styled.div`
  &:last-child {
    border-bottom: none;
  }
  border-bottom: 1px solid #eee;
  padding-bottom: 25px;
  margin-bottom: 20px;
`;

// const NetworksList = styled.div``;

// const Header = styled.div`
//   display: flex;
//   padding: 20px 0;
//   border-top: 1px solid #eee;
//   border-bottom: 1px solid #eee;
// `;

// const ListWrapper = styled.div``;

// const NetworkItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px 0;
//   border-bottom: 1px solid #eee;
//   cursor: pointer;
//   :hover {
//     background: #f2f4ff;
//   }
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 56px;
//   height: 56px;
// `;

// const Label = styled(Typography)`
//   margin-left: 10px;
// `;

// const Description = styled(Typography)`
//   margin-left: 10px;
// `;

// const NetworkInfo = styled.div``;

// const ImageAndLabel = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ListFooter = styled.div`
//   padding: 20px 0;
//   display: flex;
//   justify-content: space-between;
// `;

const AddButton = styled(Typography)`
  cursor: pointer;
  margin-bottom: 30px;
  /* border-bottom: 1px solid #eee;
  padding-bottom: 10px; */
`;

const defaultValues = {
  options: [
    {
      name: "",
      values: [""],
    },
  ],
};

interface AddNetworkModalProps {
  accessPointId?: string;
  accessPointOptions?: any[];
}

const AddNetworkModal: React.FunctionComponent<AddNetworkModalProps> = ({
  accessPointId,
  // refresh, // TODO
}) => {
  const { removeLastModal } = useModalManager();
  // const { updateAccessPointOptions } = useUpdateAccessPointOptions();
  // const { control, handleSubmit, getValues, setValue } =
  //   useForm<OptionsFormValues>({
  //     defaultValues,
  //   });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleClose = () => {
    removeLastModal();
  };

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  // const onSubmit = async (data: OptionsFormValues) => {
  //   await updateAccessPointOptions(accessPointId ?? "", data);
  // };

  // useEffect(() => {
  //   const mappedOptions = accessPointOptions?.map((el) => {
  //     return { _id: el._id, name: el.name, values: el.values };
  //   });
  //   if (mappedOptions) {
  //     setValue("options", mappedOptions);
  //   }
  // }, [accessPointOptions]);
  return (
    <Wrapper>
      <ModalHeader title="Networks" handleClose={handleClose} />
      <Content>
       
      </Content>
      {/* <BottomMenu onCrossButton={() => {}} /> */}
      
    </Wrapper>
  );
};

export default AddNetworkModal;
