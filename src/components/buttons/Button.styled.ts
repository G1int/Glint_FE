import styled from "@emotion/styled";

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ButtonContent = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #ffffff;
  transition: background-color 0.3s ease;

  &;hover {
    background-color: #0056b3;
  }
  
  &.sm {
    padding: 5px 10px;
    font-size: 12px;
  }

  &.lg {
    padding: 15px 30px;
    font-size: 20px;
  }
`;
