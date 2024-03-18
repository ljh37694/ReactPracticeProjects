import styled from "styled-components";
import { GREY } from "../components/Color";

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

function SignUp(props) {
    return (
        <LoginForm onSubmit={() => console.log(1)}>
            <CarrotImage src="https://brandnew.daangn.com/static/83204de0c76f5d19f87a4cd3d02a23df/49a66/logoImage.png" />


            <StyledInput type="text" placeholder="닉네임을 입력하세요." />
            <StyledInput type="text" placeholder="아이디를 입력하세요." />
            <StyledInput type="password" placeholder="비밀번호를 입력하세요." />
            <StyledInput type="password" placeholder="한번 더 비밀번호를 입력하세요." />
        </LoginForm>
    );
}

export default SignUp;
