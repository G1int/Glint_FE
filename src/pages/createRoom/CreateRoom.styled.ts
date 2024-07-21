import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const CreateRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;

  & > div:first-of-type {
    padding: 16px 20px 24px;
  }

  & > div:not(:first-of-type) {
    padding: 24px 20px;
  }
`;

export const formRadioButton = css`
  column-gap: 5px;

  & > label {
    justify-content: center;
    padding: 15px 39px;
  }
`;

export const input = (theme: Theme) => css`
  ${theme.fonts.subTitle_regular_16};
  min-width: 245px;
  height: min-content;
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray600};
  padding: 13px 12px;

  &::placeholder {
    ${theme.fonts.subTitle_regular_16};
    color: ${theme.colors.gray700};
  }
`;

export const MainContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 24px;
    height: 100%;
    border-bottom: 8px solid ${theme.colors.gray300};
  `}
`;

export const MainContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<{ marginBottom?: number }>`
  ${({ theme, marginBottom }) => css`
    ${theme.fonts.subTitle_semibold_16};
    margin-bottom: ${marginBottom || 8}px;

    & > strong {
      color: ${theme.colors.gray800};
    }
  `}
`;

export const Desc = styled.span<{ marginBottom?: number }>`
  ${({ theme, marginBottom }) => css`
    ${theme.fonts.subTitle_regular_14};
    margin-bottom: ${marginBottom || 16}px;
    color: ${theme.colors.gray800};

    & > strong {
      ${theme.fonts.subTitle_bold_14};
      color: ${theme.colors.black};
    }
  `}
`;

export const SelectContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 20px;
  `}
`;

export const SelectContentBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const SubTitle = styled.span<{ marginBottom?: number }>`
  ${({ theme, marginBottom }) => css`
    ${theme.fonts.subTitle_regular_14};
    margin-bottom: ${marginBottom || 8}px;

    & > strong {
      color: ${theme.colors.gray900};
    }
  `}
`;

export const selectConditionFormRadioButton = css`
  gap: 12px;

  & > label {
    justify-content: flex-start;
  }
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Division = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    border: 0;
    background-color: ${theme.colors.gray600};
  `}
`;

export const formInput = (theme: Theme) => css`
  ${theme.fonts.subTitle_regular_16};
  min-width: 245px;
  height: min-content;
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray600};
  padding: 13px 12px;

  &::placeholder {
    ${theme.fonts.subTitle_regular_16};
    color: ${theme.colors.gray700};
  }
`;
