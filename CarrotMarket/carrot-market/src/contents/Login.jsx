import styled from "styled-components";
import { GREY } from "../components/Color";
import axios from "axios";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 30em;
    height: 3em;
    padding: 10px;
    border: 1px solid ${GREY};
    border-radius: 5px;
    background-color: inherit;
    margin: 0.5em auto;
    color: #fff;
`;

const CarrotImage = styled.img`
    width: 10em;
    margin: 100px auto;
`;

function Login(props) {
    const { userId, setUserId, password, setPassword } = props;
    const navigate = useNavigate();

    return (
        <LoginForm id="login-form" onSubmit={async (e) => {
            e.preventDefault();

            try {
                const response = await axios.post("http://localhost:1234/login", { userId, password });
                const token = response.data.token;

                localStorage.setItem("token", token);

                console.log("로그인 성공", token);

                navigate("/main/home");
            } catch(error) {
                console.log(error);

                alert(error.response.data);
            }
        }}>
            <CarrotImage src="https://brandnew.daangn.com/static/83204de0c76f5d19f87a4cd3d02a23df/49a66/logoImage.png" />

            <StyledInput type="text" placeholder="아이디를 입력하세요." onInput={e => setUserId(e.currentTarget.value)} />
            <StyledInput type="password" placeholder="비밀번호를 입력하세요." onInput={e => setPassword(e.currentTarget.value)} />
        </LoginForm>
    );
}

export default Login;
