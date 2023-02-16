const show_book = (id) => {
    const book = fetch(`http://localhost:4000/api/v1/books/${id}`, {
            
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
    },
    
}).then((res) => res.json()).then((res)=> res);

return book;
}

export default show_book;