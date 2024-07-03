import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Toggle = styled.label<{ checked: boolean }>`
${({ checked }) => css`
display: inline-block;
cursor: pointer;
width: 42px; // TODO: 디자인 시스템에 따라 변경 예정
height: 22px; // TODO: 디자인 시스템에 따라 변경 예정
background: ${
  checked ? "green" : "gray"
}; // TODO: 디자인 시스템에 따라 변경 예정
border-radius: 18px ;
position: relative;

&:after {
  content: "";
  position: absolute;
  left: ${checked ? "calc(50%)" : "calc(5.5%)"};
  top: 2px; // TODO: 디자인 시스템에 따라 변경 예정
  width: 18px; // TODO: 디자인 시스템에 따라 변경 예정
  height: 18px; // TODO: 디자인 시스템에 따라 변경 예정
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;

`}
  }
`;

export const Checkbox = styled.input`
  visibility: hidden;
`;
