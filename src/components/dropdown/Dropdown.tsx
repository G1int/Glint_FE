import { useState } from "react";
import * as S from "./Dropdown.styled";
import { ArrowIcon } from "assets";

interface DropdownProps {
  title: string;
  options: { label: string; value: string }[];
}
const Dropdown = ({ title, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer>
      <S.SelectContainer>
        <S.Title>{title}</S.Title>
        <S.SelectedValue onClick={handleToggle}>
          {selectedOption || options[0].label}
        </S.SelectedValue>
        {/* TODO: 아이콘 디자인 시스템에 따라 변경 */}
        <ArrowIcon css={S.arrowIcon} onClick={handleToggle} />
        {isOpen && (
          <S.DropdownList>
            {options.map((option, index) => (
              <S.DropdownItem
                key={index}
                onClick={() => handleSelect(option.value)}
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
