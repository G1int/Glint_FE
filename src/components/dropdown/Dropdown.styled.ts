import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
  ${({ theme }) => css`
    width: 320px;
    height: 48px;
    border: 1px solid ${theme.colors.gray600};
    border-radius: 6px;
    display: flex;
    position: relative;
    flex-direction: column;
  `}
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SelectedValue = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
    padding-left: 12px;
    flex: 1;
  `}
`;

export const arrowIcon = css`
  margin-right: 8px;
  cursor: pointer;
`;

export const DropdownList = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.colors.white};
    box-shadow: 0 0 30px ${theme.colors.gray400};
    width: 320px;
    top: 102%;
    left: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 1;
  `}
`;

export const DropdownItem = styled.li`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_16};
    height: 54.01px;
    padding-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: ${theme.colors.pink100};
      color: ${theme.colors.pink900};

      svg {
        & path {
          fill: ${theme.colors.pink900};
        }
      }
    }

    svg {
      & path {
        fill: ${theme.colors.white};
      }
    }

    &:last-child {
      border-bottom: none;
    }
  `}
`;

export const checkIcon = css`
  margin-right: 20px;
`;
