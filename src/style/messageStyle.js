import { styled } from "styled-components";
import { BoxStyle, device } from "./StylesGlobal";
import { showInLeft } from "./animationStyle";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-self: start;
  overflow-y: auto;
`;
export const MessageBubble = styled.div`
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #00ab88;
  text-shadow: black 1px 2px 3px;
  border-radius: 16px 10px 16px 16px;
  padding: 0.5rem 1rem;
  margin-right: .5rem;
  margin-top: .8rem;
  max-width: 80%;
  ${BoxStyle};
  font-size: 1.1rem;
  animation: ${showInLeft} .4s forwards;
  animation-fill-mode: forwards;
  @media ${device.md}{
    font-size: 1.2rem;
  }
  `;
export const MessageBubbleTutorial = styled(MessageBubble)`
align-self: start;
margin-left: .5rem;
margin-right: 0rem;
background-color: #1c2c33;
color:#fff;
`
export const FlagImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 1.1rem;
  @media ${device.md}{
    font-size: 1.2rem;
  }
`;