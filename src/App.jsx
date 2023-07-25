import back from "./assets/back.mp4";
import { ChatBox } from "./components/ChatBox";
import { useLanguage } from "./language/LanguageContext";
import { Header, Page, Title, Title2 } from "./style/appStyle";

export const App = () => {
  const { texts } = useLanguage();
  return (
    <Page>
      <Header>
        <Title>{texts.title}</Title>
        <Title2>{texts.title2}</Title2>
      </Header>
      <video autoPlay loop muted>
        <source src={back} type="video/mp4" />
      </video>
      <ChatBox />
    </Page>
  );
};
