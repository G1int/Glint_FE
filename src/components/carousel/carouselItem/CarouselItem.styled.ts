import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  row-gap: 12px;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 72px;
  transform: translateX(32px);
`;

export const Title = styled.span`
  font-size: 32px;
  line-height: 38px;

  strong {
    font-weight: bold;
  }
`;

export const Content = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.subTitle_regular_16};
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: 360px;
  margin-top: 204px;
`;
