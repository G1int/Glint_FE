import { useEffect, useState } from "react";
import { Badge, Button, Input, LocationModal, MeetingCard } from "components";
import { CircleCloseIcon, FilterIcon, MoreIcon, SearchBlackIcon } from "assets";
import { useGetSearchMeeting } from "services";
import { meetingListItem } from "types";
import { useModal, useToast } from "hooks";
import * as S from "./Search.styled";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [lastMeetingId, setLastMeetingId] = useState<number | null>(null);
  const [meetingList, setMeetingList] = useState<meetingListItem[]>([]);
  const [searchList, setSearchList] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const limit = 3;

  const { data, refetch } = useGetSearchMeeting(keyword, limit, lastMeetingId);

  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();

  const handleSearch = () => {
    if (!keyword) {
      addToast({ content: "검색어를 입력해주세요." });
    } else {
      if (keyword && !searchList.includes(keyword)) {
        setSearchList([...searchList, keyword]);
      }
      setIsSearching(true);
      setLastMeetingId(null);
    }
  };

  const handleClearSearch = () => {
    setKeyword("");
    setIsSearching(false);
    setMeetingList([]);
    setLastMeetingId(null);
  };

  const handleCurrentKeyword = (currentKeyword: string) => {
    setKeyword(currentKeyword);
    setIsSearching(true);
    setMeetingList([]);
    setLastMeetingId(null);
  };

  const handleDelete = (index: number) => {
    setSearchList(searchList.filter((_, i) => i !== index));
  };

  const handleMore = () => {
    if (data && data.meetings && data.meetings.length > 0) {
      setLastMeetingId(data.meetings[data.meetings.length - 1].meetingId);
    }
  };

  const handleFilter = () => {
    // TODO: handleConfirmClick 수정
    handleOpenModal(
      <LocationModal
        title="어디서 만나는게 편하세요?"
        highlight="최대 5개"
        description="까지 선택할 수 있어요."
        handleCloseClick={handleCloseModal}
        handleConfirmClick={() => console.log("ddd")}
        maxLength={5}
      />
    );
  };

  useEffect(() => {
    if (data && data.meetings) {
      setMeetingList((prevMeetings) => [...prevMeetings, ...data.meetings]);
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
      } catch (error) {
        addToast({
          content: "데이터 호출에 문제가 생겼습니다.다시 시도해주세요.",
        });
        console.error("검색 API 호출 중 오류 발생:", error);
      }
    };

    if ((isSearching && keyword) || lastMeetingId) {
      fetchData();
    }
  }, [isSearching, keyword, lastMeetingId]);

  return isSearching ? (
    <>
      <S.SearchContainer>
        <S.InputContainer>
          <Input
            css={S.input}
            value={keyword}
            handleChange={(e) => setKeyword(e.target.value.toString())}
            placeholder="검색어를 입력해주세요."
          />
          <S.ButtonWrapper>
            <Button variant="icon" onClick={handleClearSearch}>
              <CircleCloseIcon />
            </Button>
            <Button variant="icon" onClick={handleSearch}>
              <SearchBlackIcon />
            </Button>
          </S.ButtonWrapper>
        </S.InputContainer>
      </S.SearchContainer>
      <S.SearchSubResult>
        <S.Highlight>{meetingList.length}</S.Highlight>건
        <S.FilterWrapper>
          미팅 희망 지역
          <FilterIcon onClick={handleFilter} />
        </S.FilterWrapper>
      </S.SearchSubResult>
      <S.SearchResultContainer>
        <MeetingCard meetingList={meetingList} />
        {meetingList.length >= limit &&
          data &&
          data?.meetings.length >= limit && (
            <S.More onClick={handleMore}>
              더보기
              <MoreIcon />
            </S.More>
          )}
      </S.SearchResultContainer>
    </>
  ) : (
    <>
      <S.SearchContainer>
        <S.InputContainer>
          <Input
            css={S.input}
            handleChange={(e) => setKeyword(e.target.value.toString())}
            placeholder="검색어를 입력해주세요."
            value={keyword}
          />
          <Button variant="icon" onClick={handleSearch}>
            <SearchBlackIcon css={S.searchIcon} />
          </Button>
        </S.InputContainer>
      </S.SearchContainer>
      <S.PopularSearchWrapper>
        <S.Title>인기검색어</S.Title>
        <S.BadgeWrapper>
          {/* TODO: 인기검색어 확인 */}
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
              <span onClick={() => handleCurrentKeyword(item)}>{item}</span>
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
