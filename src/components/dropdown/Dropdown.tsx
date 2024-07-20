import { useState } from "react";
import * as S from "./Dropdown.styled";
import { DropdownArrowIcon } from "assets";

interface DropdownProps {
  options: { label: string; value: number }[];
  handleChange: (selectedLabel: string) => void;
}
const Dropdown = ({ options, handleChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (label: string) => {
    setSelectedOption(label);
    handleChange(label);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.SelectContainer>
        <S.SelectedValue> {selectedOption || "선택하기"}</S.SelectedValue>
        <DropdownArrowIcon css={S.arrowIcon} onClick={handleToggle} />
        {isOpen && (
          <S.DropdownList>
            {options.map((option, index) => (
              <S.DropdownItem
                key={index}
                onClick={() => handleSelect(option.label)}
              >
                {option.label}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.SelectContainer>
    </S.DropdownContainer>
  );
};

export default Dropdown;
