import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/details/Home";
import App from "../../App";
import Loadingbar from "../../components/effects/Loadingbar";

// 1.suspense 2.createBrowserRouter 설명이 적혀있습니다.

/**
 * @title React suspense
 * @description Comments는 로딩이 완료되면 보여줄 컴포넌트 / props는 해당 컴포넌트에 전달할 props
 */

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loadingbar />}>
      <Component {...props} />
    </Suspense>
  );
};
const ArchiveList = Loadable(
  lazy(() => import("../../pages/list/community/ArchiveList"))
);
const NoticeList = Loadable(
  lazy(() => import("../../pages/list/community/NoticeList"))
);
const CommunityWrite = Loadable(
  lazy(() => import("../../pages/writes/community/CommunityWrite"))
);
const NotFound = Loadable(lazy(() => import("../../pages/details/404")));
const Join = Loadable(lazy(() => import("../../pages/details/Join")));

/**
 * @title 라우터 정보
 */
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // 대시보드
      {
        path: "dashboard",
        element: <Home />,
      },
      // 유저
      {
        path: "users",
        children: [
          {
            // 회원가입
            path: "create",
            element: <Join />,
          },
        ],
      },

      // 커뮤니티
      {
        path: "community",
        children: [
          {
            // 공지사항
            path: "notice",
            children: [
              {
                index: true,
                element: <NoticeList />,
              },
              {
                path: "write",
                element: <CommunityWrite />,
              },
            ],
          },
        ],
      },
      // 자료실
      {
        path: "archives",
        children: [
          {
            index: true,
            element: <ArchiveList />,
          },
        ],
      },
    ],
  },
]);

export default router;
