import { useForm } from "../hook/useForm";
import { MessageContent } from "./MessageContent";
import {
  IconArrow,
  IconCam,
  IconCamera,
  IconClip,
  IconMenu,
  IconMicrophone,
  IconPhone,
  IconSend,
  IconSmile,
} from "../style/IconStyle";

import {
  BottomBar,
  BottomChat,
  ChatContainer,
  InputChat,
  TopBar,
} from "../style/chatStyle";
import { useLanguage } from "../language/LanguageContext";
import { SwitchLanguage } from "../language/SwitchLanguage";

export const ChatBox = () => {
  const {
    onSend,
    onReset,
    onNextInput,
    onInputChange,
    countryCode,
    areaCode,
    phoneNumber,
    inputValue,
    errorMessage,
    placeholderText,
    isComplete,
  } = useForm();
  const { texts } = useLanguage();

  return (
    <ChatContainer>
      <TopBar>
        <IconArrow onClick={onReset} style={{ cursor: "pointer" }} />
        <SwitchLanguage />
        <p>{texts.toggleLanguage}</p>
        <div>
          <IconCam />
          <IconPhone />
        </div>
        <IconMenu />
      </TopBar>

      <MessageContent
        countryCode={countryCode}
        areaCode={areaCode}
        phoneNumber={phoneNumber}
        errorMessage={errorMessage}
      />

      <BottomBar>
        <BottomChat>
          <IconSmile />
          <InputChat
            type="number"
            placeholder={placeholderText}
            value={inputValue}
            onChange={onInputChange}
            disabled={isComplete} // Deshabilita el input cuando el campo está completo
          />
          <div>
            <IconClip />
            <IconCamera />
          </div>
          
        </BottomChat>

        {/* si los tres valores están completos aparece el send */}
        {countryCode && areaCode && phoneNumber ? (
          <IconSend onClick={onSend} style={{ cursor: "pointer" }} />
        ) : (
          <IconMicrophone onClick={onNextInput} style={{ cursor: "pointer" }} />
        )}
      </BottomBar>
    </ChatContainer>
  );
};
