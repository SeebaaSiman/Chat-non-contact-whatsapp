import { getCountryData } from "../helper/getCountryData";
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
  return (
    <MessageContainer>
      <MessageBubbleTutorial>
        Ingresar número country/area/phone
        <div>
          <IconMicrophone />
        </div>
      </MessageBubbleTutorial>
      <MessageBubbleTutorial>
        Reset
        <div>
          <IconArrow />
        </div>
      </MessageBubbleTutorial>
      <MessageBubbleTutorial>
        Comenzar a chatear
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

      {areaCode && <MessageBubble>area code {areaCode} </MessageBubble>}
      {phoneNumber && <MessageBubble>phone number {phoneNumber}</MessageBubble>}
    </MessageContainer>
  );
};
