import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 20px;
  min-height: 92px;
  height: auto;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 500; //TODO: 디자인 시스템에 따라 변경 예정
    margin-bottom: 8px;
    color: ${theme.colors.black};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 22px;
    color: ${theme.colors
      .gray700}; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  `}
`;

export const ModalFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${theme.colors.gray200};
    height: 56px;
    font-size: 1.6rem;

    & > button {
      flex: 1;
      border-right: 1px solid ${theme.colors.gray200};
      text-align: center;
    }

    & > button:last-of-type {
      border-right: none;
    }
  `}
`;

export const ModalButton = styled.button`
  border-radius: 0px;
`;

export const confirmButton = (theme: Theme) => css`
  color: ${theme.colors.rose400};
  border-bottom-right-radius: 16px;
  height: 55px;
`;

export const cancelButton = (theme: Theme) => css`
  color: ${theme.colors.black};
  border-bottom-left-radius: 16px;
  height: 55px;
`;
