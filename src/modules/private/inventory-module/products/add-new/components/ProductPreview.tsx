import { Control, useWatch } from "react-hook-form";
import { NewProductFormValues } from "../types";
import styled from "styled-components";
import {
  Status,
  Typography,
  TypographyVariant,
} from "../../../../../../components/ui-kit";
import { ImageIcon } from "../../../../../../components/icons";

const Preview = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 30px;
`;

const PreviewContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 160px;
  gap: 10px;
  p {
    word-wrap: break-word;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 15px;
  background-color: transparent;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Name = styled(Typography)`
  margin-bottom: 5px;
`;

const VariantsCount = styled(Typography)`
  color: #495b6c;
  margin-top: 5px;
`;

const StyledStatus = styled(Status)`
  width: fit-content;
`;

const NoImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 5px;

  z-index: 2;
  svg {
    scale: 3;
  }
`;

const StyledImageIcon = styled(ImageIcon)``;

const VariantName = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ProductPreviewInterface {
  control: Control<NewProductFormValues>;
  mainImage: string;
  variantsLength: number;
}

const ProductPreview: React.FunctionComponent<ProductPreviewInterface> = ({
  control,
  mainImage,
  variantsLength,
}) => {
  const statusValue = useWatch({ control, name: "status" });
  const nameValue = useWatch({ control, name: "name" });
  const productOptionsConfigValues = useWatch({
    control,
    name: "variant.productOptionConfig",
  });

  return (
    <Preview>
      <ImageWrapper>
        {mainImage ? (
          <Img src={mainImage} />
        ) : (
          <NoImgWrapper>
            <StyledImageIcon />
          </NoImgWrapper>
        )}
      </ImageWrapper>

      <PreviewContent>
        <Names>
          <Name variant={TypographyVariant.HEADER2}>
            {!nameValue ?? nameValue !== "" ? "Product name" : nameValue}
          </Name>
          <VariantName>
            {productOptionsConfigValues?.map((option, index) => {
              return (
                <Typography
                  key={option.option._id}
                  variant={TypographyVariant.BODY3}
                >
                  {index !== 0 && "/"}
                  &nbsp;{option.optionValue}&nbsp;
                </Typography>
              );
            })}
          </VariantName>
        </Names>
        <StyledStatus status={statusValue || "Active"} />
        {}{" "}
        {variantsLength > 1 && (
          <VariantsCount variant={TypographyVariant.BODY1}>
            {variantsLength} variants
          </VariantsCount>
        )}
      </PreviewContent>
    </Preview>
  );
};

export default ProductPreview;
