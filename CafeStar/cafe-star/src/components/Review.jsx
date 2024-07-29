import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../css/Review.module.css';
import classNames from 'classnames/bind';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Score from '../ui/Score';

function Reveiw(props) {
  const cx = classNames.bind(styles);

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
        <div>
          <Score score={rateAvg} status="alert" />
        </div>
        <div>
          <Score score={data.score} />
        </div>
      </section>

      <section className={cx('text-container')}>
          <p>{data.comment}</p>
      </section>

      <footer className={cx('footer')}>
          <button className={`btn ${cx('edit-button')}`}>수정하기</button>
      </footer>
    </div>
  );
}

export default Reveiw;