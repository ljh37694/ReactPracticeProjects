import ReviewList from "../ui/ReviewList";

function ReviewPanel(props) {
  return (
    <section className="panel-container">
      <h3 className="title">리뷰</h3>
      <ReviewList />
    </section>
  );
}

export default ReviewPanel;