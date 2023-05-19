import { FilterList, FilterListOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCollapse } from "../../../app/store/etcSlice";

/**
 * @title 테이블 필터 숨기기 토글 버튼
 */
const TtoggleBtn = () => {
  const dispatch = useDispatch();

  // 필터 토글
  // true : 열린상태 / false : 접힌상태
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
    dispatch(
      filterCollapse({
        Activate: !isOpen,
      })
    );
  }, [dispatch, isOpen]);

  return (
    <>
      <Button
        size="small"
        sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
        startIcon={isOpen ? <FilterList /> : <FilterListOff />}
        onClick={handleClick}
      />
    </>
  );
};

export default TtoggleBtn;
