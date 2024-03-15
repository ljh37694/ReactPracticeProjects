import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { BoldLargeText, LargeText, NormalText } from "../components/Texts";
import { Link } from "react-router-dom";

function WritePostNav(props) {
    return (
        <Row className="align-items-center h-100">
            <Col xs={4} className="text-start">
                <Link to="/main/home" style={{textDecorationLine : "none"}}>
                    <LargeText>X</LargeText>
                </Link>
            </Col>
            <Col xs={4} className="text-center">
                <BoldLargeText>내 물건 팔기</BoldLargeText>
            </Col>
            <Col xs={4} className="text-end">
                <NormalText color="#6e6e6e">임시저장</NormalText>
            </Col>
        </Row>
    );
}

export default WritePostNav;
