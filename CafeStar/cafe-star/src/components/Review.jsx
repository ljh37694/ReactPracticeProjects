import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../css/Review.module.css';
import classNames from 'classnames/bind';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Reveiw(props) {
  const cx = classNames.bind(styles);

  const { data } = props;

  return (
    <div className={cx('container')}>
      <section className={cx('header-container')}>
        <h3 className={cx('title')}>매번 늦어도 이해할게</h3>
        <div className={cx('star-container')}>
          <FontAwesomeIcon icon={faStar} />
          <p>3.5</p>
        </div>
      </section>

      <section className={cx('text-container')}>
        <p>최고에요!!!</p>
      </section>
    </div>
  );
}

export default Reveiw;