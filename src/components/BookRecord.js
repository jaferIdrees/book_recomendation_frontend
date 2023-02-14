import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import universal_cover from '../assets/images/universal_Book_cover.png';
import Button from 'react-bootstrap/Button';
import add_book from "../API/add_book";
import review_book_api from "../API/review_book";

const BookRecord = (props) => {
    console.log('prp', props)
    const { title, author, first_sentence, lang, publisher, cover_image, isbn, publication_date } = props.book;
    const {btn} = props;
    const coverUrl = (cover_image ? `https://covers.openlibrary.org/b/id/${cover_image}-M.jpg` : universal_cover);
    const add_to_lib = () => add_book(props.book)
    const review_book = () => review_book_api(isbn);
    return (
        <Container className="border rounded gap-3 m-3 py-3">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={6}>
                    <p className="display-6 text-center">{title}</p>
                    <div className="text-center">
                        <Image src={coverUrl} fluid={true} alt="Cover" className="shadow img-thumbnail" />
                    </div>
                </Col>
                <Col xs={6} md={4} className="row align-items-center">
                    <p className="display-8">Author: {author}</p>
                    <p className="display-8">Language: {lang}</p>
                    <p className="display-8"> Publisher: {publisher}</p>
                    <p className="display-8"> ISBN: {isbn}</p>
                    <p className="display-8"> Publish year: {publication_date}</p>
                </Col>
                <Col className="row align-items-center pe-3">
                    <Button variant="primary" id={isbn} onClick={btn? review_book : add_to_lib}>
                    {btn? 'Add your review' : 'Add to my library'}
                    </Button>
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