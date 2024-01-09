import { styled } from "styled-components";
import { device } from "./StylesGlobal";
import { showInLeft, showInRight } from "./animationStyle";

export const Title = styled.h1`
  z-index: 200;
  color: #fff;
  opacity:0;
  text-transform: uppercase;
  font-size: 2rem;
  text-shadow: black 1px 2px 3px;
  animation: ${showInLeft} .6s ease-in-out forwards;
  animation-fill-mode: forwards;
  @media ${device.md}{
    font-size: 2.2rem;
  }

`;
export const Title2 = styled(Title)`
  color: #00d670;
  animation: ${showInRight} .6s ease-in-out forwards;
  animation-fill-mode: forwards;
`;
export const Header = styled.header`
position:absolute;
top:1%;
left: 0;
width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md}{
    flex-direction: row;
    gap:10px;
  }
`;
export const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color:#a5c174;
  @media ${device.sm}{
    background-color: #444;
  }
  @media ${device.md} {
  max-height: 100vh;
    flex-direction: row;
   }
`;

export const VideoContainer = styled.div`
width: 100vw;
height: 100vh;

 @media ${device.md}{
  min-width:40%;
 }
 video {
   z-index: 1;
   width:100%;
   height: 100%;
  object-fit: cover;
  object-position: center;
    @media ${device.sm} {


    }
    @media ${device.md} {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
  `
export const ChatContainer = styled.div`
background-color:#a5c174;
width:100vw;
padding:1rem;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
@media ${device.sm}{
  height: 100vh;
  padding:0rem;
}
@media ${device.md}{
  padding:2rem 0 0 0;
  background-color: #444;
}
`