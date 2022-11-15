import { styled } from "../../../../styles";

export const StyleListBank = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "6.8rem 11rem",
  li: {
    position: "relative",
    "&:after": {
      content: "",
      position: "absolute",
      top: 35,
      left: 0,
      width: 15,
      height: 2,
      backgroundColor: "$brandYellow",
    },
    ".icon": {
      marginBottom: "2.9rem",
    },
    span: {
      display: "block",
      width: "20rem",
      fontWeight: 500,
      fontSize: "1.8rem",
      lineHeight: "150%",
      color: "$brandBlack",
      marginBottom: "0.8rem",
    },
    p: {
      display: "block",
      width: "25.9rem",
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "150%",
      color: "$brandGray",
    },
  },
});
