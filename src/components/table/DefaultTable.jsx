import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getToday } from "../share";
import { v4 } from "uuid";
import TableBtns from "../filter/TableBtns";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";

const TableWrapper = styled(Stack)``;

const tableCellStyles = {
  padding: "7px 20px",
};

// 임시 컨텐츠
const rows = [
  {
    id: 1,
    title: "RPA 포탈 커뮤니티 - 게시판 서비스 재개 안내!",
    createdAt: getToday(),
    updatedAt: getToday(),
    views: 4,
  },
];

const column = [
  { label: "번호", value: "id" },
  { label: "제목", value: "title" },
  { label: "등록일시", value: "createdAt" },
  { label: "수정일시", value: "updatedAt" },
  { label: "조회수", value: "views" },
];

function BasicTable() {
  return (
    <TableWrapper>
      {/* 테이블 버튼들 - 필터, 공지사항등록 등등.. */}
      <TableBtns />
      {/* 테이블 */}
      <TableContainer component={Paper} className="table_Container">
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {column.map((column) => (
                <TableCell key={v4()} align="center" style={{ padding: 7 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* style props ==> align="center" / sx={{ padding: " 7px 20px"}} */}
          <TableBody style={{ cursor: "pointer" }}>
            {rows.length > 0 ? (
              rows.map((rows) => (
                <TableRow hover key={rows.id}>
                  <TableCell
                    sx={tableCellStyles}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {rows.id}
                  </TableCell>
                  <TableCell sx={tableCellStyles} align="left">
                    {rows.title}
                  </TableCell>
                  <TableCell sx={tableCellStyles} align="center">
                    {rows.createdAt}
                  </TableCell>
                  <TableCell sx={tableCellStyles} align="center">
                    {rows.updatedAt}
                  </TableCell>
                  <TableCell sx={tableCellStyles} align="center">
                    {rows.views}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow key={rows.id}>
                <TableCell component="th" scope="row">
                  {rows.id}
                </TableCell>
                <TableCell align="center">게시글이 없습니다.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
}

export default BasicTable;
