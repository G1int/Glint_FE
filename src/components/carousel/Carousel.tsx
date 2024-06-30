import React, { useEffect, useRef, useState } from "react";

import { CarouselItem } from "./carouselItem";
import * as S from "./Carousel.styled";

interface CarouselProps {
  info: { title: string; content: string; img: string }[];
}

const Carousel = ({ info }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMoveTo = (move: 1 | -1) => (): void => {
    if (index === 0 || index === info.length - 1) return;

    setIndex(index + move);
  };

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${index}00%)`;
    }
  }, [index]);

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        {/* TODO: 디자인에서 버튼 확인 필요-> 웹에서는 추가가 필요하여 작성 */}
        <S.Button onClick={handleMoveTo(-1)}>이전</S.Button>
        <S.CarouselItemWrapper>
          <S.CarouselItem ref={carouselRef}>
            {info.map((item, idx) => (
              <CarouselItem
                key={idx}
                title={item.title}
                content={item.content}
                img={item.img}
              />
            ))}
          </S.CarouselItem>
        </S.CarouselItemWrapper>
        <S.Button onClick={handleMoveTo(1)}>이후</S.Button>
      </S.CarouselContainer>
      <S.CurrentStateWrapper>
        {Array.from({ length: info.length }, (_, idx) => {
          return <S.CurrentState key={idx} index={index === idx} />;
        })}
      </S.CurrentStateWrapper>
    </S.CarouselWrapper>
  );
};

export default Carousel;
