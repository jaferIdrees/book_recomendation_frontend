import React from "react";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import universal_cover from '../assets/images/universal_Book_cover.png';
import Button from 'react-bootstrap/Button';
import add_book from "../API/add_book";

const BookRecord = (props) => {
    const { title, author, first_sentence, lang, publisher, cover_image, isbn, publication_date } = props.book;
    const {btn} = props;
    const coverUrl = (cover_image ? `https://covers.openlibrary.org/b/id/${cover_image}-M.jpg` : universal_cover);
    const add_to_lib = () => add_book(props.book)
    return (
        <div className="border rounded d-flex gap-3 m-3 py-3">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row className="justify-content-center">
                <Col sm={12} md={6}>
                    <p className="display-6 text-center">{title}</p>
                    <div className="text-center">
                        <Image src={coverUrl} fluid={true} alt="Cover" className="shadow img-thumbnail" />
                    </div>
                </Col>
                <Col sm={12} md={6} className="row align-items-center">
                    <p className="display-8">Author: {author}</p>
                    <p className="display-8">Language: {lang}</p>
                    <p className="display-8"> Publisher: {publisher}</p>
                    <p className="display-8"> ISBN: {isbn}</p>
                    <p className="display-8"> Publish year: {publication_date}</p>
                </Col>
                {!btn &&<Col sm={12} className="row text-center p-3">
                 <><Button variant="primary" id={isbn} onClick={add_to_lib} className='justify-content-sm-center'>
                    Add to my library
                    </Button></>
                </Col>}
                {first_sentence &&
                
                <Col sm={12} md={6} className="row text-center mt-5">
                <p><strong>First sentence:</strong> {first_sentence}</p>
                </Col>
           }
            </Row>
            
        </div>
    )
}

export default BookRecord;