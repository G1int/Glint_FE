import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Toggle = styled.label<{ size?: "sm" | "lg"; checked: boolean }>`
${({ size, checked }) => css`
display: inline-block;
cursor: pointer;
text-indent: -9999px;
width: ${size === "sm" ? "42px" : size === "lg" ? "84px" : "63px"};
height: ${size === "sm" ? "22px" : size === "lg" ? "44px" : "33px"};
background: ${
  checked ? "green" : "gray"
}; // NOTE: 디자인 시스템에 따라 변경 예정
border-radius: ${size === "sm" ? "18px" : size === "lg" ? "36px" : "27px"};
position: relative;

&:after {
  content: "";
  position: absolute;
  left: ${checked ? "calc(50%)" : "calc(5.5%)"};
  top: ${size === "sm" ? "2px" : size === "lg" ? "4px" : "3px"};
  width:  ${size === "sm" ? "18px" : size === "lg" ? "36px" : "27px"};
  height: ${size === "sm" ? "18px" : size === "lg" ? "36px" : "27px"};
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;

`}
  }
`;
