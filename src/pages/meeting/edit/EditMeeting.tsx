import React from "react";
import { useParams } from "react-router-dom";

import { CreateRoom } from "pages/createRoom";
import { useGetMeeting } from "services";

const EditMeeting = () => {
  const { meetingId } = useParams();

  const { data } = useGetMeeting(meetingId!);

  return <CreateRoom data={data} />;
};

export default EditMeeting;
