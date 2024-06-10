import { useForm } from "react-hook-form";
import { useUpdateProductOptions } from "../hooks/useUpdateProductOptions";
import { useEffect } from "react";
// import { ProductOptionApiType } from "../../../../../../util/types";
import styled from "styled-components";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import OptionName from "./modal/OptionName";
import { yupResolver } from "@hookform/resolvers/yup";
import { optionsSchema } from "../../validation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin-top: 10px;
`;

const Form = styled.form`
  flex: 1;
`;

const Label = styled(Typography)`
  margin-bottom: 20px;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OvalButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  border-bottom: 1px solid #eee;
  padding-bottom: 25px;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  padding: 0;
  border: none;
  background-color: #fff;
  cursor: pointer;
  p {
    color: #38b6ff;
  }
  &:disabled {
    cursor: default;
    p {
      color: #8181a5;
    }
  }
`;

interface OptionsControlProps {
  productId?: string;
  productOptions?: any[];
  disableEdit: boolean;
  isEditMode: boolean;
  refresh: () => void;
  toggleEdit: (val: boolean) => void;
}

export interface OptionFormValues {
  name: string;
  values?: string[];
}
export interface OptionsFormValues {
  options: OptionFormValues[];
}
const OptionsControl: React.FunctionComponent<OptionsControlProps> = ({
  productId,
  productOptions,
  disableEdit,
  isEditMode,
  toggleEdit,
  refresh,
}) => {
  const { updateProductOptions, loading } = useUpdateProductOptions();

  const defaultValues = {
    options: [
      {
        name: "",
        values: [],
      },
    ],
  };
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<OptionsFormValues>({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(optionsSchema),
  });

  const handleEdit = () => {
    toggleEdit(true);
  };

  const onSubmit = async (data: OptionsFormValues) => {
    await updateProductOptions(productId ?? "", data);
    refresh();
    toggleEdit(false);
  };

  const mappedOptions = productOptions?.map((el) => {
    return { _id: el._id, name: el.name, values: el.values };
  });

  useEffect(() => {
    if (mappedOptions) {
      setValue("options", mappedOptions);
    }
  }, [productOptions]);

  return (
    <Container>
      <Label color="#2a3b89" variant={TypographyVariant.HEADER2}>
        Options
      </Label>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!isEditMode && (
          <>
            <OptionsList>
              {productOptions?.length ? (
                productOptions?.map((el, index) => {
                  return (
                    <OptionItem key={index}>
                      <Typography variant={TypographyVariant.BODY5}>
                        {el.name}
                      </Typography>
                      <OvalButtons>
                        {el.values.map((val: any, index: any) => {
                          return (
                            <OvalButton key={index}>
                              <Typography variant={TypographyVariant.BODY6}>
                                {val}
                              </Typography>
                            </OvalButton>
                          );
                        })}
                      </OvalButtons>
                    </OptionItem>
                  );
                })
              ) : (
                <OptionItem>
                  <Typography variant={TypographyVariant.BODY5}>
                    Default
                  </Typography>
                  <OvalButtons>
                    <OvalButton>
                      <Typography variant={TypographyVariant.BODY6}>
                        Default
                      </Typography>
                    </OvalButton>
                  </OvalButtons>
                </OptionItem>
              )}
            </OptionsList>
            <AddButton disabled={disableEdit} onClick={handleEdit}>
              <Typography variant={TypographyVariant.BODY4}>Edit</Typography>
            </AddButton>
          </>
        )}

        <OptionName
          errors={errors}
          isEditMode={isEditMode}
          toggleEditMode={toggleEdit}
          loading={loading}
          handleReset={() => {
            setValue("options", mappedOptions ?? []);
          }}
          {...{
            control,
            getValues,
            setValue,
          }}
        />
      </Form>
    </Container>
  );
};

export default OptionsControl;
