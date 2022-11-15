import { styled } from "../../styles";
import { ContainerGrid } from "../../styles/global";

export const StyleHeader = styled("header", {
  position: "absolute",
  top: 0,
  width: "100%",
  height: 112,
  display: "flex",
  alignItems: "center",
  zIndex: 2022,
  [`${ContainerGrid}`]: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    ul: {
      display: "flex",
      alignItems: "center",
      li: {
        display: "flex",
        alignItems: "center",
        "&:not(:first-child)": {
          marginLeft: "6.6rem",
        },
        a: {
          display: "flex",
          alignItems: "center",
          span: {
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "1.6rem",
            lineHeight: "1.9rem",
            color: "rgba(255,255, 255, 0.7)",
            transition: "color 0.3s ease",
            "&:hover": {
              color: "#FFFFFF",
            },
          },
          img: {
            marginLeft: "1.2rem",
          },
        },
      },
    },
    button: {
      marginLeft: "36.1rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "$brandYellow",
      fontWeight: 500,
      padding: "0rem 5rem",
      lineHeight: "4rem",
      fontSize: "1.5rem",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      borderRadius: 100,
      color: "$brandBlack",
      transition: "filter 0.3s ease",
      "&:hover": {
        filter: "brightness(0.8)",
      },
    },
  },
});
