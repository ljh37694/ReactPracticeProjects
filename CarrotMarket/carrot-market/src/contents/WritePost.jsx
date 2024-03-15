import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { BoldNormalText, NormalText, BoldLargeText } from "../components/Texts";

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
    color: #6e6e6e;
    border-radius: 5px;
    border: 1px solid #6e6e6e;
    width: 100%;
    background-color: inherit;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const StyledTextarea = styled.textarea`
    color: #6e6e6e;
    border-radius: 5px;
    border: 1px solid #6e6e6e;
    width: 100%;
    background-color: inherit;
    resize: none;
    height: 15em;
    margin-top: 10px;
    padding: 10px;
`;

const SubmitButton = styled.button`
    background-color: #ff6600;
    border-radius: 5px;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
`;

function WritePost(props) {
    const text =
        "송정동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n" +
        "신뢰할 수 있는 거래를 위해 자세히 적어주세요.\n" +
        "과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.";

    return (
        <>
            <Form>
                <AttachedImageContainer>
                    <FontAwesomeIcon icon={faCamera} />
                    <NormalText color="#6e6e6e">0/10</NormalText>
                </AttachedImageContainer>
                <BoldNormalText>제목</BoldNormalText>
                <StyledInput placeholder="제목" name="title" />
                <BoldNormalText>거래 방식</BoldNormalText>
                <StyledInput placeholder="₩ 가격을 입력하세요." name="price" />
                <BoldNormalText>자세한 설명</BoldNormalText>
                <StyledTextarea placeholder={text} />
                <SubmitButton type="submit">
                    <BoldLargeText>작성 완료</BoldLargeText>
                </SubmitButton>
            </Form>
        </>
    );
}

export default WritePost;
