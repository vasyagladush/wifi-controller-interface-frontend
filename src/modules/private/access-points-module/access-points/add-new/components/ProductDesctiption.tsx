import { Control } from "react-hook-form";
import { NewProductFormValues } from "../types";
import {
  TextFormArea,
  TextFormInput,
} from "../../../../../../components/form-fields";
import styled from "styled-components";
import {
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin-top: 10px;
`;

const StyledTextFormArea = styled(TextFormArea)`
  padding-top: 0;
`;

const Label = styled(Typography)`
  margin-bottom: 20px;
`;

const HScodeTextInput = styled(TextFormInput)`
  width: 50%;
`;

interface ProductDescriptionProps {
  control: Control<NewProductFormValues>;
  isOptionsEditMode: boolean;
}

const ProductDescription: React.FunctionComponent<ProductDescriptionProps> = ({
  control,
  isOptionsEditMode,
}) => {
  return (
    <Container>
      <Label color="#556CB1" variant={TypographyVariant.HEADER2}>
        Variant basic information
      </Label>
      <StyledTextFormArea
        name={"variant.description"}
        control={control}
        label="Description"
        placeholder="Description"
        disabled={isOptionsEditMode}
      />
      <TextFormArea
        name={"variant.shortDescription"}
        control={control}
        label="Short Description"
        placeholder="A short and concise description of the product"
        disabled={isOptionsEditMode}
      />
      <TextFormInput
        name={"variant.simpleDescription"}
        control={control}
        label="Simple Description"
        placeholder="A couple of words that describe the product"
        disabled={isOptionsEditMode}
      />
      <HScodeTextInput
        name={"variant.hsCode"}
        control={control}
        label="HS Code"
        placeholder="HS Code"
        disabled={isOptionsEditMode}
      />
    </Container>
  );
};

export default ProductDescription;
