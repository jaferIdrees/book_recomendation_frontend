import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import universal_cover from '../assets/images/universal_Book_cover.png';
import Button from 'react-bootstrap/Button';

const BookRecord = (props) => {
    console.log('prp', props)
    const { title, author, first_sentence, lang, publisher, cover, isbn } = { ...props.book };
    const coverUrl = (cover ? `https://covers.openlibrary.org/b/id/${cover}-M.jpg` : universal_cover);
    return (
        <Container className="border rounded gap-3 m-3 py-3">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={6}>
                    <p className="display-6 text-center">{title}</p>
                    <div class="text-center">
                        <Image src={coverUrl} fluid={true} alt="Cover" className="shadow img-thumbnail" />
                    </div>
                </Col>
                <Col xs={6} md={4} className="row align-items-center">
                    <p className="display-8">Author: {author}</p>
                    <p className="display-8">Language: {lang}</p>
                    <p className="display-8"> Publisher: {publisher}</p>
                    <p className="display-8"> ISBN: {isbn}</p>
                </Col>
                <Col className="row align-items-center pe-3">
                <Button variant="primary">Add to my library</Button>
                </Col>
            </Row>
            {first_sentence &&
                <Row className="mt-5">
                    <p>First sentence: {first_sentence}</p>
                </Row>}
        </Container>
    )
}

export default BookRecord;