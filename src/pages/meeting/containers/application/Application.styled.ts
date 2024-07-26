import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Application = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const button = css`
  width: 44px;
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_semibold_16};
  `}
`;

export const ApplicationBox = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 44px 1fr 96px;
    border: 1px solid ${theme.colors.gray600};
    border-radius: 8px;
    padding: 23px 20px;
  `}
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-left: 12px;
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_bold_14};
  `}
`;
export const Job = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.caption_regular_12};
    color: ${theme.colors.gray900};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;
