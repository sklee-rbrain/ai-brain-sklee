import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { NoticeCrateBtn } from "../form/FromBtns";
import TtoggleBtn from "../table/tool/TtoggleBtn";

const BtnContainer = styled(Stack)`
  dispaly: flex;
  flex-direction: row;
  gap: 20px;
`;

const TRightBtn = () => {
  return (
    <BtnContainer>
      {/* 공지사항 등록 버튼 */}
      <NoticeCrateBtn name={"공지사항 등록"} />
      {/* 필터 오픈 토글 버튼 */}
      <TtoggleBtn />
    </BtnContainer>
  );
};

export default TRightBtn;
