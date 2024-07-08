import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { CheckIcon } from "assets";
import * as S from "./FormRadioButton.styled";

interface FormRadioButtonProps {
  className?: string;
  radioList: { key: string; label: string }[];
  value: string;
  register: UseFormRegisterReturn<string>;
}

const FormRadioButton = ({
  className,
  radioList,
  value,
  register,
}: FormRadioButtonProps) => {
  return (
    <S.FormRadioButtonWrapper className={className}>
      {radioList.map((radio) => (
        <S.FormRadioButton key={radio.key} isSelected={value === radio.key}>
          <input type="radio" value={radio.key} {...register} />
          {radio.label}
          <CheckIcon css={S.checkIcon(value === radio.key)} />
        </S.FormRadioButton>
      ))}
    </S.FormRadioButtonWrapper>
  );
};

export default FormRadioButton;
