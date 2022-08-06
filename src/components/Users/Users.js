import React from "react";
import { array, bool, func } from "prop-types";

// External
import InfiniteScroll from "react-infinite-scroll-component";

// Shared
import { UserLink, Loader } from "..";
import css from "./Users.module.css";

const SCROLL_CONTAINER_HEIGHT = 600;

const Users = (props) => {
  const {
    users,
    fetchUsers,
    fetchUsersInProgress,
    onDeleteUser,
    hasMoreItems,
  } = props;
  const shouldAddLoaderMargin = users.length > 0;
  const loaderComponent = (
    <Loader show={fetchUsersInProgress} withMargin={shouldAddLoaderMargin} />
  );
  return (
    <InfiniteScroll
      className={css.scrollContainer}
      dataLength={users.length}
      next={fetchUsers}
      hasMore={hasMoreItems}
      loader={loaderComponent}
      height={SCROLL_CONTAINER_HEIGHT}
    >
      <div className={css.users}>
        {users.map((u) => {
          return <UserLink key={u.id} user={u} onDeleteUser={onDeleteUser} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

Users.defaultProps = {
  users: null,
  fetchUsers: null,
  fetchUsersInProgress: false,
  onDeleteUser: null,
  hasMoreItems: false,
};

Users.propTypes = {
  users: array.isRequired,
  fetchUsers: func.isRequired,
  fetchUsersInProgress: bool.isRequired,
  onDeleteUser: func.isRequired,
  hasMoreItems: bool.isRequired,
};

export default Users;
