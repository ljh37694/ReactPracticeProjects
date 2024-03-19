import styled from "styled-components";
import { GREY } from "../components/Color";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUpForm = styled.form`
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

function SignUp(props) {
    const { userId, setUserId, password, setPassword, nickname, setNickname } = props;
    const data = { nickname: nickname, userId: userId, password: password };
    const navigate = useNavigate();

    return (
        <SignUpForm
            id="sign-up-form"
            onSubmit={async (e) => {
                e.preventDefault();

                try {
                    const response = await axios.post(
                        "http://localhost:1234/sign-up",
                        data
                    );
                    console.log("회원가입 성공!", response);

                    if (response.data == "성공") {
                        navigate("/main/home");
                    }
                } catch (e) {
                    console.log(e);

                    alert(e.response.data);
                }
            }}
        >
            <CarrotImage src="https://brandnew.daangn.com/static/83204de0c76f5d19f87a4cd3d02a23df/49a66/logoImage.png" />

            <StyledInput
                type="text"
                placeholder="닉네임을 입력하세요."
                value={nickname}
                onInput={(e) => setNickname(e.currentTarget.value)}
            />
            <StyledInput
                type="text"
                placeholder="아이디를 입력하세요."
                value={userId}
                onInput={(e) => setUserId(e.currentTarget.value)}
            />
            <StyledInput
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
            />
        </SignUpForm>
    );
}

export default SignUp;
