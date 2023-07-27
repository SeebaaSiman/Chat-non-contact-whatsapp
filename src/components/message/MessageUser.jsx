import { getCountryData } from "../../helper/getCountryData";
import { useLanguage } from "../../language/LanguageContext";
import { ErrorMessage, FlagImage, MessageBubble } from "../../style/messageStyle";

export const MessageUser = ({
  areaCode,
  countryCode,
  errorMessage,
  phoneNumber,
}) => {
  const { texts } = useLanguage();
  return (
    <>
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
    </>
  );
};
