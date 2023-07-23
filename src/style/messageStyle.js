import { styled } from "styled-components";
import { device } from "./StylesGlobal";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-self: start;
`;
export const MessageBubble = styled.div`
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #00ab88;
  text-shadow: black 1px 2px 3px;
  font-size: 1.1rem;
  border-radius: 16px 10px 16px 16px;
  padding: 0.5rem 1rem;
  margin-right: .5rem;
  margin-top: .8rem;
  max-width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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
`;