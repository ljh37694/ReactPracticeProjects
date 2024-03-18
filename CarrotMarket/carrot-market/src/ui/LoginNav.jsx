import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    font-size: 24px;
    color: #fff;
`;

function LoginNav(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <IconContainer>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </IconContainer>
        </Container>
    );
}

export default LoginNav;
