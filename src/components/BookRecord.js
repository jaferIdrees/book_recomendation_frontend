import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import universal_cover from '../assets/images/universal_Book_cover.png'

const BookRecord = (props) => {
    console.log('prp', props)
    const { title, author, first_sentence, lang, publisher, cover } = { ...props.book };
    const coverUrl = (cover? `https://covers.openlibrary.org/b/id/${cover}-M.jpg` : universal_cover);
    return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={4}>
                    <img src={coverUrl} alt="Cover" />
                </Col>
                <Col xs={6} md={2}>
                    {title}
                </Col>
                <Col xs={6} md={2}>
                    Author: {author}
                </Col>
                <Col xs={6} md={2}>
                    First sentence: {first_sentence}
                </Col>
                <Col xs={6} md={2}>
                    Language: {lang}
                </Col>
                <Col xs={6} md={2}>
                    Publisher: {publisher}
                </Col>
            </Row>
        </Container>
    )
}

export default BookRecord;