import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Layout from "./components/Layout/Layout";
import { lightTheme } from "./styles";
import Login from "./pages/details/Login";
import Join from "./pages/details/Join";
import { useAxiosInterceptor } from "./app/hooks/useAxios";
/**
 * @title
 */
function App() {
  // axios custom hook (axios interceptor...)
  useAxiosInterceptor();

  // 임시 - 로그인 여부에 따른 페이지 처리
  const { pathname } = useLocation();
  const auth = JSON.parse(sessionStorage.getItem("persist:auth"));

  const isLoggedin = auth !== null && auth.username !== "null";

  return (
    <ThemeProvider theme={lightTheme}>
      {isLoggedin ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : pathname === "/users/create" ? (
        <Join />
      ) : (
        <Login />
      )}
    </ThemeProvider>
  );
}

export default App;
