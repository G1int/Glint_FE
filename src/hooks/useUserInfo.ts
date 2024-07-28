import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getUserInfoAPI } from "apis";
import { userDetailState, userIdSelector, userProfileState } from "atoms";

const useUserInfo = () => {
  const userId = useRecoilValue(userIdSelector);
  const [userDetail, setUserDetail] = useRecoilState(userDetailState);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);

  const fetchUserInfo = async () => {
    if (userId) {
      try {
        const data = await getUserInfoAPI(userId);
        setUserDetail(data.userDetail);
        setUserProfile(data.userProfile);
      } catch (error) {
        console.error("유저 Info API 실패:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [userId]);

  return { userDetail, userProfile, fetchUserInfo };
};

export default useUserInfo;
