import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Profile = styled.div`
  display: flex;
  column-gap: 29px;
`;
export const ImgContent = styled.div`
  position: relative;
  display: flex;
`;

export const Img = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;

export const IconContent = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 30px;
  border-radius: 50%;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 4px;
`;

export const MainInfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-weight: 500;
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline_semibold_18};
  `}
`;

export const InfoContent = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.caption_regular_12};
    display: flex;
    justify-content: flex-start;
    column-gap: 4px;
    color: ${theme.colors.gray900};

    & > span:not(:last-of-type) {
      border-right: 1px solid ${theme.colors.gray500};
      padding-right: 4px;
    }
  `}
`;

export const SpinnerWrapper = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  place-content: center;
`;
