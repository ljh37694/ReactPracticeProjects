import { useSelector } from 'react-redux';
import Reveiw from '../components/Review';
import styles from '../css/ReviewList.module.css';
import classNames from 'classnames/bind';

function ReviewList(props) {
  const cx = classNames.bind(styles);

  const myReviewList = useSelector(state => state.myReviewList.value);

  return (
    <div className={cx('container')}>
      <div className={cx('list-container')}>
        {myReviewList.map(review => <Reveiw data={review} />)}
      </div>
    </div>
  );
}

export default ReviewList;