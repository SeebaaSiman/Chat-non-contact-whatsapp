import { countries } from "../data/countries";

// Función para obtener el nombre y la imagen de la bandera según el countryCode
export const getCountryData = (code) => {
 const country = countries.find((country) => country.code === `+${code}`);
 if (country) {
  return {
   name: country.name,
   flag: country.flags[0],
  };
 }
 return null;
};