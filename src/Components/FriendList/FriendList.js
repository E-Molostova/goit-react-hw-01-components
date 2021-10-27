import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
