import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import search_books from "../API/open_library_search";


const BookSearch = () => {
    const [value, setValue] = useState(),
        onInput = ({target:{value}}) => setValue(value);
    const onFormSubmit = async (e) => {
          e.preventDefault()
          console.log(value);
          await search_books(value).then((res) => console.log(res));

          setValue()
        }
    /*const handleSubmit = (data) => {
        console.log(Object.keys(data));
    }*/
    return (
        <Form onSubmit={onFormSubmit}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Book title"
                    aria-label="Book title"
                    aria-describedby="basic-addon2"
                    onInput={onInput}
                    value={value}
                />
                <Button type="submit" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        </Form>
    )
}

export default BookSearch;