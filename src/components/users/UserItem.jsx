import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  return (
    < div className="card text-center" >
      <img
        src={avatar_url}
        alt={login}
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm">More</Link>
      </div>
    </div >
  );
}

UserItem.defaultProps = {
  login: 'unknown',
  avatar_url: 'https://cdn.pixabay.com/photo/2014/10/07/13/48/mt-fuji-477832__340.jpg',
  html_url: 'https://github.com'
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;