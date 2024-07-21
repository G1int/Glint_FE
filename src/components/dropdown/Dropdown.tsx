import { useEffect, useRef, useState } from "react";
import * as S from "./Dropdown.styled";
import { CheckIcon, DropdownArrowIcon } from "assets";

interface DropdownProps {
  options: readonly { label: string; key: number }[];
}
const Dropdown = ({ options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!dropMenuRef?.current) return;
      if (isOpen && !dropMenuRef?.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (label: string) => {
    setSelectedOption(label);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer ref={dropMenuRef}>
      <S.SelectContainer onClick={handleToggle}>
        <S.SelectedValue> {selectedOption || "선택하기"}</S.SelectedValue>
        <DropdownArrowIcon css={S.arrowIcon} />
        {isOpen && (
          <S.DropdownList>
            {options.map((option, index) => (
              <S.DropdownItem
                key={index}
                onClick={() => handleSelect(option.label)}
              >
                {option.label}
                <CheckIcon css={S.checkIcon} />
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.SelectContainer>
    </S.DropdownContainer>
  );
};

export default Dropdown;
