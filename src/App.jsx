import back from "./assets/back.mp4";
import { ChatBox } from "./components/ChatBox";
import { Header, Page, Title, Title2 } from "./style/appStyle";

export const App = () => {
  return (
    <Page>
      <Header>
        <Title>Chat with non-contact</Title>
        <Title2>numbers in whatsapp</Title2>
      </Header>
      <video autoPlay loop muted>
        <source src={back} type="video/mp4" />
      </video>
      <ChatBox />
    </Page>
  );
};
