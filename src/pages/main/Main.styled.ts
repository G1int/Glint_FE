import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 64px;
`;

export const header = css`
  padding-top: 38px;
  padding-left: 22px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  height: 30px;
  align-self: center;
`;

export const logoIcon = css`
  align-content: center;
`;

export const BellIconWrapper = styled.div`
  padding-left: 208px;
  padding-top: 2px;
`;

export const MainIconContainer = styled.div`
  ${({ theme }) => css`
    height: 206px;
    width: 328px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 16px;
    margin-left: 16px;
    align-items: center;
    justify-items: center;
    box-shadow: 0 0 30px ${theme.colors.gray300};
  `}
`;

export const MainIconWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.caption_regular_12};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 8px;
    cursor: pointer;
  `}
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 237px;
  padding: 31px 16px 19px 19px;
  align-items: center;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_16};
  `}
`;

export const addIcon = css`
  position: fixed;
  bottom: 80px;
  transform: translateX(288px);
  width: 56px;
  height: 56px;
  background-color: transparent;
`;
