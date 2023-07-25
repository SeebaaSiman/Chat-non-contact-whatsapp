import { getCountryData } from "../helper/getCountryData";
import { useLanguage } from "../language/LanguageContext";
import { IconArrow, IconMicrophone, IconSend } from "../style/IconStyle";
import {
  ErrorMessage,
  FlagImage,
  MessageBubble,
  MessageContainer,
  MessageBubbleTutorial,
} from "../style/messageStyle";

export const MessageContent = ({
  countryCode,
  areaCode,
  phoneNumber,
  errorMessage,
}) => {
  const { texts } = useLanguage();

  return (
    <MessageContainer>
      <MessageBubbleTutorial>
        {texts.messageTutorial1}
        <div>
          <IconMicrophone />
        </div>
      </MessageBubbleTutorial>
      <MessageBubbleTutorial>
        {texts.messageTutorial2}

        <div>
          <IconArrow />
        </div>
      </MessageBubbleTutorial>
      <MessageBubbleTutorial>
        {texts.messageTutorial3}
        <div>
          <IconSend />
        </div>
      </MessageBubbleTutorial>
      {countryCode !== "" && (
        <MessageBubble>
          {errorMessage != "" ? (
            <ErrorMessage>{errorMessage}</ErrorMessage>
          ) : (
            <>
              <FlagImage src={getCountryData(countryCode)?.flag} alt="Flag" />
              {getCountryData(countryCode)?.name} +{countryCode}
            </>
          )}
        </MessageBubble>
      )}

      {areaCode && (
        <MessageBubble>
          {texts.messageBubble1}
          {areaCode}
        </MessageBubble>
      )}
      {phoneNumber && (
        <MessageBubble>
          {texts.messageBubble2} {phoneNumber}
        </MessageBubble>
      )}
    </MessageContainer>
  );
};
