import { useState, useEffect } from "react"
import { countries } from "../data/countries";

export const useForm = () => {
 const [countryCode, setCountryCode] = useState("");
 const [areaCode, setAreaCode] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [inputValue, setInputValue] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 const [placeholderText, setPlaceholderText] = useState("");

 const onInputChange = (event) => {
  setInputValue(event.target.value);
 };
 const onNextInput = () => {
  if (inputValue.trim() !== "") {
   if (countryCode === "") {
    // Verificar si el countryCode es válido
    const country = countries.find(
     (country) => country.code === `+${inputValue}`
    );
    if (country) {
     setCountryCode(inputValue);
     setErrorMessage(""); // Limpiar el mensaje de error
    } else {
     setCountryCode(inputValue);
     setErrorMessage("❌ Código de país inválido"); // Mostrar mensaje de error
    }
   } else if (areaCode === "") {
    setAreaCode(inputValue);
   } else if (phoneNumber === "") {
    setPhoneNumber(inputValue);
   }
   setInputValue("");
  }
 };

 const onReset = () => {
  setCountryCode("");
  setAreaCode("");
  setPhoneNumber("");
  setInputValue("");
  setErrorMessage("");
 };


 useEffect(() => {
  if (countryCode === "" && areaCode === "" && phoneNumber === "") {
   setPlaceholderText("enter country code");
  } else if (countryCode !== "" && areaCode === "" && phoneNumber === "") {
   setPlaceholderText("enter area code");
  } else if (countryCode !== "" && areaCode !== "" && phoneNumber === "") {
   setPlaceholderText("enter phone number");
  } else if (countryCode !== "" && areaCode !== "" && phoneNumber !== "") {
   setPlaceholderText("press send");
  }
 }, [countryCode, areaCode, phoneNumber]);

 // Función para abrir la URL de WhatsApp con los valores ingresados
 const onSend = () => {
  if (countryCode && areaCode && phoneNumber) {
   const url = `https://api.whatsapp.com/send?phone=${countryCode}${areaCode}${phoneNumber}`;
   window.open(url, "_blank");
  }
 };
 return {
  onSend, onReset, onNextInput, onInputChange, countryCode,
  areaCode,
  phoneNumber,
  inputValue,
  errorMessage,
  placeholderText
 };


}
