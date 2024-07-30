import styles from '../css/Review.module.css';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Score from '../ui/Score';
import { useNavigate } from 'react-router-dom';

function Reveiw(props) {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const { data } = props;

  const rateAverageList = useSelector(state => state.rateAverageList.value);
  const [rateAvg, setRateAvg] = useState(0);

  useEffect(() => {
    const avgData = rateAverageList.filter((item => item._id === data.id));

    setRateAvg(avgData[0].rateAvg);

    console.log(avgData);
  }, []);

  return (
    <div className={cx('container')}>
      <section className={cx('header-container')}>
        <h3 className={cx('title')}>{data['place_name']}</h3>
        <div className={cx('rate-avg')}>
          <Score score={rateAvg} status="normal" />
        </div>
        <div>
          <Score score={data.score} status="alert" />
        </div>
      </section>

      <section className={cx('text-container')}>
          <p>{data.comment}</p>
      </section>

      <footer className={cx('footer')}>
          <button className={`btn ${cx('edit-button')}`} onClick={() => navigate('/cafe/review/edit', { state: {data} })}>수정하기</button>
      </footer>
    </div>
  );
}

export default Reveiw;