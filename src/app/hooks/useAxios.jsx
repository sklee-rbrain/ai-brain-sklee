import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// --- 💥 axios 인스턴스 생성 💥
const api = axios.create({
  baseURL: "http://www.togetherlab.co.kr",
  timeout: 10000,
});

const useAxiosInterceptor = () => {
  const token = useSelector((state) => state.authSlice.token);
  const navigate = useNavigate();

  const errorHandler = (error) => {
    if (error.response.status === 401) {
      console.log("401! 인증되지 않은 사용자 입니다.");
      navigate("/");
    } else {
      console.log("Error Interceptor!", error);
    }
    return Promise.reject(error);
  };

  const requestHandler = (config) => {
    config.headers = {
      Authorization: !!token ? `Bearer ${token}` : "",
    };
    return config;
  };

  const responseHandler = (response) => {
    return response;
  };

  const requestInterceptor = api.interceptors.request.use(requestHandler);

  const responseInterceptor = api.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error.response.data)
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);
};

export { useAxiosInterceptor, api };
