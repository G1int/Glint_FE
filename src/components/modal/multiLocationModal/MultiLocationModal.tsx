import { useEffect, useState } from "react";

import { BaseModal, Badge, Button } from "components";
import {
  CheckIcon,
  CloseIcon,
  ModalRectangleIcon,
  TagCloseWhiteIcon,
} from "assets";
import { useToast } from "hooks";
import { useGetCities, useGetStates } from "services";
import type { GetCitiesResponse, locationInfo } from "types";
import * as S from "./MultiLocationModal.styled";

interface MultiLocationModalProps {
  className?: string;
  title?: string;
  locations: locationInfo[];
  description?: string;
  highlight?: string;
  maxLength: number;
  handleCloseClick: () => void;
  handleConfirmClick: (selectedList: locationInfo[]) => void;
}

const MultiLocationModal = ({
  className,
  title,
  description,
  locations,
  highlight,
  maxLength,
  handleCloseClick,
  handleConfirmClick,
}: MultiLocationModalProps) => {
  const { addToast } = useToast();
  const [selectedState, setSelectedState] = useState<string>("");
  const [reverseCities, setReverseCities] = useState<
    GetCitiesResponse["locations"] | null
  >(null);
  const [selectedList, setSelectedList] = useState<locationInfo[]>(
    locations ?? []
  );

  const { data: states } = useGetStates();
  const { data: cities, isSuccess: isSuccessCities } =
    useGetCities(selectedState);

  const filteredSelectedList = selectedList.map((item) => item.locationName);

  const handleSelect = (id: number, locationName: string) => {
    if (filteredSelectedList.includes(locationName)) {
      const filteredSelectedList = selectedList.filter(
        (selected) => selected.locationName !== locationName
      );

      return setSelectedList(filteredSelectedList);
    }

    if (maxLength !== 0 && selectedList.length >= maxLength) {
      addToast({
        content: `지역은 최대 ${maxLength}개까지 선택 가능합니다.`,
      });
    } else {
      setSelectedList((prev) => [...prev, { id, locationName }]);
    }
  };

  const handleDelete = (index: number) => {
    setSelectedList(selectedList.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (!cities) return;

    setReverseCities(cities.locations.reverse());
  }, [isSuccessCities]);

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
                label={tag.locationName}
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
              {reverseCities?.map((item) => {
                const selected = `${item.locationState} ${item.locationCity}`;

                return (
                  <S.LocationItem
                    key={item.locationId}
                    onClick={() => {
                      handleSelect(
                        item.locationId,
                        `${item.locationState} ${item.locationCity}`
                      );
                    }}
                    isCity={true}
                    isSelected={filteredSelectedList.includes(selected)}
                  >
                    {item.locationCity}
                    <CheckIcon css={S.checkIcon} />
                  </S.LocationItem>
                );
              })}
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

export default MultiLocationModal;
