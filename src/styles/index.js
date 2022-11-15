import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        brandBlack: "#242424",
        brandGray: "#616161",
        brandYellow: "#FFCE2E",
      },
    },
    media: {
      bp1440: "(max-width: 1440px)",
      bp1366: "(max-width: 1366px)",
      bp1200: "(max-width: 1200px)",
      bp1150: "(max-width: 1150px)",
      bp991: "(max-width: 991px)",
      bp800: "(max-width: 800px)",
      bp768: "(max-width: 768px)",
      bp600: "(max-width: 600px)",
      bp560: "(max-width: 560px)",
      bp480: "(max-width: 480px)",
      bp320: "(max-width: 320px)",
    },
  });
