import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { RBlogo } from "../share";
import { grey, purple } from "@mui/material/colors";
import { MenuLayout } from "../menu/MenuLayout";
import Header from "./Header";

const LayoutWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const MainContentWrapper = styled(Stack)`
  flex-grow: 1;
  overflow: auto;
  max-width: 1700px;
`;

/**
 * @title 기본 Layout
 */
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {/* 사이드바 - 로고영역 */}
      <Box
        sx={{
          backgroundColor: "rgb(15, 35, 64)",
          display: "flex",
          flexGrow: 1,
          minWidth: 220,
          maxWidth: 220,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 62,
            // borderBottom: "1px solid #e0e0e0",
          }}
        >
          <RBlogo />
          <Stack direction="row">
            <Typography
              letterSpacing={3}
              fontSize={25}
              fontWeight={700}
              color={purple[100]}
              variant="subtitle2"
            >
              AI
            </Typography>
            <Typography
              letterSpacing={3}
              fontSize={25}
              fontWeight={700}
              variant="subtitle2"
              color={grey[100]}
            >
              BRAIN
            </Typography>
          </Stack>
        </Box>
        {/* 사이드바 - 메뉴리스트 */}
        <Box>
          <MenuLayout />
        </Box>
      </Box>
      {/* 메인 영역 */}
      <MainContentWrapper>
        {/* 헤더 */}
        <Box>
          <Header />
        </Box>
        <Box>{children}</Box>
      </MainContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
