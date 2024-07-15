import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Signup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<{ hasDesc?: boolean }>`
  ${({ hasDesc }) => css`
    margin-bottom: ${hasDesc ? "24px" : "32px"};
    font-size: 32px; //TODO: 테마 폰트로 변경 예정

    & > strong {
      font-weight: 700;
    }
  `}
`;

export const Desc = styled.span`
  ${({ theme }) => css`
    margin-bottom: 32px;
    color: ${theme.colors.gray900};
    font-size: 16px;
  `}
`;

export const FormInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const closeIcon = css`
  position: absolute;
  right: 0;
  top: 20px;
`;

export const Unit = styled.span`
  position: absolute;
  left: 43px;
  top: 24px;
  font-size: 16px;
`;

export const Label = styled.span<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    margin-bottom: 6px;
    font-size: 14px;
    color: ${hasError ? theme.colors.danger : theme.colors.black};
  `}
`;

export const BirthWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: 120px 77px 77px;
    column-gap: 23px;

    & > div:not(:last-of-type)::after {
      position: absolute;
      top: 4px;
      right: -20px;
      content: "/";
      padding: 0 8px;
      font-size: 16px;
      color: ${theme.colors.gray600};
    }
  `}
`;

export const Message = styled.span<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    display: flex;
    margin-top: 8px;
    color: ${hasError && theme.colors.danger};
    font-size: 12px;
  `}
`;

export const FormContext = styled.div`
  position: relative;
`;

export const FormYearText = styled.span`
  position: absolute;
  top: 4px;
  left: 44px;
  font-size: 16px;
`;

export const FormMonthDateText = styled.span`
  position: absolute;
  top: 4px;
  left: 24px;
  font-size: 16px;
`;

export const formRadioButton = css`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 76px;
`;

export const ProfileImg = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 152px;
    height: 152px;
    border-radius: 50%;
    background-color: ${theme.colors.gray700};

    & > button {
      position: absolute;
      bottom: -12px;
      right: 1px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 3px solid ${theme.colors.white};
      background-color: ${theme.colors.pink900};

      & > svg {
        margin-top: 4px;

        & > path {
          fill: ${theme.colors.white};
        }
      }
    }
  `}
`;

export const FileUploadInput = styled.input`
  display: none;
`;

export const userIcon = css`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -3px;
  transform: translate(-50%, -50%);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
