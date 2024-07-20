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

export const DropdownList = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    border: 1px solid black; // TODO: 디자인 시스템에 따라 변경
    background-color: ${theme.colors.white};
    width: 100%;
    top: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 1;
  `}
`;

export const DropdownItem = styled.li`
  padding: 12px 16px; // TODO: 디자인 시스템에 따라 변경
  cursor: pointer;
  display: block;
  border-bottom: 1px solid black; // TODO: 디자인 시스템에 따라 변경
  font-size: 1.2rem; // TODO: 디자인 시스템에 따라 변경

  &:hover {
    background-color: #ddd; // TODO: 디자인 시스템에 따라 변경
  }

  &:last-child {
    border-bottom: none;
  }
`;
