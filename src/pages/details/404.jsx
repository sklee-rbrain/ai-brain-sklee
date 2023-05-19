import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

const Wrapper = styled(Box)`
  text-align: center;
  margin-top: 40px;
`;

function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <Wrapper id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Wrapper>
  );
}

export default NotFound;
