import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Toggle = styled.label<{ checked: boolean }>`
${({ checked, theme }) => css`
display: inline-block;
cursor: pointer;
width: 44px; 
height: 26px; 
background: ${checked ? theme.colors.pink900 : theme.colors.gray600}; 
border-radius: 14px ;
position: relative;

&:after {
  content: "";
  position: absolute;
  left: ${checked ? "calc(44.5%)" : "calc(5.5%)"};
  top: 2px; 
  width: 22px; 
  height: 22px; 
  background: #fff;
  border-radius: 50%;
  transition: 0.3s;

`}
  }
`;

export const Checkbox = styled.input`
  visibility: hidden;
`;
