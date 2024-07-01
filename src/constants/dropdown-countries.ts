import { countries } from "./countries";

export const dropdownMappedCountryCodes = countries.map((el) => ({
    label: el.countryName,
    value: el.country,
  }));