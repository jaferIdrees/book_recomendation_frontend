import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import retrieveUserBooks from "../API/user_books";
import BookRecord from "../components/BookRecord";

const MyBooks = () => {
    const [bookList, setBookList] = useState([]);
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        const books = async (book_id) => retrieveUserBooks(book_id)
        books(id).then((list)=> setBookList(list))
    },[id])
    if (bookList){
    return (
        <>
        {bookList.map((book) => <BookRecord key={book.isbn} book={book}/>)}
        </>
    );} else return null;
}

export default MyBooks;