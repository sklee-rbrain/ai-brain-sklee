import { Button } from "@mui/material";
import { Add, FilterList, FilterListOff } from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";

/**
 * @memo 💥로그인 / 회원가입 btn 컴포넌트에만 적용된 스타일입니다!
 */
const Buttons = styled(Button)`
  background-color: #0063cc;
  margin-top: 25px;
  font-size: 16px;
  padding: 10px 0px;
  &:hover {
    background-color: #0069d9;
  }
`;

/**
 * @title Form 제출 / 검색 버튼
 */
export const SubmitBtn = ({ name, ...others }) => {
  return (
    <>
      <Button {...others} type="submit" variant="contained">
        {name}
      </Button>
    </>
  );
};

/**
 * @title 유저 로그인/회원가입 버튼
 */
export const UserBtn = ({ name, ...others }) => {
  return (
    <>
      <Buttons
        {...others}
        type="submit"
        variant="contained"
        sx={{ width: "100%" }}
      >
        {name}
      </Buttons>
    </>
  );
};

/**
 * @title 취소/뒤로가기 버튼
 */
export const NaviBtn = ({ name, ...others }) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: "rgb(94, 94, 94)",
        }}
        {...others}
        type="button"
        variant="contained"
      >
        {name}
      </Button>
    </>
  );
};

/**
 * @title "공지사항 등록" 버튼
 */
export const NoticeCrateBtn = ({ name, ...others }) => {
  return (
    <>
      <Button
        {...others}
        href="notice/write"
        variant="contained"
        size="small"
        startIcon={<Add />}
      >
        {name}
      </Button>
    </>
  );
};

/**
 * @title 테이블 필터 숨기기 토글 버튼
 */
export const FilterToggle = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Buttons
        size="small"
        sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
        startIcon={isOpen ? <FilterList /> : <FilterListOff />}
        onClick={handleClick}
      />
    </>
  );
};
