import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setIsLoggedIn } from "../redux/states/isLoggedIn";

function LoginForm(props) {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.isLoggedIn.value);
  const navigate = useNavigate();
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&scope=account_email,profile_nickname,profile_image,openid&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  useEffect(() => {
    axios('http://localhost:5000/login/success', {withCredentials: true})
      .then((res) => {
        dispatch(setIsLoggedIn(true));
        console.log(res.data);
        navigate('/');
      })
      .catch(e => {
        axios.get('http://localhost:5000/refresh-token', {withCredentials: true})
          .then(res => {
            console.log(res.data);
            navigate('/');
          })
          .catch(e => {
            console.log(e);
            dispatch(setIsLoggedIn(false));
          })
        console.log(e);
      })
  }, []);

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const id = document.loginForm.id.value;
    const pw = document.loginForm.pw.value;

    if (id === '' || pw === '') {
      alert("아이디 또는 비밀번호가 빈 칸입니다.");
    } else {
      fetch(process.env.REACT_APP_SERVER_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          pw,
        }),
        credentials: 'include',
      })
        .then((response) => response.json())
        .then(data => {
          console.log(data);

          navigate('/');
        })
        .catch(e => console.log(e));
    }
  }

  return (
    <section className="login-form-container">
      <header>
        <h4 className="title login-title">Cafe Star</h4>
      </header>
      <form className="login-form" name="loginForm" onSubmit={onSubmitLogin}>
        <input type="text" className="login-form-input" name="id" placeholder="아이디" />
        <input type="password" className="login-form-input" name="pw" placeholder="비밀번호" autoComplete="off" />
        <button type="submit" className="login-button">로그인</button>

        <Link to="/user/sign-up">회원가입</Link>

        <a href={url} className="kakao-login-button"></a>
      </form>
    </section>
  );
}

export default LoginForm;