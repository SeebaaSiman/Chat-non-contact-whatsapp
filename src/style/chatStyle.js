import { styled } from "styled-components";
import { BoxStyle, device } from "./StylesGlobal";
import { showInLeft } from "./animationStyle";

export const ChatContainer = styled.div`
  background-color: #0d1b21;
  width: 90%;
  min-height: 450px;
  color: #00ab88;
  border-radius: 16px;
  box-shadow: ${BoxStyle.boxShadow};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
margin: 3rem 0;
animation: ${showInLeft} .4s forwards;
  animation-fill-mode: forwards;
  @media ${device.sm} {
    width: 60%;
  }
  @media ${device.md} {
    margin-left: 50px;
    width: 430px;
  }
  @media ${device.lg} {
    align-self: center;
    margin-right: 100px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 16px 16px 0 0;
  background-color: #1c2c33;
  color: #fff;
  div{
    display:flex;
  }
  p{
    font-size: 1.1rem;
  @media ${device.md}{
    font-size: 1.3rem;
  }
  }
`;

export const BottomBar = styled.div`
  margin: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
`;
export const BottomChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  padding: 10px;
  width: 80%;
  cursor: pointer;
  background-color: #1c2c33;
  color: #fff;
  @media ${device.sm}{
    width: 85%;
    div{
      display:flex;
    }
  }
`;

export const InputChat = styled.input`
  width: 90%;
  all: unset;
  caret-color: #00ab88;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
  @media ${device.sm}{
    width:80%;
}
  @media ${device.md}{
    width:90%;
    font-size: 1.3rem;
}
`;
