import Reveiw from '../components/Review';
import styles from '../css/ReviewList.module.css';
import classNames from 'classnames/bind';

function ReviewList(props) {
  const { reviews } =  props;
  const cx = classNames.bind(styles);

  return (
    <div className={cx('container')}>
      <div className={cx('list-container')}>
        {reviews.map(review => <Reveiw data={review} />)}
      </div>
    </div>
  );
}

export default ReviewList;