import styles from '../css/ReviewPage.module.css';
import classNames from 'classnames/bind';
import StarScore from '../ui/StarScore';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ReviewPage(props) {
  // func
  const cx = classNames.bind(styles);
  const location = useLocation();
  const navigate = useNavigate();

  // props
  const { edit } = props;

  // states
  const [score, setScore] = useState(0);
  const data = location.state.data;
  const userData = useSelector(state => state.userData.value);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsEditMode(edit);
    setScore(data.score ? data.score : 0);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const text = document.reviewForm.textarea.value;

    const reviewData = {
      ...data,
      comment: text,
      user_id: userData.id,
      score: score,
      created: new Date(),
    };

    console.log(reviewData);

    if (text && score !== 0) {
      if (isEditMode) {
        axios.put('http://localhost:5000/cafe/review/edit', { ...reviewData })
          .then(res => {
            console.log(res.data);
          })
          .catch(e => console.log(e));
      } else {
        axios.post('http://localhost:5000/cafe/review/push', reviewData)
        .then(res => {
          console.log(res.data);
        })
        .catch(e => console.log(e));
      }

      navigate('/');
    } else {
      if (!text) {
        alert('후기가 빈칸입니다');
      } else if (score === 0) {
        alert('평점을 매겨주세요');
      }
    }
  };

  return (
    <main id='review-page' className={cx('main-container')}>
      <form id={cx('review-form')} name='reviewForm' onSubmit={onSubmit}>
        <h3 className={cx('place-name')}>{data['place_name']}</h3>
        <StarScore score={score} setScore={setScore} size="large" className={cx('star-score')} />
        <p className={cx('score')}>{score.toFixed(1)}</p>
        <textarea name='textarea' placeholder="카페를 이용하면서 느낀 만족도에 대한 후기를 남겨주세요" className={cx('review-textarea')}>
          { data.comment }
        </textarea>

        <button type='submit'>{isEditMode ? '수정 완료' : '작성 완료'}</button>
      </form>
    </main>
  );
}

export default ReviewPage;