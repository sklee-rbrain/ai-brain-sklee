import styled from "@emotion/styled";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

/**
 * @title 메뉴 - 메인메뉴(대시보드,과제관리..) 전용 styled 컴포넌트
 * @memo 💥 Accordions 안에서 사용되어야 합니다.
 */
const AcoSummarys = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          float: "right",
          paddingLeft: "5px",
          fontSize: "0.8rem",
          color: "rgba(242, 242, 242)",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  color: "rgba(242, 242, 242)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "rgba(242, 242, 242)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
}));

export default AcoSummarys;
