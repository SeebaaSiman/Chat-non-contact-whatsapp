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
import { BottomBar, BottomChat, ChatContainer, InputChat, TopBar } from "../style/chatStyle";

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
  } = useForm();

  return (
    <ChatContainer>
      <TopBar>
        <IconArrow onClick={onReset} />
        go to reset
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
          />
          <div>
            <IconClip />
            <IconCamera />
          </div>
        </BottomChat>

        {/* si los tres valores están completos aparece el send */}
        {countryCode && areaCode && phoneNumber ? (
          <IconSend onClick={onSend} />
        ) : (
          <IconMicrophone onClick={onNextInput} />
        )}
      </BottomBar>
    </ChatContainer>
  );
};