import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
    min-height: 304px;
    width: 320px;
    border-radius: 6px;
    border: 0.5px solid ${theme.colors.gray600};
    padding: 13px 12px;
    white-space: pre-wrap;
    resize: none;
    overflow: auto;

    &::placeholder {
      color: ${theme.colors.gray600};
    }
  `}
`;
