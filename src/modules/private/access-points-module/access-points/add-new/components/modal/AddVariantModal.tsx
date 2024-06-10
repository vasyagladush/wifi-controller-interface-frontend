import styled from "styled-components";
import {
  // Checkbox,
  ModalHeader,
  Typography,
  TypographyVariant,
} from "../../../../../../../components/ui-kit";
import { useModalManager } from "../../../../../../../context/ModalManager";
import { useForm } from "react-hook-form";
import OptionName from "./OptionName";
// import { EditBtn } from "../../../../../../../components/ui-kit/button/EditButton.stories";
import { useEffect, useState } from "react";
// import { NoImage } from "../../../../../../../components/icons";
// import { BottomMenu } from "./BottomMenu";
import { useUpdateProductOptions } from "../../hooks/useUpdateProductOptions";
// import { ProductOptionApiType } from "../../../../../../../util/types";
import { OptionsFormValues } from "../OptionsControl";
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

// const VariantsList = styled.div``;

// const Header = styled.div`
//   display: flex;
//   padding: 20px 0;
//   border-top: 1px solid #eee;
//   border-bottom: 1px solid #eee;
// `;

// const ListWrapper = styled.div``;

// const VariantItem = styled.div`
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

// const VariantInfo = styled.div``;

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

interface AddVariantModalProps {
  productId?: string;
  productOptions?: any[];
}

const AddVariantModal: React.FunctionComponent<AddVariantModalProps> = ({
  productId,
  productOptions,
  // refresh,
}) => {
  const { removeLastModal } = useModalManager();
  const { updateProductOptions } = useUpdateProductOptions();
  const { control, handleSubmit, getValues, setValue } =
    useForm<OptionsFormValues>({
      defaultValues,
    });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleClose = () => {
    removeLastModal();
  };

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const onSubmit = async (data: OptionsFormValues) => {
    await updateProductOptions(productId ?? "", data);
  };

  useEffect(() => {
    const mappedOptions = productOptions?.map((el) => {
      return { _id: el._id, name: el.name, values: el.values };
    });
    if (mappedOptions) {
      setValue("options", mappedOptions);
    }
  }, [productOptions]);
  return (
    <Wrapper>
      <ModalHeader title="Variants" handleClose={handleClose} />
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isEditMode && (
            <>
              <AddButton
                onClick={handleEdit}
                variant={TypographyVariant.BODY4}
                color="#38B6FF"
              >
                + Add or edit options
              </AddButton>
              <OptionsList>
                {/* <div> */}
                {productOptions?.map((el) => {
                  return (
                    <OptionItem key={el._id}>
                      <Typography variant={TypographyVariant.BODY5}>
                        {el.name}
                      </Typography>
                      <OvalButtons>
                        {el.values.map((val: any) => {
                          return (
                            <OvalButton key={el._id}>
                              <Typography variant={TypographyVariant.BODY6}>
                                {val}
                              </Typography>
                            </OvalButton>
                          );
                        })}
                      </OvalButtons>
                    </OptionItem>
                  );
                })}

                {/* </div> */}
                {/* <div>
              <EditBtn onClick={handleEdit} />
            </div> */}
              </OptionsList>
            </>
          )}

          <OptionName
            handleReset={() => {}}
            isEditMode={isEditMode}
            toggleEditMode={setIsEditMode}
            loading={false}
            {...{
              control,
              getValues,
              setValue,
            }}
          />
        </form>
        {/* <VariantsList>
          <Header>
            <Checkbox />
            <Typography variant={TypographyVariant.BODY5}>
              Showing 4 products
            </Typography>
          </Header>
          <ListWrapper>
            <VariantItem>
              <ImageAndLabel>
                <Checkbox />
                <ImageWrapper>
                  <NoImage />
                </ImageWrapper>
                <div>
                  <Label variant={TypographyVariant.BODY5}>Large/Blue</Label>
                  <Description variant={TypographyVariant.BODY2}>
                    0202028
                  </Description>
                </div>
              </ImageAndLabel>
              <VariantInfo>
                <Typography variant={TypographyVariant.BODY2}>
                  £ 12.00
                </Typography>
                <Typography variant={TypographyVariant.BODY2}>
                  0 available
                </Typography>
              </VariantInfo>
            </VariantItem>
            <VariantItem>
              <ImageAndLabel>
                <Checkbox />
                <ImageWrapper>
                  <NoImage />
                </ImageWrapper>
                <div>
                  <Label variant={TypographyVariant.BODY5}>Large/Blue</Label>
                  <Description variant={TypographyVariant.BODY2}>
                    0202028
                  </Description>
                </div>
              </ImageAndLabel>
              <VariantInfo>
                <Typography variant={TypographyVariant.BODY2}>
                  £ 12.00
                </Typography>
                <Typography variant={TypographyVariant.BODY2}>
                  0 available
                </Typography>
              </VariantInfo>
            </VariantItem>
          </ListWrapper>
          <ListFooter>
            <Typography variant={TypographyVariant.BODY2}>
              Total inventory at all locations
            </Typography>
            <Typography variant={TypographyVariant.BODY2}>
              0 available
            </Typography>
          </ListFooter>
        </VariantsList> */}
      </Content>
      {/* <BottomMenu onCrossButton={() => {}} /> */}
    </Wrapper>
  );
};

export default AddVariantModal;
