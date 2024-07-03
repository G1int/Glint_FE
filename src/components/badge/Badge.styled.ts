import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Badge = styled.div<{
  size?: "sm" | "lg";
  isClickable?: boolean;
  disabled?: boolean;
  color?: string;
}>`
  ${({ size, isClickable, disabled, color }) => css`
    display: inline-block;
    padding: ${size === "sm"
      ? "5px 10px"
      : size === "lg"
      ? "15px 30px"
      : "10px 20px"};
    font-size: ${size === "sm" ? "1rem" : size == "lg" ? "2rem" : "1.5rem"};
    border: 1.5px solid ${isClickable && !disabled && color ? color : "#ced4da"}; // TODO: 디자인 시스템에 따라 달라질 예정
    color: ${isClickable && !disabled && color
      ? color
      : "grey"}; // TODO: 디자인 시스템에 따라 달라질 예정
    border-radius: 16px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    cursor: ${!disabled ? "pointer" : "default"};
  `}
`;
