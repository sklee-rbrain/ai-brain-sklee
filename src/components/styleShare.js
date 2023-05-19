import styled from "@emotion/styled";
import { Box } from "@mui/material";
import backImg from "../app/common/images/background.jpg";

// 💥 background img > modal 순서로 적용하시면 됩니다.

/**
 * @title 회원가입 / 로그인 페이지 - background img
 */
export const BackgroundImg = styled(Box)`
  background: url(${backImg}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  filter: brightness(70%);
  position: relative;
`;

/**
 * @title 회원가입 / 로그인 페이지 - 정보 입력 modal
 */
export const JoinModal = styled(Box)`
  background-color: rgba(255, 255, 255, 0.85);
  height: ${(props) => props.height};
  // join -> 620px / login -> 530px
  width: 420px;
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/**
 * @title border 없는 공용 Wrapper style
 */
export const BaseWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
`;

/**
 * @title border 있는 공용 Wrapper style
 */
export const BorerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  border: 1px solid ${(props) => props.theme.color.layoutline};
  box-shadow: 1px 1px 1px ${(props) => props.theme.color.lineShadow};
  border-radius: 7px;
  background-color: rgb(255, 255, 255);
  color: ${(props) => props.theme.color.fontColor};
`;
