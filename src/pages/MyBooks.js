import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import retrieveUserBooks from "../API/user_books";
import BookRecord from "../components/BookRecord";

const MyBooks = () => {
    const [bookList, setBookList] = useState([]);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const books = async (book_id) => retrieveUserBooks(book_id)
        books(id).then((list) => setBookList(list))
    }, [id])
    if (bookList) {
        return (
            <>
                {bookList.map((book) => <div>
                    <Link to={`/books/${book.id}`} key={book.id}>
                        <BookRecord book={book} btn="review" />
                    </Link>
                </div>)}
            </>
        );
    } else return null;
}

export default MyBooks;