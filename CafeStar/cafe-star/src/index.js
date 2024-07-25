import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ProtectedRoute from "./components/ProtectedRoute";
import ReviewPage from "./pages/ReviewPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/cafe/review" element={<ReviewPage />} />
          </Route>

          <Route path="/user" element={<LoginPage />}>
              <Route path="login" element={<LoginForm />} />
              <Route path="sign-up" element={<SignUpForm />} />
          </Route>

          <Route path="/login/check" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
