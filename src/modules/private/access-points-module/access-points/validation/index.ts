import * as yup from "yup";

const categorySchema = yup.object().shape({
  category: yup.string().nullable(),
});

export const optionsSchema = yup.object().shape({
  options: yup.array().of(
    yup.object().shape({
      name: yup
        .string()
        .trim()
        .required("Option name is required")
        .test("length", "Must not exceed 30 characters", (val) =>
          val ? val?.length <= 30 : false
        ),
      values: yup.array().of(
        yup
          .string()
          .trim()
          .required("Value is required")
          .test("length", "Must not exceed 30 characters", (val) =>
            val ? val?.length <= 30 : false
          )
      ),
    })
  ),
});

export const addNewAccessPointSchema = yup.object({
  name: yup.string().required("Name required"),
  categories: yup.array().of(categorySchema),
  brand: yup.string().nullable(),
  supplier: yup.string(),
  status: yup
    .string()
    // .oneOf(Object.values(ProductStatus))
    .required("Status is required"),
  isSellable: yup.boolean(),
  isTrackable: yup.boolean(),
  statusSettings: yup.object().when("isTrackable", {
    is: true,
    then: yup.object({
      lowStockThreshold: yup
        .number()
        .required("Stock threshold required")
        .min(0)
        .typeError("Must be a number"),

      highStockThreshold: yup
        .number()
        .required("Stock threshold required")
        .min(0)
        .typeError("Must be a number"),
    }),
  }),

  variant: yup.object().shape({
    sku: yup.string(),
    description: yup
      .string()
      .max(1000, "Description should be less than 1000 characters"),
    shortDescription: yup
      .string()
      .max(255, "Short description should be less than 255 characters"),

    simpleDescription: yup
      .string()
      .max(50, "Simple description should be at most 50 characters"),
    hsCode: yup
      .string()
      .notRequired()
      .matches(/^[0-9]*$/, "Must be digits only")
      .matches(/.{2,}/, {
        excludeEmptyString: true,
        message: "Must be at least 2 characters",
      })
      .max(25, "Must be at most 25 characters"),

    pricing: yup.object().shape({
      cost: yup
        .number()
        .min(0, "Should be ≥ 0")
        .typeError("Must be valid")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
      markup: yup
        .number()
        .typeError("Must be a number")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
      minOrderQty: yup
        .number()
        .typeError("Must be a number")
        .min(1, "Should be greater than 0")
        .required("This field is required")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
      maxOrderQty: yup
        .number()
        .typeError("Must be a number")
        .min(1, "Should be greater than 0")
        .required("This field is required")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
      VAT: yup
        .number()
        .positive("Should be ≥ 0")
        .integer("VAT should be an integer")
        .required("Vat is required")
        .min(0, "VAT should be ≥ 0")
        .typeError("Must be a number")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
      price: yup.string().required("Price is required"),
      wholeSalePrice: yup
        .number()
        .min(0, "Should be ≥ 0")
        .typeError("Must be valid")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
      wholeSaleQty: yup
        .number()
        .typeError("Must be a number")
        .min(0, "Must be greater than 0")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),

      priceWithVAT: yup
        .number()
        .required("This field is required")
        .min(0, "Should be ≥ 0")
        .typeError("Must be valid")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
    }),

    deliveryInfo: yup.object().shape({
      sizeOfParcel: yup.string(),
      // shippingCost: yup
      //   .string()
      //   .matches(/^[0-9]*\.[0-9]{2}$/, "Must match 00.00 format"),
      // postageCost: yup.string().matches(/^[0-9]*\.[0-9]{2}$/),
      advertisedCost: yup
        .string()
        .matches(/^[0-9]*\.[0-9]{2}$/, "Must match 00.00 format"),
      volume: yup.string(),
      volumeUnit: yup.string(), // .oneOf(Object.values(MeasurementUnits)),
      packagingItems: yup
        .number()
        .min(0)
        .typeError("Must be a number")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
    }),

    inventoryInfo: yup.object().shape({
      barcode: yup.string(),
      room: yup.string(),
      shelf: yup.string(),
      measurement: yup.string(),
      measurementUnit: yup.string(), // .oneOf(Object.values(MeasurementUnits)),
      qty: yup
        .number()
        .typeError("Must be a number")
        .min(0, "Must be greater than 0")
        .transform((cv, ov) => {
          return ov === "" ? undefined : cv;
        }),
      // soldCount: yup.number().min(0),
    }),
  }),

  // images
  images: yup
    .array()
    .of(yup.mixed())
    .max(10, "Product can have no more then 10 images"),
});
