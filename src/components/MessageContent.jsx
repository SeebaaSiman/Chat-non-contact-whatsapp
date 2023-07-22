import { getCountryData } from "../helper/getCountryData";
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
        ingresa el número y luego el micrófono
      </MessageBubbleTutorial>
      <MessageBubbleTutorial>
        Para resetear apretar flecha de atrás
      </MessageBubbleTutorial>
      <MessageBubbleTutorial>
        Al terminar aparecerá el botón de send y podrás chatear con números que
        no tengas agendados
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
