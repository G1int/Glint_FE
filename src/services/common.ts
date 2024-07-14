import { useMutation } from "@tanstack/react-query";

import { postImageAPI } from "apis";
import type { PostImageQuery } from "types";

export const usePostImage = () => {
  return useMutation({
    mutationFn: (req: PostImageQuery) => postImageAPI(req),
  });
};
