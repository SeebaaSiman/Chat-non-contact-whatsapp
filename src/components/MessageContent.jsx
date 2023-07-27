import { MessageTutorial } from "./message/MessageTutorial";
import { MessageUser } from "./message/MessageUser";
import { MessageContainer } from "../style/messageStyle";

export const MessageContent = ({
  countryCode,
  areaCode,
  phoneNumber,
  errorMessage,
}) => {
  return (
    <MessageContainer>
      <MessageTutorial />
      <MessageUser
        areaCode={areaCode}
        countryCode={countryCode}
        errorMessage={errorMessage}
        phoneNumber={phoneNumber}
      />
    </MessageContainer>
  );
};
