import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../css/Review.module.css';
import classNames from 'classnames/bind';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Reveiw(props) {
  const { data } = props;

  const cx = classNames.bind(styles);

  return (
    <div className={cx('container')}>
      <section className={cx('header-container')}>
        <h3 className={cx('title')}>{data['place_name']}</h3>
        <div className={cx('star-container')}>
          <FontAwesomeIcon icon={faStar} />
          <p>{data.score.toFixed(1)}</p>
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