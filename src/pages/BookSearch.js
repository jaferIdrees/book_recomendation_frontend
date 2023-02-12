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
          console.log(value);
          await search_books(value).then((res) => setBookList(res));

          setTitle('')
        }
    /*const handleSubmit = (data) => {
        console.log(Object.keys(data));
    }*/
    return (
        <>
        <Form onSubmit={onFormSubmit}>
            <InputGroup className="mb-3">
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
        {bookList.map((book) => <BookRecord key={book.isbn} book={book}/>)}
        </>
    )
}

export default BookSearch;