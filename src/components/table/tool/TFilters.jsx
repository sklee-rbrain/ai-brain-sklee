import styled from "@emotion/styled";
import { Box } from "@mui/material";
import FormSelect from "../../form/FormSelect";
import { CategoryList, DateList, TypeList } from "../../../variable";
import FormDate from "../../form/FormDate";
import FormInput from "../../form/FormInput";
import { SubmitBtn } from "../../form/FromBtns";
import { Search } from "@mui/icons-material";

const FormWrapper = styled(Box)`
  border: 1px solid ${(props) => props.theme.color.layoutline};
  box-shadow: 1px 1px 1px ${(props) => props.theme.color.lineShadow};
  border-radius: 7px;
  background-color: rgb(255, 255, 255);
`;

function TFilters() {
  return (
    <>
      <FormWrapper>
        <Box
          sx={{
            maxWidth: 650,
            padding: 1.5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 등록일시, 시작일자, 종료일자 필터 */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flex: 1, mr: 2, my: 1 }}>
              <FormSelect
                name="DateFilter"
                label="날짜 검색"
                options={DateList}
              />
            </Box>
            <Box sx={{ flex: 1, mr: 2 }}>
              <FormDate type="date" label="시작일자" name="startDate" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <FormDate type="date" label="종료일자" name="endDate" />
            </Box>
          </Box>
          {/* 카테고리 검색 필터 */}
          <Box>
            <Box>
              <FormSelect
                name="CategoryFilter"
                label={"카테고리"}
                options={CategoryList}
              />
            </Box>
          </Box>
          {/* 검색타입, 검색키워드 필터 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ flexGrow: 1, mr: 2 }}>
              <FormSelect
                name="TypeFilter"
                label="검색타입"
                options={TypeList}
              />
            </Box>
            <Box sx={{ flexGrow: 1, mr: 2 }}>
              <FormInput name="searchKeyword" label="검색 키워드" />
            </Box>
            {/* 검색 버튼 */}
            <SubmitBtn sx={{ mr: 2 }} name={"검색"} startIcon={<Search />} />
          </Box>
        </Box>
      </FormWrapper>
    </>
  );
}

export default TFilters;
