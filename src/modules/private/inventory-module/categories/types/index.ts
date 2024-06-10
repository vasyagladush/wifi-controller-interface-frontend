export interface AddCategoryFormValues {
  name: string;
  parent: string;
  slug: string;
  description: string;
  isSubCategory: boolean;
}

export const addCategoryFormDefaultValues = {
  name: "",
  description: "",
  subCategory: "",
  parent: "",
};
