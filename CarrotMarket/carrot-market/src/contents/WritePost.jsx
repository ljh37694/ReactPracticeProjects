import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { BoldNormalText, NormalText, BoldLargeText } from "../components/Texts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CARROT, GREY } from "../components/Color";

const Container = styled.div`
    border-radius: 10px;
    color: #6e6e6e;
    border: 1px solid #6e6e6e;
`;

const Form = styled.form``;

const AttachedImageContainer = styled(Container)`
    width: 4em;
    height: 4em;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const StyledInput = styled.input`
    color: #fff;
    border-radius: 5px;
    border: 1px solid ${GREY};
    width: 100%;
    background-color: inherit;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const StyledTextarea = styled.textarea`
    color: #fff;
    border-radius: 5px;
    border: 1px solid ${GREY};
    width: 100%;
    background-color: inherit;
    resize: none;
    height: 15em;
    margin-top: 10px;
    padding: 10px;
`;

const SubmitButton = styled.button`
    background-color: ${CARROT};
    border-radius: 5px;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
`;

function WritePost(props) {
    const { data, setData } = props;
    const navigate = useNavigate();
    const text =
        "송정동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n" +
        "신뢰할 수 있는 거래를 위해 자세히 적어주세요.\n" +
        "과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.";

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [content, setContent] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        setData([
            {
                title: title,
                photo: [
                    "https://blog.kakaocdn.net/dn/tWx11/btqDag5h7y3/6aY75vJNfOPMyNicZo53c0/img.png",
                ],
                price: price,
                content: content,
            },
            ...data,
        ]);

        navigate("/main/home");
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <AttachedImageContainer>
                    <FontAwesomeIcon icon={faCamera} />
                    <NormalText color="#6e6e6e">0/10</NormalText>
                </AttachedImageContainer>
                <BoldNormalText>제목</BoldNormalText>
                <StyledInput
                    placeholder="제목"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <BoldNormalText>거래 방식</BoldNormalText>
                <StyledInput
                    placeholder="₩ 가격을 입력하세요."
                    name="price"
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                />
                <BoldNormalText>자세한 설명</BoldNormalText>
                <StyledTextarea
                    placeholder={text}
                    name="content"
                    onChange={(e) => setContent(e.target.value)}
                />
                <SubmitButton type="submit">
                    <BoldLargeText>작성 완료</BoldLargeText>
                </SubmitButton>
            </Form>
        </>
    );
}

export default WritePost;
