import { styled } from "../../../styles";
import { ContainerGrid } from "../../../styles/global";

export const StyleSectionBank = styled("section", {
  paddingTop: "10.9rem",
  paddingBottom: "13.4rem",
  backgroundColor: "#FAFAFA",
  [`${ContainerGrid}`]: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  },
});

export const StyleTopContent = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "8.7rem",
  ".left": {
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
  ".right": {
    width: "100%",
    maxWidth: "59.2rem",
    height: "7.2rem",
    border: "1px solid rgba(196, 196, 196, 0.6)",
    borderRadius: "12rem",
    display: "flex",
    alignItems: "center",
    padding: "0 1.1rem",
  },
});

export const StyleBottomContent = styled("div", {
  position: "relative",
  width: "100%",
  height: "42.4rem",
  background: "linear-gradient(98.6deg, #020302 7.47%, #242424 96.12%)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "10.3rem",
  paddingRight: "7.2rem",
  ".text": {
    width: "100%",
    maxWidth: "34.1rem",
    h2: {
      fontWeight: 600,
      fontSize: "2.4rem",
      lineHeight: "130%",
      letterSpacing: "-0.03em",
      color: "#FFFFFF",
      marginBottom: "1.6rem",
      maxWidth: "21rem",
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "150%",
      color: "rgba(255, 255, 255, 0.7)",
      marginBottom: "4.4rem",
    },
    ".pay": {
      display: "flex",
      alignItems: "center",
      ".icon": {
        width: "3.2rem",
        height: "3.2rem",
        backgroundColor: "#FFFFFF",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "1.6rem",
      },
      span: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "1.4rem",
        lineHeight: "150%",
        color: "#FAFAFA",
      },
    },
  },
  ".images": {
    width: "100%",
    maxWidth: "62.2rem",
    display: "flex",
    overflow: "hidden",
    ".phone": {
      position: "absolute",
      bottom: 0,
    },
    ".card": {
      position: "absolute",
      bottom: 106,
      right: 277,
    },
    ".c6B": {
      position: "absolute",
      bottom: 53,
      right: 72,
    },
  },
});
