import { styled } from "styled-components";
import BebasNeue from "./BebasNeue-Regular.ttf";
import { device } from "../../style/StylesGlobal";

export const StyledFooter = styled.footer`
  @font-face {
    font-family: "Bebas Neue";
    src: url(${BebasNeue}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  /* background-color: #f1f1f1; */
  background-color: #233333;
  padding: 1rem;
  text-align: center;
  font-family: "Bebas Neue";
  font-size: 14px;
  letter-spacing: 0.6px;
  @media ${device.md} {
    font-family: "Bebas Neue";
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding:1.4rem;
  }
  `;

export const Copyright = styled.div`
font-family: "Bebas Neue";
color: #f1f1f1;
a{
  margin:10px;
}
@media ${device.md} {
  /* order: 1; */
  margin-right: auto;
}
`;

export const Links = styled.div`
font-family: "Bebas Neue";
display: flex;
flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  @media ${device.md} {
    order: 2;
    margin-left: auto;
    margin-top: 0;
  }

  a {
    font-family: "Bebas Neue";
    text-decoration: none;
    position: relative;
    color: #f1f1f1;
    transition: color 0.6s;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #b3ff00;
      border-radius: 4px;
      scale: 0.1;
      transform-origin: center;
      transition: scale 0.8s;
    }
    &:hover {
      color: #b3ff00;
      scale: 1.1;
    }
    &:hover::before {
      scale: 1;
    }
  }
`;
