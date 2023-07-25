import { styled } from "styled-components";
import { device } from "./StylesGlobal";
import {  showInLeft, showInRight } from "./animationStyle";

export const Title = styled.h1`
  z-index: 200;
  color: #fff;
  text-transform: uppercase;
  text-shadow: black 1px 2px 3px;
  animation: ${showInLeft} .6s forwards;
  animation-fill-mode: forwards;
`;
export const Title2 = styled(Title)`
  color: #00d670;
  animation: ${showInRight} .6s forwards;
  animation-fill-mode: forwards;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  @media ${device.sm}{
    margin: 0;
  }
  @media ${device.md} {
    position: absolute;
    flex-direction: row;
    width: 100%;
    margin: 1rem;
    top: 0;
    left: 25%;
    ${Title2} {
      margin-left: 15px;
    }
  }
`;
export const Page = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color:#a5c174;
  @media ${device.sm}{
    background-color: #444;
  }
  @media ${device.md} {
    justify-content: center;
    align-items: start;
  }
  video {
    display:none;
    @media ${device.sm}{
      display:block;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
    @media ${device.md} {
      object-position: right;
      object-fit: contain;
    }

  }
`;
