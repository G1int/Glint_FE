import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalBody = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 10px;
  height: 100%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  align-self: center;
`;

// TODO: color, backgroud할지말지 등 css 디자인 시스템에 따라 수정
export const MainInfoContent = styled.div`
  position: absolute;
  top: 75%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  display: flex;
  column-gap: 10px;
`;

export const InfoContent = styled.div`
  position: absolute;
  top: 83%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  display: flex;
  column-gap: 10px;

  & > span:not(:last-of-type) {
    border-right: 1px solid white;
    padding-right: 10px;
  }
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: left;
  padding: 10px;
`;
export const IntroduceContent = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  padding: 10px 10px 20px 10px;
  text-align: left;
`;

export const BottomModal = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  border: 0px; //TODO: 디자인 시스템에 따라 변경 예정
  background-color: #ffffff; //TODO: 컬러는 디자인 시스템에 따라 변경 예정
  position: fixed;
  top: auto;
  bottom: 10px;
  left: 50%;
  height: 585px; // TODO: 디자인 시스템에 따라 변경 예정
  width: 345px; // TODO: 디자인 시스템에 따라 변경 예정
  max-height: calc(100% - 100px);
  text-align: center;
  transform: translateX(-50%);
`;
