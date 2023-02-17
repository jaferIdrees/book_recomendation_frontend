import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Rating } from 'react-simple-star-rating'
import review_book_api from '../API/review_book';

const Review = (props) => {
  const {book_id} = props
  const [rating, setRating] = useState(0)
  const [revContent, setRevContent] = useState('');


  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  const handleTyping = (e) => {
    setRevContent(e.target.value)
  }

  const save_review = () => {
    const review= {
      book_id,
      content: revContent,
      rating
    };
    console.log(review)
    review_book_api(review);
  }

  return (
    <Form className='border rounded gap-3 m-3 p-3' onSubmit={save_review}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter your review</Form.Label>
        <Form.Control as="textarea" rows={3} value={revContent} onInput={handleTyping} />
      </Form.Group>
      <Rating
        onClick={handleRating}
        /* Available Props */
      />
      <p>{`Content: ${revContent} Rating: ${rating}`}</p>
      <Button variant="primary" type="submit">
        Review
      </Button>
    </Form>
  )
}

export default Review;