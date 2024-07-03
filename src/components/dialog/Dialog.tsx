import React from "react";

const Dialog = React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLDivElement | null>) => {
    //TODO: dialog 사용 시 해당 컨테이너에서 설정 예정 -> 추후 Dialog 컴포넌트 삭제 예정
    return <div ref={ref}>Dialog</div>;
  }
);

export default Dialog;
