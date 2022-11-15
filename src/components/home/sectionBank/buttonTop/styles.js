import { styled } from "../../../../styles";

export const StyleContentButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const StylebuttonTop = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "26.9rem",
  color: "$brandGray",
  fontSize: "1.6rem",
  foontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  transition: "filter 0.1s ease",
  "&:hover": {
    filter: "brightness(0.8)",
  },
  "&.active": {
    lineHeight: "5.6rem",
    borderRadius: "12rem",
    backgroundColor: "$brandBlack",
    color: "#FFFFFF",
  },
});
