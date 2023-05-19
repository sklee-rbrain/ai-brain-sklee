import styled from "@emotion/styled";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

/**
 * @title 메뉴 - 하위메뉴 전용 styled 컴포넌트
 * @memo 💥 Accordions 안에서 사용되어야 합니다.
 */
const AcoDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  color: "rgba(242, 242, 242)",
  backgroundColor: "rgb(9, 22, 41)",
  paddingLeft: "40px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
  },
}));

export default AcoDetails;
