import styled from "@emotion/styled";
import MuiAccordion from "@mui/material/Accordion";

/**
 * @title 메뉴 Wrapper
 */
const Accordions = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
}));

export default Accordions;
