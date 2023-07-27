import { useLanguage } from "../../language/LanguageContext";
import { IconArrow, IconMicrophone, IconSend } from "../../style/IconStyle";
import { MessageBubbleTutorial } from "../../style/messageStyle";

export const MessageTutorial = () => {
  const { texts } = useLanguage();
  return (
    <>
      <MessageBubbleTutorial>{texts.messageTutorial4}</MessageBubbleTutorial>
      <MessageBubbleTutorial>{texts.messageTutorial5}</MessageBubbleTutorial>
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
    </>
  );
};
