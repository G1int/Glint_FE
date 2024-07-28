import * as S from "./LocationModal.styled";
import {
  CheckIcon,
  CloseIcon,
  ModalRectangleIcon,
  TagCloseWhiteIcon,
} from "assets";
import { BaseModal, Badge, Button } from "components";
import { useState } from "react";
import { useToast } from "hooks";
import { useGetCities, useGetStates } from "services";

interface LocationModalProps {
  className?: string;
  title?: string;
  description?: string;
  highlight?: string;
  maxLength: number;
  handleCloseClick: () => void;
  handleConfirmClick: (selectedList: string[]) => void;
}

const LocationModal = ({
  className,
  title,
  description,
  highlight,
  maxLength,
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
      if (selectedList.length < maxLength || maxLength === 0) {
        setSelectedList((prev) => [...prev, item]);
      } else if (maxLength !== 0 && selectedList.length >= maxLength) {
        addToast({
          content: `지역은 최대 ${maxLength}개까지 선택 가능합니다.`,
        });
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
        {maxLength !== 0 && (
          <S.SelectedLocation>
            {selectedList.map((tag, index) => (
              <Badge
                css={S.badge}
                key={index}
                label={tag}
                variant="mdNavy"
                icon={<TagCloseWhiteIcon onClick={() => handleDelete(index)} />}
              />
            ))}
          </S.SelectedLocation>
        )}
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
              {cities?.locations?.map((item) => (
                <S.LocationItem
                  key={item.locationId}
                  onClick={() => {
                    handleSelect(item.locationCity);
                    setSelectedCity(item.locationCity);
                  }}
                  isCity={true}
                  isSelected={item.locationCity === selectedCity}
                >
                  {item.locationCity}
                  <CheckIcon css={S.checkIcon} />
                </S.LocationItem>
              ))}
            </S.CityList>
          </S.LocationListWrapper>
        </S.LocationContainer>
      </S.ContentContainer>
      <S.ButtonWrapper>
        <Button
          variant="lgPink"
          onClick={() => handleConfirmClick(selectedList)}
        >
          확인
        </Button>
      </S.ButtonWrapper>
    </BaseModal>
  );
};

export default LocationModal;
