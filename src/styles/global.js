import { styled, globalCss } from "./index";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    border: "none",
    fontFamily: "Montserrat, sans-serif",
    outline: "none",
  },
  html: {
    fontSize: "62.5%",
    "@bp320": {
      fontSize: "55%",
    },
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$brandBlack",
  },
  img: {
    maxWidth: "100%",
    display: "block",
  },
  button: {
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  },
  a: {
    textDecoration: "none",
  },
  li: {
    listStyle: "none",
  },
  p: {
    fontFamily: "Inter, sans-serif",
  },
});

export const ContainerGrid = styled("div", {
  width: "100%",
  maxWidth: 1246,
  margin: "0 auto",
  padding: "0 15px",
});
