import { styled } from "../../../styles";
import BgHero from "../../../assets/s-hero-background.png";

export const StyleSectionHero = styled("section", {
  paddingTop: "18.5rem",
  paddingBottom: "16.2rem",
  background: `url(${BgHero.src}) no-repeat top center`,
  backgroundSize: "cover",
  width: "100%",
  height: "70rem",
});

export const ContentText = styled("div", {
  width: "100%",
  maxWidth: "74rem",
  ".top": {
    display: "flex",
    alignItems: "center",
    marginBottom: "3.4rem",
    ".icon": {
      width: "100%",
      maxWidth: "5.4rem",
      height: "2.6rem",
      backgroundColor: "#006D8F",
      borderRadius: "12rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.3rem",
      lineHeight: "1.6rem",
      fontWeight: "500",
      color: "#FFFFFF",
      marginRight: "1.2rem",
    },
    span: {
      fontSize: "1.5rem",
      lineHeight: "150%",
      fontWeight: "500",
      fontFamily: "Inter, sans-serif",
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  h1: {
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "130%",
    color: "#FFFFFF",
    marginBottom: "2.4rem",
  },
  p: {
    maxWidth: "36.5rem",
    fontSize: "1.8rem",
    lineHeight: "150%",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "4rem",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    fontWeight: 500,
    padding: "0rem 4rem",
    lineHeight: "4.8rem",
    fontSize: "1.5rem",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    borderRadius: 100,
    border: "1px solid #FFFFFF",
    color: "#FFFFFF",

    transition: "filter 0.3s ease",
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
});
