import React from "react";

import * as S from "./CarouselItem.styled";

interface CarouselItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
  img: string;
}

const CarouselItem = ({ title, content, img }: CarouselItemProps) => {
  return (
    <S.CarouselBox>
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.ContentWrapper>
      <S.Img src={img} />
    </S.CarouselBox>
  );
};

export default CarouselItem;
