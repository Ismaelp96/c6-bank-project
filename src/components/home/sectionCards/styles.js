import { styled } from "@stitches/react";
import { ContainerGrid } from "../../../styles/global";

export const StyleSectionCards = styled("section", {
  position: "relative",
  paddingTop: "9.6rem",
  paddingBottom: "8.1rem",
  backgroundColor: "#FFFFFF",
  [`${ContainerGrid}`]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export const ContentList = styled("div", {
  ".top": {
    marginBottom: "10rem",
    h2: {
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: "130%",
      letterSpacing: "-0.03em",
      color: "$brandBlack",
      marginBottom: "0.8rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "2.8rem",
      lineHeight: "130%",
      color: "$brandGray",
      marginBottom: "0.8rem",
    },
  },
  ".contentBank": {
    width: "100%",
    maxWidth: "60.7rem",
  },
});

export const StyleCardRight = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: "46.6rem",
  height: "85.9rem",
  img: {
    position: "absolute",
    right: 0,
    top: -165,
    zIndex: 5,
    width: "100%",
    height: "100%",
  },
});
