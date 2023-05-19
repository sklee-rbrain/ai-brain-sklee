import React, { useState } from "react";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import DefaultForm from "../../../components/form/DefaultForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import BasicTable from "../../../components/table/DefaultTable";
import TPagination from "../../../components/table/tool/TPagination";
import TFilters from "../../../components/table/tool/TFilters";
import { useSelector } from "react-redux";
import { BaseWrapper } from "../../../components/styleShare";

const FilterBox = styled(Stack)`
  &.openMenu {
  }
  &.hideMenu {
    max-height: 0;
    overflow: hidden;
    transition: max-height;
  }
`;

/**
 * @title 검색 필터 타입 정의 ---- 수정 예정
 */
const NoticeType = Yup.object().shape({});

/**
 * @title 커뮤니티 > 공지사항 컴포넌트
 */
function NoticeList() {
  // BasicTable 여기로 보낼 정보
  const [data, setData] = useState();

  // true : 열린상태 / false : 접힌상태
  const filterActiv = useSelector((state) => state.etcSlice.value);

  const methods = useForm({
    resolver: yupResolver(NoticeType),
  });
  const { handleSubmit, getValues } = methods;

  const onSubmit = (data) => {
    // 필터링...
  };

  return (
    <BaseWrapper>
      <DefaultForm methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {/* 검색 필터 */}
        <FilterBox className={filterActiv ? "openMenu" : "hideMenu"}>
          <TFilters />
        </FilterBox>

        {/* 테이블 */}
        <BasicTable />

        {/* 페이지네이션 */}
        <TPagination />
      </DefaultForm>
    </BaseWrapper>
  );
}

export default NoticeList;
