import styles from '../css/ReviewPage.module.css';
import classNames from 'classnames/bind';
import StarScore from '../ui/StarScore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ReviewPage(props) {
  const cx = classNames.bind(styles);
  const [score, setScore] = useState(0);
  const { placeId } = useParams();

  const cafeList = useSelector(state => state.cafeList.value);
  let data = {};

  useEffect(() => {
    console.log(cafeList, 'cafeList');
    data = cafeList.filter(item => item.id === placeId);
    console.log(data);
  }, []);

  return (
    <main id='review-page' className={cx('main-container')}>
      <h3>{data.id}</h3>
      <form id={cx('review-form')}>
        <StarScore score={score} setScore={setScore} size="large" className={cx('star-score')} />
        <p className={cx('score')}>{score.toFixed(1)}</p>
        <textarea placeholder="카페를 이용하면서 느낀 만족도에 대한 후기를 남겨주세요" className={cx('review-textarea')} />
      </form>
    </main>
  );
}

export default ReviewPage;