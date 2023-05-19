import { Stack } from "@mui/material";
import TLeftBtn from "./TLeftBtn";
import styled from "@emotion/styled";
import TRightBtn from "./TRightBtn";

const BtnsWrapper = styled(Stack)`
  margin: 10px 0;
  dispaly: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/**
 * @title 커뮤니티 - 게시글 테이블 상단 버튼들
 * @memo TLeftBtn - 총n건, 출력 건수 필터 / TRightBtn - 공지사항 등록
 */
const TableBtns = () => {
  return (
    <BtnsWrapper>
      {/* #총 n건(게시글 총 개수) / 테이블 출력 개수 설정 (10건, 20건, 30건) */}
      <TLeftBtn />
      {/* 공지사항 등록 /  */}
      <TRightBtn />
    </BtnsWrapper>
  );
};

export default TableBtns;
