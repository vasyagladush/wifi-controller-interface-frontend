import { FC, useMemo } from "react";
import styled from "styled-components";

import { useBulkArchiveProducts } from "../hooks/useBulkArchiveProducts";
import { useBulkStatusUpdateProducts } from "../hooks/useBulkStatusUpdateProducts";
import {
  Button,
  ButtonVariant,
  SwitchButton,
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import { Archive, Cross } from "../../../../../components/icons";
import { useBulkMarkVariantsAsOutOfStock } from "../hooks/useBulkMarkVariantsAsOutOfStock";

const BottomMenuContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0px -15px 20px rgba(108, 108, 138, 0.1);
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  left: 0;
`;

const LeftSection = styled.div<{ stockList?: boolean }>`
  width: ${({ stockList }) =>
    stockList ? "calc(95% - 280px - 25px)" : "calc(85% - 280px - 25px)"};
  padding: 25px 53px 25px 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightSection = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 62px 0px 30px;
  border-left: 1px solid #dbe3eb;
`;

const SubSection = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCross = styled(Cross)`
  margin-right: 11px;
  :hover {
    path {
      stroke: #2a3b89;
    }
    cursor: pointer;
  }
`;

const StyledTypography = styled(Typography)`
  line-height: 30px;
  padding-left: 11px;
  border-left: solid 1px #dbe3eb;
`;

const SuspendText = styled(Typography)`
  display: inline;
  margin-left: 12px;
`;
interface BottomMenuProps {
  products?: any[];
  variants?: any[];
  stockList?: boolean;
  onCrossButton: () => void;
  refreshProducts: () => Promise<void>;
}

export const ProductsListBottomMenu: FC<BottomMenuProps> = ({
  products,
  variants,
  onCrossButton,
  refreshProducts,
  stockList,
}) => {
  const { bulkArchiveProducts, loading: loadingArchive } =
    useBulkArchiveProducts();
  const { bulkStatusUpdateProducts } = useBulkStatusUpdateProducts();
  const { bulkMarkVariantsAsOtOfStock } = useBulkMarkVariantsAsOutOfStock();

  const hasActiveProducts = useMemo(() => {
    if (products?.find((el) => el.status === "active")) {
      return true;
    } else {
      return false;
    }
  }, [products, refreshProducts]);

  const hasOutOfStockVariants = useMemo(() => {
    if (
      variants?.find(
        (el) => el.inventoryInfo.status === "out of stock"
      )
    ) {
      return true;
    } else {
      return false;
    }
  }, [variants]);

  const handleBulkArchive = async () => {
    if (products) {
      const productIds = products.map((el) => el._id);
      await bulkArchiveProducts(productIds);
      await refreshProducts();
      onCrossButton();
    }
  };

  const handleBulkStatusUpdate = async () => {
    if (products) {
      const status: any = hasActiveProducts
        ? "inactive"
        : "active";
      const productIds = products.map((el) => el._id);
      await bulkStatusUpdateProducts(productIds, status);
      await refreshProducts();
    }
  };

  const handleBulkSetOutOfStock = async () => {
    if (variants) {
      const variantIds = variants.map((el) => el._id);
      await bulkMarkVariantsAsOtOfStock(variantIds);
      await refreshProducts();
      onCrossButton();
    }
  };

  return (
    <BottomMenuContainer>
      <LeftSection stockList={stockList}>
        <SubSection>
          <StyledCross onClick={onCrossButton} />
          <StyledTypography
            color="#495B6C"
            variant={TypographyVariant.HEADLINE}
          >
            Selected {stockList ? "variants" : `products`}:{" "}
            <span style={{ color: "#2a3b89" }}>
              {products?.length ?? variants?.length}
            </span>
          </StyledTypography>
        </SubSection>
        <SubSection>
          {stockList ? (
            <SwitchButton
              onChange={() => {
                handleBulkSetOutOfStock();
              }}
              checked={hasOutOfStockVariants}
            />
          ) : (
            <SwitchButton
              onChange={() => {
                handleBulkStatusUpdate();
              }}
              checked={hasActiveProducts}
            />
          )}
          <SuspendText color="#2a3b89" variant={TypographyVariant.HEADLINE}>
            {stockList ? "Out of stock" : "Active"}
          </SuspendText>
        </SubSection>
      </LeftSection>
      {!stockList && (
        <RightSection>
          <div>
            <Button
              variant={ButtonVariant.OUTLINED}
              leftIcon={<Archive color="#6c6c8a" />}
              onClick={handleBulkArchive}
              loading={loadingArchive}
            >
              Archive
            </Button>
          </div>
        </RightSection>
      )}
    </BottomMenuContainer>
  );
};
