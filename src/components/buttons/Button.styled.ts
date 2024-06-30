import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button<{ size?: "sm" | "lg" }>`
  ${({ size }) => css`
    padding: ${
      size === "sm" ? "5px 10px" : size === "lg" ? "15px 30px" : "10px 20px"
    };
    font-size: ${size === "sm" ? "1rem" : size === "lg" ? "2rem" : "1.5rem"};
    border: 0; // NOTE: 디자인 시스템에 따라 변경 예정
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;  //NOTE: 컬러는 디자인 시스템에 따라 변경 예정
    color: #ffffff; //NOTE: 컬러는 디자인 시스템에 따라 변경 예정
    transition: background-color 0.3s ease;
    flex: 1;

    &;hover {
      background-color: #0056b3; //NOTE: 컬러는 디자인 시스템에 따라 변경 예정
    }
  `}
`;
