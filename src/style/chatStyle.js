import { styled } from "styled-components";
import { BoxStyle, device } from "./StylesGlobal";

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
  @media ${device.sm} {
    width: 60%;
  }
  @media ${device.md} {
    margin-left: 50px;
    width: 430px;
  }
  @media ${device.lg} {
    margin-left: 100px;
    /* width: 30%; */
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
`;

export const BottomBar = styled.div`
  margin: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  @media ${device.sm}{

  }
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
    width: 90%;
  }
`;

export const InputChat = styled.input`
  width: 90%;
  all: unset;
  caret-color: #00ab88;
  color: #fff;
  font-size: 1.2rem;

`;
