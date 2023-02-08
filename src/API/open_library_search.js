const search_books = async (title) => {
    const q = 'https://openlibrary.org/search.json?title='+title.replace(/ /g, '+')//.concat(title.split().join('+'));
    console.log(q)
    const book_list = await fetch(q)
    .then((res) => res.json())
    .then((response) => response.docs.splice(0,10));

    return book_list;
}

export default search_books;