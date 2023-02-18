const review_book_api = (review) => {
    fetch("http://localhost:4000/api/v1/books/7/reviews", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(review),
    })
}

export default review_book_api;