import React, { useEffect, useRef, useState } from "react";

import { CarouselItem } from "./carouselItem";
import * as S from "./Carousel.styled";
import { ArrowIcon } from "assets";

interface CarouselProps {
  className?: string;
  info: {
    title: React.ReactNode;
    content: React.ReactNode;
    img: string;
  }[];
}

const Carousel = ({ className, info }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMoveTo = (move: 1 | -1) => (): void => {
    if (
      (index + move < 0 && move === -1) ||
      (move === 1 && index >= info.length - 1)
    )
      return;

    setIndex(index + move);
  };

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <S.CarouselWrapper className={className}>
      <S.CarouselContainer>
        {/* 이전 */}
        {/* TODO: ArrowIcon 디자인 체크*/}
        {index > 0 && (
          <S.PrevButton onClick={handleMoveTo(-1)}>
            <ArrowIcon css={S.prevIcon} />
          </S.PrevButton>
        )}
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

        {/* 이후 */}
        {index !== info.length - 1 && (
          <S.NextButton onClick={handleMoveTo(1)}>
            <ArrowIcon css={S.nextIcon} />
          </S.NextButton>
        )}
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
