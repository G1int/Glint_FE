import React, { useState } from "react";
import * as S from "./Tag.styled";
import { Input, Badge } from "components";
import { TagCloseGrayIcon } from "assets";
import { useToast } from "hooks";

interface TagProps {
  handleChange: (value: string[]) => void;
}

const Tag = ({ handleChange }: TagProps) => {
  const { addToast } = useToast();
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagItem, setTagItem] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      tagItem.trim() !== "" &&
      tagItem.length <= 15 &&
      e.nativeEvent.isComposing === false
    ) {
      if (tagList.length <= 10) {
        const newTagList = [...tagList, tagItem.trim()];
        setTagList(newTagList);
        setTagItem("");
        handleChange(newTagList);
      } else {
        // TODO: 문구 확인
        addToast({ content: "태그는 10개까지 작성 가능합니다." });
      }
    }
  };

  const handleDelete = (index: number) => {
    const newTagList = tagList.filter((_, i) => i !== index);
    setTagList(newTagList);
    handleChange(newTagList);
  };

  return (
    <S.TagContainer>
      <Input
        type="text"
        value={tagItem}
        handleChange={(e) => setTagItem(e.target.value)}
        handleKeyDown={handleKeyDown}
        maxLength={15}
        placeholder="키워드 입력 후 엔터를 쳐주세요"
        css={S.input}
      />
      {tagList.map((tag, index) => (
        <Badge
          css={S.badge}
          key={index}
          label={tag}
          icon={<TagCloseGrayIcon onClick={() => handleDelete(index)} />}
          variant="mdWhite"
        />
      ))}
    </S.TagContainer>
  );
};

export default Tag;
