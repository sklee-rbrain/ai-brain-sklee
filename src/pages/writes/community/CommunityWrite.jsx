import { useForm } from "react-hook-form";
import DefaultForm from "../../../components/form/DefaultForm";
import { BorerWrapper } from "../../../components/styleShare";
import { Box, Divider, Stack, Typography } from "@mui/material";
import FormInput from "../../../components/form/FormInput";
import styled from "@emotion/styled";
import FormEditor from "../../../components/form/FormEditor";
import { NaviBtn, SubmitBtn } from "../../../components/form/FromBtns";
import FileDropzone from "../../../components/form/dropzone/FileDropzone";
import { FormRadio } from "../../../components/form/FormRadio";
import FormCheck from "../../../components/form/FormCheck";
import { CategoryList } from "../../../variable";
import FormSelect from "../../../components/form/FormSelect";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { noticeUploadAPI } from "../../../api/community";
import { useNavigate } from "react-router-dom";

const Typographys = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Stacks = styled(Stack)`
  display: flex;
  flex-direction: row;
  height: 60px;
`;

const Boxs = styled(Box)`
  width: 150px;
  margin-right: 20px;
  background-color: ${(props) => props.theme.color.grayBackgr};
`;

const SelectBox = styled(Box)`
  margin-right: 20px;
  width: 200px;
  display: flex;
  align-items: center;
`;

const TitleTypo = styled(Typography)`
  width: 150px;
  padding-left: 15px;
  line-height: 60px;
  font-size: 14px;
`;

const DropBtnStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  width: 100%
  height: 100%
  margin-top: 50px;
  align-items: flex-end;
  margin-top: 60px;
  justify-content: space-between;
`;

const WriteTypes = Yup.object().shape({
  title: Yup.string().nullable().required("제목을 입력하세요."),
  content: Yup.string().nullable().required("내용을 입력하세요."),
});

function CommunityWrite() {
  // const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(WriteTypes),
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log(data);

    const requestData = {
      title: data.title,
      content: data.content,
      topYn: data.topYn,
      visibleYn: data.visibleYn,
      attachFileList: [],
      categoryId: data.categoryId.value,
    };

    try {
      const res = await noticeUploadAPI(requestData);
      console.log("게시글 등록 성공!", res);
      navigate(`/community/notice`);
    } catch (err) {
      console.log("게시글 등록 실패!", err);
    }
  };
  return (
    <BorerWrapper sx={{ padding: "20px" }}>
      <DefaultForm methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Typographys>게시글 등록</Typographys>
        <Divider />
        <Divider />
        {/* 카테고리 선택 */}
        <Stacks>
          <Boxs>
            <TitleTypo>카테고리 선택</TitleTypo>
          </Boxs>
          <SelectBox>
            <FormSelect
              sx={{ width: "200px" }}
              name="categoryId"
              options={CategoryList}
            />
          </SelectBox>
        </Stacks>
        <Divider />
        {/* 공개여부, 상단고정 여부 */}
        <Stacks>
          <Boxs>
            <TitleTypo>공개여부</TitleTypo>
          </Boxs>
          <SelectBox>
            <FormRadio
              name="visibleYn"
              options={[
                { label: "공개", value: true },
                { label: "비공개", value: false },
              ]}
            />
          </SelectBox>
          <Boxs>
            <TitleTypo>상단고정 여부</TitleTypo>
          </Boxs>
          <SelectBox>
            <FormCheck name="topYn" label="고정" />
          </SelectBox>
        </Stacks>
        <Divider />
        {/* 제목입력 */}
        <Stacks>
          <Boxs>
            <TitleTypo>제목</TitleTypo>
          </Boxs>
          <FormInput
            sx={{ width: "600px", fontSize: "12px" }}
            name="title"
            placeholder="게시글 제목 등록"
          />
        </Stacks>
        <Divider />

        {/* 글 입력(에디터)영역 */}
        <FormEditor name="content" />

        <DropBtnStack>
          {/* 이미지 드롭존 */}
          <Box>
            <FileDropzone name="attachFileList" />
          </Box>
          <Box sx={{ float: "right" }}>
            <NaviBtn sx={{ width: "100px", mr: 2 }} name={"취소"} />
            <SubmitBtn sx={{ width: "100px" }} name={"저장"} />
          </Box>
        </DropBtnStack>
      </DefaultForm>
    </BorerWrapper>
  );
}

export default CommunityWrite;
