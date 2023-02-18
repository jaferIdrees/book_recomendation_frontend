import { Rating } from "react-simple-star-rating";

const ReviewRecord = (props) => {
    const {content, rating, full_name} = props.review;

    return (
        <div className="d-flex justify-content-between border rounded p-3 mx-3">
            <p>Review: {content}</p>
            <p>Rating: <Rating readonly="true" initialValue={rating} /></p>
            <p>By: {full_name}</p>
        </div>
    )
}

export default ReviewRecord;