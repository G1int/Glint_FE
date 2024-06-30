import styled from "@emotion/styled";

export const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  row-gap: 10px; //TODO: 임시값 -> 디자인 나오면 변경 필요
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px; //TODO: 임시값 -> 디자인 나오면 변경 필요
  width: 100%;
  height: fit-content;
`;

export const Img = styled.img`
  width: 100%;
  border: 1px solid black;
`;
