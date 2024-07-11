import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const BackLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  height: 80px;
  font-size: 1.8rem;
  font-weight: 500;
  padding-top: 40px;
  padding-left: 20px;
`;

export const Info = styled.div`
  height: 98px;
  padding: 16.25px 108px 9px 24px;
`;

export const line = css`
  align-self: center;
`;

export const ManageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120px;
  padding: 16px 19px;
  gap: 8px;
`;

export const manageButton = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 102px;
  height: 88px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${theme.colors.black};
  border: 1px solid lightGrey; // TODO: background 컬러 나오면 삭제
  gap: 4.5px;

  &:hover {
    background-color: ${theme.colors.rose100}; //TODO: 디자인 시스템에 따라 변경
  }
`;

export const icon = css`
  width: 24px;
  height: 24px;
`;

export const MainTitle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 32px;
    background-color: ${theme.colors.gray100};
    color: ${theme.colors.gray600};
    font-size: 1.3rem;
    display: flex;
    padding-left: 20px;
    align-items: center;
  `}
`;

export const ToggleContent = styled.div`
  display: flex;
  height: 64px;
  padding: 21px 20px;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const OutButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 130px;
  height: 22px;
`;

export const outButton = (theme: Theme) => css`
  font-size: 1.4rem;
  color: ${theme.colors.gray500};
`;

// TODO: Footer 머지하면 삭제
export const Footer = styled.div`
  height: 64px;
  width: 360px;
  border: 1px solid black;
  position: absolute;
  bottom: 0;
`;
