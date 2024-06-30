import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Profile = styled.div`
  display: flex;
  column-gap: 10px;

  span {
    font-size: 12px; //TODO: 디자인 나오면 수정 필요
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImgContent = styled.div`
  position: relative;
  display: flex;
`;

export const IconContent = styled.div<{
  isChangeProfile?: boolean;
  isRoomManager?: boolean;
}>`
  ${({ isChangeProfile, isRoomManager }) => css`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${isChangeProfile ? "white" : isRoomManager && "yellow"};

    svg {
      width: 16px; //TODO: 디자인 나오면 수정 필요
      height: 16px;
    }
  `}
`;

export const KeywordContent = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 5px;

  & > span::before {
    content: "#";
  }
`;

export const MainInfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  column-gap: 5px;
`;

export const Name = styled.span`
  font-size: 18px !important;
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 5px;

  & > span:not(:last-of-type) {
    border-right: 1px solid black;
    padding-right: 5px;
  }
`;
