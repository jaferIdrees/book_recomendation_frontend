import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const BookRecord = (props) => {
    const { title, author, first_sentence, lang, publisher } = props;
    return (
        <ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item>{title}</ListGroup.Item>
                <ListGroup.Item>Author: {author}</ListGroup.Item>
                <ListGroup.Item>First sentence: {first_sentence}</ListGroup.Item>
                <ListGroup.Item>Language: {lang}</ListGroup.Item>
                <ListGroup.Item>Publisher: {publisher}</ListGroup.Item>
            </ListGroup>
        </ListGroup>
    )
}

export default BookRecord;