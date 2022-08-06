import React from "react";
import { array, bool, func } from "prop-types";

// External
import InfiniteScroll from "react-infinite-scroll-component";

// Shared
import { UserLink, Loader } from "..";
import css from "./Users.module.css";

const Users = (props) => {
  const {
    users,
    fetchUsers,
    fetchUsersInProgress,
    onDeleteUser,
    hasMoreItems
  } = props;
  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchUsers}
      hasMore={hasMoreItems}
      loader={<Loader show={fetchUsersInProgress} />}
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
  hasMoreItems: false
};

Users.propTypes = {
  users: array.isRequired,
  fetchUsers: func.isRequired,
  fetchUsersInProgress: bool.isRequired,
  onDeleteUser: func.isRequired,
  hasMoreItems: bool.isRequired
};
export default Users;
