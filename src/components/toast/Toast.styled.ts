import styled from "@emotion/styled";

export const Toast = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0px;
  height: max-content;
  min-height: 52px;
  pointer-events: none;
  transform: translateX(-50%);
  z-index: 100;

  & > div:not(:first-of-type) {
    margin-top: 50px;
  }
`;
