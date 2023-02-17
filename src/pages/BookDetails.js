import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import show_book from "../API/show_book";
import BookRecord from "../components/BookRecord";
import Review from "../components/Review";
import ReviewRecord from "../components/ReviewRecord";

const BookDetails = () => {
    const {id} = useParams();
    const [bookRecord, setBookrecord] = useState();

    useEffect(() => {
        const books = async (book_id) => show_book(book_id)
        books(id).then((book) => setBookrecord(book))
    }, [id])

    
    if (bookRecord) {
        const {book, reviews} = bookRecord;
        return (
            <>
            <BookRecord book={book} btn="review" />
            <Review book_id={id}/>
                {reviews.map((rev, idx) => <div>
                        <ReviewRecord key={idx} review={rev} />
                </div>)}
            </>
        );
    } else return null;
}

export default BookDetails;