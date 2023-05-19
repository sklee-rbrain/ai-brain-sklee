import { Stack, Typography } from "@mui/material";
import LogoImg from "../app/common/images/logo.png";
import { grey, purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";

/**
 *  @title AIBBRAIN icon
 */
export function RBlogo() {
  return (
    <img
      src={LogoImg}
      alt={"AIBRAIN LOGO"}
      width={50}
      style={{ margin: "8px" }}
    />
  );
}

/**
 * @title AIBRAIN text
 */
export function RBtext() {
  return (
    <>
      <Stack direction="row">
        <Typography
          letterSpacing={3}
          fontSize={32}
          fontWeight={800}
          color={purple[400]}
          variant="subtitle2"
        >
          AI
        </Typography>
        <Typography
          letterSpacing={3}
          fontSize={32}
          fontWeight={800}
          variant="subtitle2"
          color={grey[700]}
        >
          BRAIN
        </Typography>
      </Stack>
    </>
  );
}

/**
 * @title AIBRAIN 로고 + 텍스트 합쳐진 컴포넌트
 */
export function RBlogoText({ ...others }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 52,
      }}
      {...others}
    >
      <RBlogo />
      <RBtext />
    </Stack>
  );
}

/**
 * @title 레인보우브레인 공식사이트로 이동
 */
export function RBLink() {
  return (
    <Typography align="center" fontSize={"14px"}>
      <Links to="http://rbrain.co.kr/">(주) 레인보우브레인</Links>
    </Typography>
  );
}

const Links = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.linkColor};
`;

/**
 * @title yyyy-mm-dd 오늘 날짜 구하기
 */
export function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}

/**
 * @title 유저 프로필 이미지(아이콘)
 * @memo 사용하실 때 width, height 설정해주셔야 합니다
 */
export const ProfileImg = ({ ...ohters }) => {
  return (
    <PersonIcon
      sx={{
        boxShadow: "2px 2px 2px rgb(163, 163, 163)",
        borderRadius: "50%",
        padding: "10px",
        backgroundColor: "white",
        color: "rgb(41, 41, 41)",
      }}
      fontSize="large"
      {...ohters}
    />
  );
};
