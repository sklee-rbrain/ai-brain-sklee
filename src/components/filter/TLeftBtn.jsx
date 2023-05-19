import styled from "@emotion/styled";
import { Numbers } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
import TableCount from "./TableCount";

const BtnContainer = styled(Stack)`
  dispaly: flex;
  flex-direction: row;
  gap: 20px;
`;

const TLeftBtn = ({ name, ...others }) => {
  // 임시 데이터
  const total = 1;

  return (
    <BtnContainer>
      {/* #총 n건(테이블 총 개수) */}
      <Chip
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
        size="small"
        variant="outlined"
        icon={<Numbers color="info" />}
        label={`총 ${total}건`}
        {...others}
      />
      {/* 테이블 출력 개수 설정 (10건, 20건, 30건) */}
      <TableCount name="ItemCnt" />
    </BtnContainer>
  );
};

export default TLeftBtn;
