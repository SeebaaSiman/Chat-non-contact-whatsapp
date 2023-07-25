import { useLanguage } from "./LanguageContext";
import {
  ToggleButton,
  ToggleCheckbox,
  ToggleContainer,
  ToggleWrapper,
} from "./switchStyle";
export const SwitchLanguage = () => {
  const { setLanguage } = useLanguage();

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.checked ? "es" : "en";
    setLanguage(newLanguage);
  };
  return (
    <ToggleWrapper>
      <ToggleCheckbox
        type="checkbox"
        // checked={language === "es"} // Marca el checkbox si el idioma es 'es'
        onChange={handleChangeLanguage}
      />

      <ToggleContainer>
        <ToggleButton />
      </ToggleContainer>
    </ToggleWrapper>
  );
};
