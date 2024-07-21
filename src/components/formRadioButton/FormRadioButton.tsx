import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { CheckIcon } from "assets";
import * as S from "./FormRadioButton.styled";

interface FormRadioButtonProps {
  className?: string;
  isChecked?: boolean;
  radioList: readonly { key: string; label: string }[];
  variant?: "smNavy" | "lgPink"; //TODO: 추후 필수값으로 변경 예정
  value: string;
  register: UseFormRegisterReturn<string>;
}

const FormRadioButton = ({
  className,
  isChecked,
  radioList,
  value,
  variant = "lgPink",
  register,
}: FormRadioButtonProps) => {
  return (
    <S.FormRadioButtonWrapper className={className}>
      {radioList.map((radio) => (
        <S.FormRadioButton
          variant={variant}
          key={radio.key}
          isSelected={value === radio.key}
        >
          <input type="radio" value={radio.key} {...register} />
          {radio.label}
          {isChecked && <CheckIcon css={S.checkIcon(value === radio.key)} />}
        </S.FormRadioButton>
      ))}
    </S.FormRadioButtonWrapper>
  );
};

export default FormRadioButton;
