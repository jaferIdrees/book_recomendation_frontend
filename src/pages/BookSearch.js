import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import search_books from "../API/open_library_search";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookRecord from "../components/BookRecord";

const BookSearch = () => {
    const [value, setTitle] = useState(''),
    onInput = ({target:{value}}) => setTitle(value);;
    const [bookList,setBookList ] = useState([]);
    
    const onFormSubmit = async (e) => {
          e.preventDefault()
          await search_books(value).then((res) => setBookList(res));
          setTitle('')
        }
    return (
        <>
        <Form onSubmit={onFormSubmit}>
            <p className="display-5 text-center ">Search Open Library</p>
            <InputGroup className="mb-3 p-3">
                <Form.Control
                    placeholder="Book title"
                    aria-label="Book title"
                    aria-describedby="basic-addon2"
                    onInput={onInput}
                    value={value}
                />
                <Button type="submit" variant="outline-primary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
        </Form>
        {bookList.length > 0 && bookList.map((book) => <BookRecord key={book.isbn} book={book}/>)}
        </>
    )
}

export default BookSearch;