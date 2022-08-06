import React from "react";

// Helpers
import { useFetchUsers, onDeleteUser } from "../../util/apiHelpers";

// Shared
import { Page, Heading, Users } from "../../components";

const TOTAL_USERS = 12;

const UsersPage = () => {
  const [users, originalUsers, setUsers, fetchUsers, fetchUsersInProgress] =
    useFetchUsers();

  // Original users represents an array of users that
  // includes the ones that are also deleted.
  //
  // We need to keep the count of the deleted users so that
  // InfiniteScroll component can work properly.
  const hasMoreItems = originalUsers.length < TOTAL_USERS;

  const handleDeletingUser = (userId, e) => {
    e.preventDefault();
    onDeleteUser(users, userId, setUsers);
  };

  const headingText = "⚡ Reqres.in Users API ⚡";
  return (
    <Page>
      <Heading headingText={headingText} />
      <Users
        users={users}
        fetchUsers={fetchUsers}
        fetchUsersInProgress={fetchUsersInProgress}
        onDeleteUser={handleDeletingUser}
        hasMoreItems={hasMoreItems}
      />
    </Page>
  );
};

export default UsersPage;
