import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
export default FriendList;
