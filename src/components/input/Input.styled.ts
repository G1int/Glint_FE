import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    height: 34px;
    border: 0;
    border-bottom: 1px solid
      ${hasError ? theme.colors.danger : theme.colors.gray600};
    padding: 2px 0 12px;
    font-size: 16px;

    &::placeholder {
      color: ${theme.colors.gray600};
    }
  `}
`;

export const Label = styled.span<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    margin-bottom: 6px;
    font-size: 14px;
    color: ${hasError ? theme.colors.danger : theme.colors.black};
  `}
`;

export const Message = styled.span<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    display: flex;
    margin-top: 8px;
    color: ${hasError && theme.colors.danger};
    font-size: 12px;
  `}
`;
