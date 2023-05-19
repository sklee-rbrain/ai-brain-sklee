import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import router from "./app/routes";

/**
 * @title 유지하고 싶은 redux store를 인자로 주면 persistor 객체를 반환
 */
export const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <PersistGate loading={null} persistor={persistor}>
      {/* PersistGate : 저장된 store 의 값이 다시 redux 에 저장될 떄 까지 내 app 의 ui 렌더링을 지연시킬 수 있습니다.
      loading => 로딩 과정에서 보여줄 컴포넌트
      persistor => 로컬스토리지에 저장할 스토어 */}
      <GlobalStyle />
    </PersistGate>
  </Provider>
);
