import { css } from "@emotion/react";

export const fonts = {
  headline_bold_40: css`
    font-size: 4rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  subCopy_bold_32: css`
    font-size: 3.2rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  subCopy_light_32: css`
    font-size: 3.2rem;
    font-weight: 300;
    font-family: "SUIT", sans-serif;
  `,
  subCopy_bold_28: css`
    font-size: 2.8rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  subCopy_light_28: css`
    font-size: 2.8rem;
    font-weight: 300;
    font-family: "SUIT", sans-serif;
  `,
  subCopy_bold_24: css`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  headline_semibold_18: css`
    font-size: 1.8rem;
    font-weight: 600;
    font-family: "SUIT", sans-serif;
  `,
  subTitle_bold_16: css`
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  subTitle_semibold_16: css`
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "SUIT", sans-serif;
  `,
  subTitle_regular_16: css`
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "SUIT", sans-serif;
  `,
  subTitle_bold_14: css`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  subTitle_semibold_14: css`
    font-size: 1.4rem;
    font-weight: 600;
    font-family: "SUIT", sans-serif;
  `,
  subTitle_regular_14: css`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "SUIT", sans-serif;
  `,
  caption_bold_12: css`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  caption_semibold_12: css`
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "SUIT", sans-serif;
  `,
  caption_regular_12: css`
    font-size: 1.2rem;
    font-weight: 400;
    font-family: "SUIT", sans-serif;
  `,
  caption_bold_10: css`
    font-size: 1rem;
    font-weight: 700;
    font-family: "SUIT", sans-serif;
  `,
  caption_semibold_10: css`
    font-size: 1rem;
    font-weight: 600;
    font-family: "SUIT", sans-serif;
  `,
  caption_regular_10: css`
    font-size: 1rem;
    font-weight: 400;
    font-family: "SUIT", sans-serif;
  `,
} as const;

export type Fonts = typeof fonts;
