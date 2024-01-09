import { styled } from "styled-components";
import { BoxStyle, device } from "./StylesGlobal";
import { showInLeft } from "./animationStyle";

export const ChatContainer = styled.div`
  background-color: #0d1b21;
max-height: 90%;
max-width:80%;
  aspect-ratio: 3/4;
  color: #00ab88;
  border-radius: 16px;
   ${BoxStyle};
   z-index: 100;
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${showInLeft} .4s forwards;
  animation-fill-mode: forwards;
  @media ${device.sm} {
    height: 90%;
  }
  @media ${device.md} {
   
    height: 85%;
  }
`;

export const TopBar = styled.div`
${BoxStyle};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 16px 16px 0 0;
  background-color: #1c2c33;
  color: #fff;
  div{
    display:flex;
    place-items: center;
    gap:15px;
  }
  p{
    font-size: 1.1rem;
    @media ${device.md}{
      /* font-size: 1.2rem; */
    }
  }
  `;
export const BottomBar = styled.div`
margin: 10px;
background-color: transparent;
display: flex;
align-items: center;
justify-content: space-around;
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
  width: 100%;
  all: unset;
  caret-color: #00ab88;
  text-align: center;
  color: #00ab88;
  text-shadow: black 1px 2px 3px;
  font-size: 1.1rem;
  @media ${device.sm}{
    width:80%;
}
@media ${device.md}{
  /* width:90%;
  font-size: 1.3rem; */
}
`;
