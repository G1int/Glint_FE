import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BackLayout, ConfirmModal, Tab } from "components";
import { useModal, useToast } from "hooks";
import { useGetMeeting, useOutMeeting } from "services";
import { Join, Chatting, Home } from "./containers";
import * as S from "./Meeting.styled";

const Meeting = () => {
  const { meetingId } = useParams();
  const navigate = useNavigate();

  const userId = sessionStorage.getItem("id")!;

  const { data, refetch } = useGetMeeting(meetingId!);
  const { mutate: outMeetingMutate } = useOutMeeting();

  const { addToast } = useToast();
  const { handleOpenModal, handleCloseModal } = useModal();

  const isOwner = `${data?.leaderUserId}` === userId;
  const isJoined = !!data?.users.find((user) => `${user.id}` === userId);

  const tabs = [
    {
      label: "홈",
      query: "home",
      component: <Home data={data} refetch={refetch} />,
    },
    {
      label: "채팅",
      query: "chatting",
      component: <Chatting isJoined={isJoined} />,
    },
    { label: "신청목록", query: "join", component: <Join /> },
  ];

  const handleClickShare = () => {
    addToast({ content: "현재 개발중인 기능이에요. 조금만 기다려주세요:)" });
  };

  const handleClickExit = () => {
    const req = {
      meetingId: meetingId!,
      userId: userId,
    };

    outMeetingMutate(req, {
      onSuccess: () => {
        navigate("/main");
        handleCloseModal();
      },
      onError: () => {
        addToast({ content: "미팅 나가기에 실패했습니다. 다시 시도해주세요." });
      },
    });
  };

  const handleOpenModalExit = () => {
    handleOpenModal(
      <ConfirmModal
        content="이 미팅방에서 나가시겠어요?"
        confirmLabel="나가기"
        cancelLabel="취소"
        handleCloseClick={handleCloseModal}
        handleConfirmClick={handleClickExit}
      />
    );
  };

  const handleClickEdit = () => {
    navigate(`/meeting/edit/${meetingId}`);
  };

  return (
    <BackLayout
      isMeeting
      isOwner
      hasTopContent
      handleClickShare={handleClickShare}
      handleClickExit={handleOpenModalExit}
      handleClickEdit={handleClickEdit}
      css={S.backLayout}
    >
      <Tab
        css={S.tab}
        tabList={isOwner ? ["홈", "채팅", "신청목록"] : ["홈", "채팅"]}
        tabs={tabs}
      />
    </BackLayout>
  );
};

export default Meeting;
