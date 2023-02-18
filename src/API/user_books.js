const retrieveUserBooks = async(id) => {
    const current_user_url = `http://localhost:4000/api/v1/users/${id}`
    const bookList = await fetch(current_user_url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    }).then((response) => response.json()).then((result)=> result);
    return bookList;
}

export default retrieveUserBooks;