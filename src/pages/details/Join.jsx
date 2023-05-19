import styled from "@emotion/styled";
import { Box, Button, Stack } from "@mui/material";
import DefaultForm from "../../components/form/DefaultForm";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import { UserBtn } from "../../components/form/FromBtns";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as S from "../../components/styleShare";
import { RBLink, RBlogoText } from "../../components/share";
import AddIcon from "@mui/icons-material/Add";
import { joinAPI } from "../../api/auth";

const JoinWrapper = styled(Box)`
  min-width: 100%;
  min-height: 100vh;
`;

/**
 * @title 회원가입 타입 정의
 */
const joinType = Yup.object().shape({
  username: Yup.string().nullable().required("필수 정보입니다."),
  name: Yup.string().nullable().required("필수 정보입니다."),
  password: Yup.string().nullable().required("필수 정보입니다."),
  password_check: Yup.string().nullable().required("필수 정보입니다."),
});

/**
 * @title 회원가입 컴포넌트
 */
const Join = () => {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(joinType),
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    const requestData = {
      username: data.username,
      password: data.password,
      name: data.name,
      role: "Admin",
    };
    try {
      const res = await joinAPI(requestData);
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <JoinWrapper>
      <S.BackgroundImg />
      <S.JoinModal height={"620px"}>
        <DefaultForm methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack
            sx={{ width: "75%", alignItems: "center", margin: "0px auto" }}
            spacing={2.5}
          >
            <RBlogoText style={{ margin: "40px" }} />
            <FormInput name="username" label="아이디" />
            <FormInput name="name" label="이름" />
            <FormInput name="password" label="비밀번호" type="password" />
            <FormInput
              name="password_check"
              label="비밀번호 확인"
              type="password"
            />
            <UserBtn startIcon={<AddIcon />} name={"가입하기"} />
            <Button
              type="button"
              sx={{
                color: "#0054ad",
                fontSize: "14px",
                alignSelf: "flex-end",
                marginTop: "5px",
              }}
              onClick={() => navigate(`/`)}
            >
              로그인 &rarr;
            </Button>
          </Stack>
          <Stack
            style={{
              position: "absolute",
              bottom: 30,
              left: 0,
              right: 0,
            }}
          >
            <RBLink />
          </Stack>
        </DefaultForm>
      </S.JoinModal>
    </JoinWrapper>
  );
};

export default Join;
