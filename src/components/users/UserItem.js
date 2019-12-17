import React from "react";
import { Link } from "react-router-dom";

const UserItem = props => {
  const { login, avatar_url } = props.userItem;

  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark my'>
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
