import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ name, location, avatar, tag, stats }) => {
  return (
    <>
      <div className={style.profile}>
        <div>
          <img className={style.avatar} src={avatar} alt={name} />
          <p className={style.text}>{name}</p>
          <p className={style.text}>@{tag}</p>
          <p className={style.text}>{location}</p>
        </div>

        <ul className={style.stats}>
          {Object.entries(stats).map(([key, value]) => (
            <li className={style.statsli} key={key}>
              <span className={style.label}>{key}</span>
              <span className={style.quantity}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
