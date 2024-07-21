import { Badge, Input } from "components";
import * as S from "./Search.styled";
import { CircleCloseIcon, SearchBlackIcon } from "assets";
import { useState } from "react";

const Search = () => {
  const [searchList, setSearchList] = useState<string[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");

  const handleSearch = () => {
    if (searchItem && !searchList.includes(searchItem)) {
      setSearchList([...searchList, searchItem]);
      setSearchItem("");
    }
  };

  const handleDelete = (index: number) => {
    setSearchList(searchList.filter((_, i) => i !== index));
  };

  return (
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
