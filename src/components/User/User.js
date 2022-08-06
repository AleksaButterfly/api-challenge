import React from "react";
import { object, func } from "prop-types";
import { Link } from "react-router-dom";

// External
import { LazyLoadImage } from "react-lazy-load-image-component";

// Shared
import { IconEmail } from "..";
import DeleteActionButton from "./DeleteActionButton";
import css from "./User.module.css";

// Read more: https://www.npmjs.com/package/react-lazy-load-image-component
const LOAD_IMAGE_EFFECT = "blur";

const User = ({ user, onDeleteUser }) => {
  const displayName = `${user.first_name} ${user.last_name}`;
  return (
    <div className={css.user}>
      <LazyLoadImage
        className={css.avatar}
        src={user.avatar}
        alt={displayName}
        effect={LOAD_IMAGE_EFFECT}
      />
      <h4 className={css.heading}>{displayName}</h4>
      <div className={css.icons}>
        <span className={css.email}>
          <IconEmail className={css.iconEmail} />
          {user.email}
        </span>
      </div>
      <DeleteActionButton
        show={!!onDeleteUser}
        onDeleteUser={(e) => onDeleteUser(user.id, e)}
      />
    </div>
  );
};

User.defaultProps = {
  user: null,
  onDeleteUser: null
};

User.propTypes = {
  user: object.isRequired,
  onDeleteUser: func
};

export default User;

export const UserLink = ({ user, onDeleteUser }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <User user={user} onDeleteUser={onDeleteUser} />
    </Link>
  );
};

UserLink.displayName = "UserLink";
