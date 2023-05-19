import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Accordions from "./tool/Accordions";
import AcoSummarys from "./tool/AcoSummarys";
import AcoDetails from "./tool/AcoDetails";
import { MenuInfo } from "../../variable";
import { useNavigate } from "react-router-dom";

const MenuWrapper = styled(Box)`
  focus: cusor;
  padding-top: 10px;
`;

export function MenuLayout() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (index) => (isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  const handleC = (path) => {
    console.log(path);
    // 임시임시임시
    navigate(`/${path}`);
  };

  return (
    <MenuWrapper>
      {/* 상위메뉴 */}
      {MenuInfo.map((menu, index) => (
        <Accordions
          key={menu.id}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AcoSummarys
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{menu.summary}</Typography>
          </AcoSummarys>
          {/* 하위메뉴 */}
          {menu.detail.map((detail, idx) => (
            // aria-labelledby 를 사용해 AcoSummarys 컴포넌트의 id 를 참조하여 하위메뉴 출력
            <AcoDetails
              key={idx}
              aria-labelledby={`panel${index}-header`}
              id={`panel${index}-content`}
            >
              <Typography onClick={() => handleC(menu.path)}>
                {detail}
              </Typography>
            </AcoDetails>
          ))}
        </Accordions>
      ))}
    </MenuWrapper>
  );
}
