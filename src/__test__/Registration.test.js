/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import Registration from "../pages/Registration";


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
    act(() => { root.render(<Registration />) })

    expect(container.textContent).toContain('User registration')
    const inputFields = container.querySelectorAll('input');
    expect(inputFields.length).toBe(4)
})