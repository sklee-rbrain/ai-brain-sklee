import * as React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import * as Yup from "yup";
import DefaultForm from "../../components/form/DefaultForm";
import { RBLink } from "../../components/share";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserBtn } from "../../components/form/FromBtns";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../app/store/authSlice";
import { tennantList } from "../../variable";
import FormTenant from "../../components/form/FormTenant";
import { useNavigate } from "react-router-dom";
import * as S from "../../components/styleShare";
import { Button, Stack } from "@mui/material";
import { RBlogoText } from "../../components/share";
import { LoginOutlined } from "@mui/icons-material";
import { loginAPI } from "../../api/auth";

const LoginWrapper = styled(Box)`
  min-width: 100%;
  min-height: 100vh;
`;

/**
 * @title 로그인 타입 정의
 */
const loginType = Yup.object().shape({
  username: Yup.string().nullable().required("필수 정보입니다."),
  password: Yup.string().nullable().required("필수 정보입니다."),
  company: Yup.string().nullable().required("필수 정보입니다."),
});

/**
 * @title 로그인 페이지
 */
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(loginType),
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    // authSlice 스토어, 세션스토리지에 저장
    dispatch(
      setUser({
        username: data.username,
        password: data.password,
        company: data.company,
      })
    );

    const requestData = {
      username: data.username,
      password: data.password,
    };

    // login api
    try {
      const res = await loginAPI(requestData);
      const resJson = JSON.parse(res.request.response);
      const token = resJson.token;
      dispatch(
        setToken({
          token: token,
        })
      );
      navigate(`/`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginWrapper>
      <S.BackgroundImg />
      <S.JoinModal height={"530px"}>
        <DefaultForm methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack
            sx={{ width: "75%", alignItems: "center", margin: "0px auto" }}
            spacing={2.5}
          >
            <RBlogoText style={{ margin: "40px" }} />
            <FormInput name="username" label="아이디" />
            <FormInput name="password" label="비밀번호" type="password" />
            <FormTenant name="company" label="회사선택" options={tennantList} />
            <UserBtn startIcon={<LoginOutlined />} name={"로그인"} />
            <Button
              type="button"
              sx={{
                color: "#0054ad",
                fontSize: "14px",
                alignSelf: "flex-end",
                marginTop: "5px",
              }}
              onClick={() => navigate(`/users/create`)}
            >
              회원가입 &rarr;
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
    </LoginWrapper>
  );
}

export default Login;
