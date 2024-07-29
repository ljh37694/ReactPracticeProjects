import classNames from "classnames/bind";
import styles from "../css/Score.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function Score(props) {
  const { score, status, ...rest } = props;

  const cx = classNames.bind(styles);

  return (
    <div className={cx('score-container', status ? status : 'normal' )} rest>
      <FontAwesomeIcon icon={faStar} />
      <p>{score.toFixed(1)}</p>
    </div>
  );
}

export default Score;