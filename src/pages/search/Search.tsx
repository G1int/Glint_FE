import { Badge, Input, LocationModal, MeetingCard } from "components";
import * as S from "./Search.styled";
import { CircleCloseIcon, FilterIcon, SearchBlackIcon } from "assets";
import { useState } from "react";
import Img from "assets/images/img_01.jpg";
import { useModal } from "hooks";
const Search = () => {
  const { handleOpenModal, handleCloseModal } = useModal();
  // TODO: 예시코드-api연동 후 삭제
  const [meetings, setMeetings] = useState<Array<{ id: number; img: string }>>([
    { id: 1, img: Img },
    { id: 2, img: Img },
    { id: 3, img: Img },
    { id: 4, img: Img },
    { id: 5, img: Img },
    { id: 6, img: Img },
    { id: 7, img: Img },
    { id: 8, img: Img },
    { id: 9, img: Img },
    { id: 10, img: Img },
  ]);
  const [searchList, setSearchList] = useState<string[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = () => {
    if (searchItem && !searchList.includes(searchItem)) {
      setSearchList([...searchList, searchItem]);
    }
    setIsSearching(true);
  };

  const handleClearSearch = () => {
    setSearchItem("");
    setIsSearching(false);
  };

  const handleDelete = (index: number) => {
    setSearchList(searchList.filter((_, i) => i !== index));
  };

  const handleFilter = () => {
    // TODO: Maxlength 추가, handleConfirmClick 수정
    handleOpenModal(
      <LocationModal
        title="어디서 만나는게 편하세요?"
        highlight="최대 5개"
        description="까지 선택할 수 있어요."
        handleCloseClick={handleCloseModal}
        handleConfirmClick={() => console.log("ddd")}
      />
    );
  };
  return isSearching ? (
    <>
      <S.SearchContainer>
        <S.InputContainer>
          <Input
            css={S.input}
            value={searchItem}
            handleChange={(e) => setSearchItem(e.target.value)}
            placeholder="검색어를 입력해주세요."
          />
          <S.ButtonWrapper>
            <CircleCloseIcon onClick={handleClearSearch} />
            <SearchBlackIcon onClick={handleSearch} />
          </S.ButtonWrapper>
        </S.InputContainer>
      </S.SearchContainer>
      <S.SearchSubResult>
        <S.Highlight>109</S.Highlight>건
        <S.FilterWrapper>
          미팅 희망 지역
          <FilterIcon onClick={handleFilter} />
        </S.FilterWrapper>
      </S.SearchSubResult>
      <S.SearchResultContainer>
        <MeetingCard count={5} meetingList={meetings} />
      </S.SearchResultContainer>
    </>
  ) : (
    <>
      <S.SearchContainer>
        <S.InputContainer>
          <Input
            css={S.input}
            handleChange={(e) => setSearchItem(e.target.value)}
            placeholder="검색어를 입력해주세요."
            value={searchItem}
          />
          <SearchBlackIcon css={S.searchIcon} onClick={handleSearch} />
        </S.InputContainer>
      </S.SearchContainer>
      <S.PopularSearchWrapper>
        <S.Title>인기검색어</S.Title>
        <S.BadgeWrapper>
          {["대기업", "스타트업", "4:4", "전문직"].map((item, index) => (
            <Badge label={item} key={index} variant="mdWhite" css={S.badge} />
          ))}
        </S.BadgeWrapper>
      </S.PopularSearchWrapper>
      <S.Line />
      <S.CurrentSearchWrapper>
        <S.Title>최근검색어</S.Title>
        {searchList.length > 0 ? (
          searchList.map((item, index) => (
            <S.CurrentSearchItem key={index}>
              {item}
              <CircleCloseIcon onClick={() => handleDelete(index)} />
            </S.CurrentSearchItem>
          ))
        ) : (
          <S.CurrentSearchItem>최근 검색어가 없습니다.</S.CurrentSearchItem>
        )}
      </S.CurrentSearchWrapper>
    </>
  );
};

export default Search;
