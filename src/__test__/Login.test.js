/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import Login from "../pages/Login";


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

it('renders Login page', () => {
    act(() => { root.render(<Login />) })

    expect(container.textContent).toContain('User login')
    const inputFields = container.querySelectorAll('input');
    expect(inputFields.length).toBe(3)
})