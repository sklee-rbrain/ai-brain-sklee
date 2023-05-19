import { api } from "../app/hooks/useAxios";

/**
 * @title 공지사항 조회 API
 */
export const noticeAPI = (noticeId) => {
  return api({
    method: "get",
    url: "/notice",
    params: {
      noticeId,
    },
  });
};

/**
 * @title 공지사항 업로드 API
 */
export const noticeUploadAPI = (data) => {
  return api({
    method: "post",
    url: "/notice",
    data,
  });
};

/**
 * @title 공지사항 수정 API
 */
export const noticeUpdateAPI = (data) => {
  return api({
    method: "put",
    url: "/notice",
    data,
  });
};

/**
 * @title 공지사항 삭제 API
 */
export const noticeDelAPI = (data) => {
  return api({
    method: "delete",
    url: "/notice",
    data,
  });
};

/**
 * @title 공지사항 리스트 API
 */
export const noticeListAPI = (data) => {
  return api({
    method: "post",
    url: "/notice/list",
    data,
  });
};

/**
 * @title 공지사항 카테고리 생성 API
 */
export const CategoryAPI = (data) => {
  return api({
    method: "post",
    url: "/notice/category",
    data,
  });
};

/**
 * @title 공지사항 카테고리 수정 API
 */
export const CategoryEditAPI = (data) => {
  return api({
    method: "put",
    url: "/notice/category",
    data,
  });
};

/**
 * @title 공지사항 카테고리 삭제 API
 */
export const CategoryDelAPI = (data) => {
  return api({
    method: "del",
    url: "/notice/category",
    data,
  });
};

/**
 * @title 공지사항 카테고리 목록 API
 */
export const CategoryListAPI = (data) => {
  return api({
    method: "post",
    url: "/notice/category/list",
    data,
  });
};
