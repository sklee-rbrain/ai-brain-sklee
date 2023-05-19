import { GlobalStyles, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

// light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  color: {
    backColor: "rgb(255.255.255)",
    layoutline: "rgb(224, 224, 224)",
    lineShadow: "rgb(163, 163, 163)",
    formColor: "rgb(12, 16, 54)",
    maincolor: "rgb(35, 38, 84)",
    fontColor: "rgb(33, 33, 33)",
    linkColor: grey[600],
    grayBackgr: grey[100],
  },
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
  },
});

// dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
  },
});

// global style
export const style = {
  body: {
    margin: "0",
    padding: "0",
    border: "0",
    boxSizing: "inherit", // 추가된 내용
    backgroundColor: "rgb(247, 247, 247)",
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={style} />;
}
