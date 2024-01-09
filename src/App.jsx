import dog from "./assets/Dog.mp4";
import { ChatBox } from "./components/ChatBox";
import { useLanguage } from "./language/LanguageContext";
import {
  Header,
  Page,
  Title,
  Title2,
  VideoContainer,
  ChatContainer,
} from "./style/appStyle";

export const App = () => {
  const { texts } = useLanguage();
  return (
    <Page>

      <Header>
        <Title>{texts.title}</Title>
        <Title2>{texts.title2}</Title2>
      </Header>

      <VideoContainer>
        <video autoPlay loop muted>
          <source src={dog} type="video/mp4" />
        </video>
      </VideoContainer>
      
      <ChatContainer>
        <ChatBox />
      </ChatContainer>
    </Page>
  );
};
