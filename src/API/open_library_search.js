const search_books = async (title) => {
    const q = 'https://openlibrary.org/search.json?title='+title.replace(/ /g, '+')//.concat(title.split().join('+'));
    const book_list = await fetch(q)
    .then((res) => res.json())
    .then((response) => response.docs.splice(0,10));
    const books = book_list.filter((book)=> book.isbn).map((book)=> ({
        title: book.title,
        cover_image: book.cover_i,
        author: book.author_name? book.author_name[0] : '',
        first_sentence: book.first_sentence? book.first_sentence[0]:'',
        lang: book.language? book.language[0]:'',
        isbn: book.isbn? book.isbn[0]: '',
        publisher: book.publisher? book.publisher[0]:'',
        publication_date: book.publish_date[0]
    }))
    return books;
}

export default search_books;