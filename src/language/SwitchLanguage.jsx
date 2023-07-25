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
        onChange={handleChangeLanguage}
      />
      <ToggleContainer>
        <ToggleButton />
      </ToggleContainer>
    </ToggleWrapper>
  );
};
