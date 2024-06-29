import React from "react";

import * as S from "./CarouselItem.styled";

interface CarouselItemProps {
  title: string;
  content: string;
  img: string;
}

const CarouselItem = ({ title, content, img }: CarouselItemProps) => {
  return (
    <S.CarouselBox key={title}>
      <S.ContentWrapper>
        <span>{title}</span>
        <span>{content}</span>
      </S.ContentWrapper>
      <S.Img src={img} />
    </S.CarouselBox>
  );
};

export default CarouselItem;
