import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button<{ size?: "sm" | "lg" }>`
  ${({ theme, size }) => css`
    padding: ${size === "sm"
      ? "5px 10px"
      : size === "lg"
      ? "15px 30px"
      : "10px 20px"};
    font-size: ${size === "sm" ? "1rem" : size === "lg" ? "2rem" : "1.5rem"};
    border: 8px;
    border-radius: 5px;
    background-color: ${theme.colors.rose400};
    color: ${theme.colors.white};
    transition: background-color 0.3s ease;

    &:disabled {
      color: ${theme.colors.gray500};
      background-color: ${theme.colors.gray100};
    }

    &:not(:disabled):hover {
      background-color: ${theme.colors.rose500};
    }
  `}
`;
