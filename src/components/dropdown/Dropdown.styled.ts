import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
  width: 360px;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 40px; // TODO: 디자인 시스템에 따라 변경
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.gray400}; // TODO: 디자인 시스템에 따라 변경
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    font-size: 1.2rem; // TODO: 디자인 시스템에 따라 변경
    font-weight: bold;
    pointer-events: none;
    color: ${theme.colors.black}; // TODO: 디자인 시스템에 따라 변경
  `}
`;

export const SelectedValue = styled.div`
  flex: 1;
  text-align: right;
  font-size: 1.2rem; // TODO: 디자인 시스템에 따라 변경
`;

export const arrowIcon = css`
  padding: 10px;
  cursor: pointer;
  rotate: 180deg;
`;

export const DropdownList = styled.ul`
  position: absolute;
  border: 1px solid black; // TODO: 디자인 시스템에 따라 변경
  width: 100%;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1;
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
