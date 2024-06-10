import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import BasicInfo from "./components/BasicInfo";
import Pricing from "./components/Pricing";
import DeliveryInfo from "./components/Delivery";
import InventoryNLocation from "./components/InventoryNLocation";
import VariantsList from "./components/VariantsList";
import { useCreateNewProduct } from "./hooks/useCreateNewProduct";
import {
  useNavigate,
  useParams,
  useBlocker,
  useLocation,
} from "react-router-dom";
import { AnimateAppearanceWrapper } from "../../../../../components/animate-appearence/AnimateAppearanceWrapper";
import { addNewProductSchema } from "../validation";
import {
  Button,
  ImageUploader,
  PageTitle,
  Typography,
  TypographyVariant,
} from "../../../../../components/ui-kit";
import {
  NewProductFormValues,
  ProductIntegrationsSetup,
  ProductVariantFormValues,
} from "./types";
import { useGetProduct } from "./hooks/useGetProduct";
import { useUpdateProductWithVariant } from "./hooks/useEditProductWithVariant";
import { useDialogManager } from "../../../../../context/DialogManager";
import ProductPreview from "./components/ProductPreview";
import StatusNChannels from "./components/StatusNChannels";
import { useGetProductVariants } from "./hooks/useGetProductVariants";
import ProductDescription from "./components/ProductDesctiption";
import { ProductVariantApiType } from "../../../../../util/types";
import { transformVariantServerInputToFormValues } from "./data-transformers/products";
// import { useListIntegrations } from "../../../settings-module/integrations/e-commerce/hooks/useListIntegrations";
import OptionsControl from "./components/OptionsControl";
import { AppRoutes } from "../../../../../constants/routes";
import { useSetDefaultValues } from "./hooks/useSetDefaultValues";
import { useCheckModified } from "./hooks/useCheckModified";
import { ProductsFilters } from "../product-list/hooks/useProductsList";
// import { useBrandsContext } from "../../context/BrandsContextProvider";
import ProductSyncSettings from "./components/ProductSyncSettings";

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

export const AddNewProduct: React.FunctionComponent<{ editing?: boolean }> = ({
  editing,
}) => {
  const navigate = useNavigate();
  const { showDialog } = useDialogManager();
  // const { checkAccessByPolicies } = usePolicyCheck();
  const { id: productId } = useParams();
  const { state } = useLocation();
  const variantId = state?.variantId;
  const incomingVariantFilters: Partial<ProductsFilters> = state?.filters;

  const { createNewProduct, loading } = useCreateNewProduct();
  const { updateProductWithVariant, loading: updateLoading } =
    useUpdateProductWithVariant();
  // const { refreshBrands } = useBrandsContext();
  const { productInfo, refreshProductInfo } = useGetProduct(productId);

  const [variantsFilters, setVariantsFilters] = useState<
    Partial<ProductsFilters>
  >(
    incomingVariantFilters?.priceFrom ??
      incomingVariantFilters?.priceTo ??
      incomingVariantFilters?.soldFrom ??
      incomingVariantFilters?.soldTo ??
      incomingVariantFilters?.qtyFrom ??
      incomingVariantFilters?.qtyTo
      ? {
          priceFrom: incomingVariantFilters?.priceFrom,
          priceTo: incomingVariantFilters?.priceTo,
          soldFrom: incomingVariantFilters?.soldFrom,
          soldTo: incomingVariantFilters?.soldTo,
          qtyFrom: incomingVariantFilters?.qtyFrom,
          qtyTo: incomingVariantFilters?.qtyTo,
        }
      : {}
  );

  const {
    productVariantsList,
    hasNextPage,
    totalDocs,
    loading: variantListLoading,
    onPaginationChange,
    refreshVariantsList,
  } = useGetProductVariants(productId, variantsFilters);

  const [currentDefaultVariantValues, setCurrentDefaultVariantValues] =
    useState<ProductVariantFormValues>();

  const { defaultValues } = useSetDefaultValues(
    productInfo,
    currentDefaultVariantValues,
    editing
  );

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,

    formState: { isSubmitting },
  } = useForm<NewProductFormValues>({
    resolver: yupResolver(addNewProductSchema),
    mode: "onChange",
    defaultValues,
  });

  const { append, remove } = useFieldArray({
    control,
    name: "categories",
  });

  const watchAll = watch();
  const productOptions = watch("options");
  const currentVariantFields = watch("variant");
  const availableIntegrationsSetup = watch("availableIntegrationsSetup");
  const categories = watch("categories");

  // const { data: availableIntegrations } = useListIntegrations();

  const [currentPage, setCurrentPage] = useState(1);
  const [triggerSetVariant, setTriggerSetVariant] = useState(false);
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
    onPaginationChange(currentPage, 50);
  }, [currentPage]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, productInfo, currentDefaultVariantValues]);

  const handleFindCorrespondingVariant = (id: string) => {
    const foundVariant = productVariantsList.filter((el) => el._id === id);

    return foundVariant[0];
  };

  useEffect(() => {
    if (triggerSetVariant) {
      const foundVariant = handleFindCorrespondingVariant(
        currentVariantFields._id
      );
      handleVariantSelect(foundVariant ?? productVariantsList[0], true);
    }
  }, [triggerSetVariant, productVariantsList, currentVariantFields._id]);

  const blocker = useBlocker(() => {
    return !!isAnythingModified && !isSubmitting;
  });

  useEffect(() => {
    if (blocker.state === "blocked") {
      showDialog({
        title: "Unsaved changes",
        content:
          "You have unsaved changes for this product. Do you want to discard them?",
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

  const handleVariantSelect = (
    variant: ProductVariantApiType,
    avoidIsModified?: boolean
  ) => {
    if (isAnythingModified && !avoidIsModified) {
      showDialog({
        title: "Unsaved changes",
        content:
          "You have unsaved changes for this product and variant. Please save them.",
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
      const transformedVariant =
        transformVariantServerInputToFormValues(variant);
      setValue("variant", transformedVariant);
      setCurrentDefaultVariantValues(transformedVariant);
    }
  };

  const prepareProductWithVariantsForEditing = async () => {
    if (editing && productId && !currentDefaultVariantValues?._id) {
      const foundVariant = handleFindCorrespondingVariant(variantId);
      handleVariantSelect(
        variantId ? foundVariant : productVariantsList[0],
        true
      );
      if (productInfo) {
        const mappedCategories: Array<{ category?: string }> | undefined =
          productInfo.categories;

        (Object.keys(productInfo) as Array<keyof NewProductFormValues>).forEach(
          (k) => {
            setValue(k, productInfo[k]);
          }
        );
        setValue(
          "categories",
          mappedCategories?.length === 0
            ? [{ category: undefined }]
            : mappedCategories
        );

        setValue(
          "availableIntegrationsSetup",
          Object.entries(productInfo.availableIntegrationsSetup ?? {})
        );
        setValue(
          "options",

          productInfo.options
        );
      }
      console.warn(productInfo);
    }
  };

  // useEffect(() => {
  //   setAvailableIntegrationsForCreation();
  // }, [availableIntegrations]);

  useEffect(() => {
    prepareProductWithVariantsForEditing();
  }, [productVariantsList, productInfo, currentDefaultVariantValues?._id]);

  const onSubmit = async (values: NewProductFormValues) => {
    try {
      addNewProductSchema.validate(values);
      if (editing && productId) {
        await updateProductWithVariant(
          productId,
          currentVariantFields._id,
          values,
          files,
          imagesToDetach
        );
        // refreshBrands();
        handleRefresh();
      } else {
        await createNewProduct(values, files);
        // refreshBrands();
        navigate(AppRoutes.Private.Inventory.PRODUCT_LIST);
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
      setTriggerSetVariant(true);

      await refreshVariantsList();
      await refreshProductInfo();
      setFiles(undefined);
      setImagesToDetach(undefined);

      setTriggerSetVariant(false);
    } catch (e) {}
  };

  const handleOptionsEdit = (val: boolean) => {
    setIsOptionsEditingMode(val);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSetVariantsFilters = (filters: Record<string, any>) => {
    setVariantsFilters(filters);
    setCurrentPage(1);
  };

  return (
    <AnimateAppearanceWrapper>
      <Header>
        <PageTitle
          title={editing ? "Edit product" : "Add product"}
          subtitle={"Modify product data"}
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
          <ProductPreview
            control={control}
            mainImage={currentVariantFields.images?.[0]?.url}
            variantsLength={totalDocs}
          />
          <StatusNChannels
            control={control}
            isOptionsEditMode={isOptionsEditingMode}
            availableIntegrationsSetup={availableIntegrationsSetup}
          />
          <VariantsList
            variantsListItems={productVariantsList}
            hasNextPage={hasNextPage}
            handleNextPage={onNextPage}
            setSelectedVariant={handleVariantSelect}
            selectedVariantId={currentVariantFields?._id}
            variantListLoading={variantListLoading}
            setFilters={handleSetVariantsFilters}
            filterValues={variantsFilters}
            handleFiltersClear={() => {
              setVariantsFilters({});
            }}
          />
        </LeftSide>

        <RightSide>
          <BasicInfo
            control={control}
            remove={remove}
            append={() => {
              append({ category: undefined });
            }}
            currentCategories={categories}
            isOptionsEditMode={isOptionsEditingMode}
          />
          <ProductSyncSettings
            control={control}
            isOptionsEditMode={isOptionsEditingMode}
          />
          <OptionsControl
            disableEdit={!!isAnythingModified}
            productId={productId}
            productOptions={productOptions}
            isEditMode={isOptionsEditingMode}
            refresh={handleRefresh}
            toggleEdit={handleOptionsEdit}
          />

          <ProductDescription
            control={control}
            isOptionsEditMode={isOptionsEditingMode}
          />
          {!isOptionsEditingMode && (
            <ImagesBox>
              <Typography
                variant={TypographyVariant.HEADER2}
                style={{ marginBottom: 10 }}
              >
                Images
              </Typography>
              <ImageUploader
                onChange={(fileArray: File[], imagesToDetach?: string[]) => {
                  setFiles(fileArray);
                  setImagesToDetach(imagesToDetach);
                }}
                value={{
                  filesValue: files,
                  bucketUrlsValue: currentVariantFields.images,
                }}
              />
            </ImagesBox>
          )}

          {(!productId && !editing) ||
          (true &&
            productId &&
            editing) ? (
            <Pricing
              isOptionsEditMode={isOptionsEditingMode}
              control={control}
              setValue={setValue}
            />
          ) : null}
          <InventoryNLocation
            editingWithPoliciesAvailable={
              (!productId && !editing) ||
              (true &&
                !!productId &&
                editing)
            }
            control={control}
            isOptionsEditMode={isOptionsEditingMode}
          />
          <DeliveryInfo
            control={control}
            isOptionsEditMode={isOptionsEditingMode}
          />
        </RightSide>
      </Content>
    </AnimateAppearanceWrapper>
  );
};
