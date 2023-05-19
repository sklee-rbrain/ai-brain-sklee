import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import React from "react";
import MainDashboard from "./dashboard/MainDashboard";

const HomeWrapper = styled(Stack)``;

function Home() {
  return (
    <HomeWrapper>
      <MainDashboard />
    </HomeWrapper>
  );
}

export default Home;
