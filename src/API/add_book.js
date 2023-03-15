import { user_logged } from "./user_authentication"

const add_book = async (book) => {
    const logged = await user_logged()
    if (logged) {
        fetch("http://localhost:4000/api/v1/books", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({ book }),
        })
    } else {
        alert('You need to login!')
    }
}

export default add_book