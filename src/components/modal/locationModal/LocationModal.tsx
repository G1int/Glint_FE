import * as S from "./LocationModal.styled";
import { CheckIcon, CloseIcon, ModalRectangleIcon, TagCloseIcon } from "assets";
import { BaseModal, Badge, Button } from "components";
import { useState } from "react";
import { useToast } from "hooks";
import { useGetCities, useGetStates } from "services";

interface LocationModalProps {
  className?: string;
  title?: string;
  description?: string;
  highlight?: string;
  handleCloseClick: () => void;
  handleConfirmClick: (selectedList: string[]) => void;
}

const LocationModal = ({
  className,
  title,
  description,
  highlight,
  handleCloseClick,
  handleConfirmClick,
}: LocationModalProps) => {
  const { addToast } = useToast();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const { data: states } = useGetStates();
  const { data: cities } = useGetCities(selectedState);

  const handleSelect = (item: string) => {
    if (!selectedList.includes(item)) {
      // TODO: 갯수선택 체크
      if (selectedList.length < 5) {
        setSelectedList((prev) => [...prev, item]);
      } else {
        addToast({ content: "지역은 최대 5개까지 선택 가능합니다." });
      }
    }
  };

  const handleDelete = (index: number) => {
    setSelectedList(selectedList.filter((_, i) => i !== index));
  };

  return (
    <BaseModal className={className} css={S.bottomModal}>
      <S.StaticContainer>
        <ModalRectangleIcon css={S.rectangleIcon} />
        <CloseIcon css={S.closeIcon} onClick={handleCloseClick} />
      </S.StaticContainer>
      <S.Header>
        {title && <S.Title>{title}</S.Title>}
        {description && (
          <S.Description>
            <S.Highlight>{highlight && highlight}</S.Highlight>
            {description}
          </S.Description>
        )}
      </S.Header>
      <S.ContentContainer>
        <S.SelectedLocation>
          {selectedList.map((tag, index) => (
            <Badge css={S.badge} key={index}>
              {tag}
              <TagCloseIcon onClick={() => handleDelete(index)} />
            </Badge>
          ))}
        </S.SelectedLocation>
        <S.LocationContainer>
          <S.LocationTitleWrapper>
            <S.LocationTitle isLeft={true}>시/도</S.LocationTitle>
            <S.Separator />
            <S.LocationTitle>시/군/구</S.LocationTitle>
          </S.LocationTitleWrapper>
          <S.LocationListWrapper>
            <S.StateList>
              {states?.map((item: string) => (
                <S.LocationItem
                  key={item}
                  onClick={() => {
                    handleSelect(item);
                    setSelectedState(item);
                  }}
                  isCity={false}
                  isSelected={item === selectedState}
                >
                  {item}
                </S.LocationItem>
              ))}
            </S.StateList>
            <S.CityList>
              {cities?.map((item: string) => (
                <S.LocationItem
                  key={item}
                  onClick={() => {
                    handleSelect(item);
                    setSelectedCity(item);
                  }}
                  isCity={true}
                  isSelected={item === selectedCity}
                >
                  {item}
                  <CheckIcon css={S.checkIcon} />
                </S.LocationItem>
              ))}
            </S.CityList>
          </S.LocationListWrapper>
        </S.LocationContainer>
      </S.ContentContainer>
      <S.ButtonWrapper>
        <Button variant="mdWhite" css={S.button} onClick={handleCloseClick}>
          취소
        </Button>
        <Button
          variant="mdPink"
          css={S.button}
          onClick={() => handleConfirmClick(selectedList)}
        >
          확인
        </Button>
      </S.ButtonWrapper>
    </BaseModal>
  );
};

export default LocationModal;
