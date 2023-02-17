/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import BookDetails from "../pages/BookDetails";


let container = null;
let root = null
beforeEach(() => {
    container = document.createElement('root')
    root = ReactDOM.createRoot(container)
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    root.unmount();
    container.remove();
    container = null;
});

it("renders book data", async () => {
    const fakeBook = {
        book: {
            title: 'Test book',
            author: 'Jafer Yousef',
            lang: 'Arabic',
            publisher: 'Test',
            isbn: 123569,
            publication_date: '28 January 2023'
        },
        reviews: [
            { content: 'test review1', rating: '5', full_name: 'Leena Saeed' }
        ]
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeBook)
        })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        root.render(<BookDetails id="7" />);
    });

    expect(container.textContent).toContain(fakeBook.book.title);
    expect(container.textContent).toContain(fakeBook.book.author);
    expect(container.textContent).toContain(fakeBook.book.lang);
    expect(container.textContent).toContain(fakeBook.book.publisher);
    expect(container.textContent).toContain(fakeBook.reviews[0].content);
    expect(container.textContent).toContain(fakeBook.reviews[0].full_name);

    expect(container.querySelectorAll('img').length).toBe(1);

    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
});