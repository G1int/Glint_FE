import { useEffect, useState } from "react";
import * as S from "./RangeSlider.styled";

interface RangeSliderProps {
  min: number;
  max: number;
  handleValueChange?: (minValue: number, maxValue: number) => void;
}
const RangeSlider = ({ min, max, handleValueChange }: RangeSliderProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [minPercent, setMinPercent] = useState(0);
  const [maxPercent, setMaxPercent] = useState(100);
  const step = 1;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(parseInt(e.target.value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(parseInt(e.target.value));
  };

  const updatePercentages = () => {
    if (maxValue - minValue < step) {
      setMaxValue(minValue + step);
      setMinValue(maxValue - step);
    } else {
      const range = max - min;
      setMinPercent(((minValue - min) / range) * 100);
      setMaxPercent(100 - ((max - maxValue) / range) * 100);
    }
  };

  useEffect(() => {
    updatePercentages();
    if (handleValueChange) {
      handleValueChange(minValue, maxValue);
    }
  }, [minValue, maxValue]);

  //TODO: min, max 로직 수정 필요
  return (
    <S.SliderContainer>
      <S.SliderWrapper>
        <S.SliderRangeInner left={minPercent} width={maxPercent - minPercent} />
        <S.RangeWrapper>
          <S.Range
            type="range"
            min={min}
            max={max - step}
            step={step}
            value={minValue}
            onChange={(e) => handleMinChange(e)}
          />
          <S.Range
            type="range"
            min={min + step}
            max={max}
            step={step}
            value={maxValue}
            onChange={(e) => handleMaxChange(e)}
          />
        </S.RangeWrapper>
      </S.SliderWrapper>
    </S.SliderContainer>
  );
};

export default RangeSlider;
