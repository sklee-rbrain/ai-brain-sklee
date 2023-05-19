import { api } from "../app/hooks/useAxios";

/**
 * @title  로그인 API
 */
export const loginAPI = (data) => {
  return api({
    method: "post",
    url: "/users/login",
    data,
  });
};

/**
 * @title 유저 프로필 확인 API
 */
export const usercheckAPI = () => {
  return api({
    method: "get",
    url: "/users/me",
  });
};

/**
 * @title 회원 리스트 조회 API
 */
export const useristAPI = () => {
  return api({
    method: "post",
    url: "/users/list",
  });
};

/**
 * @title 회원 가입 API
 */
export const joinAPI = (data) => {
  return api({
    method: "post",
    url: "/users/create",
    data,
  });
};

/**
 * @title 유저 정보 업데이트 API
 */
export const updataUserAPI = (data) => {
  return api({
    method: "put",
    url: "/users/update",
    data,
  });
};

/**
 * @title 유저 삭제 API
 */
export const delUserAPI = (data) => {
  return api({
    method: "delete",
    url: "/users/delete",
    data,
  });
};

/**
 * @title 이메일 인증 API
 */
export const emailCheckAPI = (code) => {
  return api({
    method: "get",
    url: `/users/check/${code}`,
  });
};
