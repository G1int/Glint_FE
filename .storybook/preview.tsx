import React from "react";
import type { Preview } from "@storybook/react";
import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle, theme } from "../src/styles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
