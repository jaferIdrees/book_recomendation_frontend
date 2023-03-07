import Alert from 'react-bootstrap/Alert';
import { user_logged } from "./user_authentication"

const add_book = async (book) => {
    if (user_logged()) {
        fetch("http://localhost:4000/api/v1/books", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({ book }),
        })
    } else {
        <Alert variant='warning'>
          You need to login!
        </Alert>
    }
}

export default add_book