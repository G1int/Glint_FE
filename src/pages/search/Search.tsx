import { useEffect, useState } from "react";
import { Badge, Button, Input, LocationModal, MeetingCard } from "components";
import {
  BigSearchIcon,
  CircleCloseIcon,
  FilterIcon,
  MoreIcon,
  SearchBlackIcon,
} from "assets";
import {
  useDeleteCurrentSearchKeyword,
  useGetCurrentSearchKeyword,
  useGetSearchMeeting,
} from "services";
import { meetingListItem } from "types";
import { useModal, useToast } from "hooks";
import * as S from "./Search.styled";
import { useRecoilValue } from "recoil";
import { userIdSelector } from "atoms";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { state } = useLocation();

  const [keyword, setKeyword] = useState("");
  const [lastMeetingId, setLastMeetingId] = useState<number | null>(null);
  const [meetingList, setMeetingList] = useState<meetingListItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const limit = 3;
  const userId = useRecoilValue(userIdSelector);

  const { data, refetch } = useGetSearchMeeting(
    keyword,
    limit,
    lastMeetingId,
    userId!
  );
  const { data: searchKeyword, refetch: searchKeywordRefetch } =
    useGetCurrentSearchKeyword(userId!, null);
  const { mutate: mutateDeleteKeyword } = useDeleteCurrentSearchKeyword();

  const { handleOpenModal, handleCloseModal } = useModal();
  const { addToast } = useToast();

  const handleSearch = () => {
    if (!keyword) {
      addToast({ content: "검색어를 입력해주세요." });
    } else {
      setIsSearching(true);
      setLastMeetingId(null);
    }
  };

  const handleClearSearch = () => {
    setKeyword("");
    setIsSearching(false);
    setMeetingList([]);
    setLastMeetingId(null);
    searchKeywordRefetch();
  };

  const handleCurrentKeyword = (currentKeyword: string) => {
    setKeyword(currentKeyword);
    setIsSearching(true);
    setMeetingList([]);
    setLastMeetingId(null);
  };

  const handleDeleteKeyword = (keywordId: string) => {
    mutateDeleteKeyword(keywordId);
  };

  const handleMoreMeeting = () => {
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
    // Main에서 키워드 누르고 들어올 때
    if (state) {
      setKeyword(state);
      setIsSearching(true);
    }
  }, [state]);

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
        <S.Highlight>{data?.totalCount ? data?.totalCount : 0}</S.Highlight>건
        <S.FilterWrapper>
          미팅 희망 지역
          <FilterIcon onClick={handleFilter} />
        </S.FilterWrapper>
      </S.SearchSubResult>
      <S.SearchResultContainer>
        {meetingList.length === 0 ? (
          <S.NoSearchMeeting>
            <BigSearchIcon />
            <div>검색된 미팅이 없어요.</div>
          </S.NoSearchMeeting>
        ) : (
          <MeetingCard meetingList={meetingList} />
        )}
        {data && data.totalCount > meetingList.length && (
          <S.More onClick={handleMoreMeeting}>
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
            <Badge
              label={item}
              key={index}
              variant="mdWhite"
              css={S.badge}
              handleClick={() => handleCurrentKeyword(item)}
            />
          ))}
        </S.BadgeWrapper>
      </S.PopularSearchWrapper>
      <S.Line />
      <S.CurrentSearchWrapper>
        <S.Title>최근검색어</S.Title>
        {searchKeyword && searchKeyword?.searchKeywords.length > 0 ? (
          searchKeyword?.searchKeywords.map((item, index) => (
            <S.CurrentSearchItem key={index}>
              <span onClick={() => handleCurrentKeyword(item.keyword)}>
                {item.keyword}
              </span>
              <CircleCloseIcon onClick={() => handleDeleteKeyword(item.id)} />
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
