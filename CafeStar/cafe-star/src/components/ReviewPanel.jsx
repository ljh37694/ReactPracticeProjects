import { useEffect, useState } from "react";
import ReviewList from "../ui/ReviewList";

function ReviewPanel(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews([1, 2, 3, 4, 5]);
  }, []);

  return (
    <section className="panel-container">
      <h3 className="title">리뷰</h3>
      <ReviewList reviews={reviews} />
    </section>
  );
}

export default ReviewPanel;