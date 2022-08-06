import { useState, useEffect } from "react";
import { regresAPI } from "./api";

const FETCH_USERS_DELAY = 1500;

/**
 * Window confirm dialog
 *
 * @param {string} message
 */
const confirmDialog = (message) => window.confirm(message) === true;

/**
 * Helper custom hook function that fetches the users
 * and return accessible user paramteres
 */
export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [fetchUsersInProgress, setFetchUsersInProgress] = useState(false);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    setFetchUsersInProgress(true);
    setTimeout(async () => {
      const usersResponse = await regresAPI.users.query({ page });
      const usersData = usersResponse.data.data;

      // Set the users
      setUsers([...users, ...usersData]);
      setOriginalUsers([...originalUsers, ...usersData]);
      setPage(page + 1);
      setFetchUsersInProgress(false);
    }, [FETCH_USERS_DELAY]);
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return [users, originalUsers, setUsers, fetchUsers, fetchUsersInProgress];
};

/**
 * Helper custom hook function that fetches
 * single user
 *
 * @param {string} userId
 */
export const useFetchUser = (userId) => {
  const [user, setUser] = useState(null);
  const [fetchUserInProgress, setFetchUserInProgress] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setFetchUserInProgress(true);

      const userResponse = await regresAPI.users.show(userId);
      const userData = userResponse.data.data;

      // Set the users
      setUser(userData);
      setFetchUserInProgress(false);
    };

    fetchUser();
    // eslint-disable-next-line
  }, []);

  return [user, setUser, fetchUserInProgress];
};

/**
 * Helper function that takes user parameters
 * as arguments and makes an API call to delete
 * the user
 *
 * @param {array} users
 * @param {string} userId
 * @param {function} setUsers
 */
export const onDeleteUser = (users, userId, setUsers) => {
  const requestedUser = users.find((u) => u.id === userId);

  // Confirm deleting the user
  if (
    confirmDialog(
      `Are you sure you want to delete ${requestedUser.first_name}?`
    )
  ) {
    regresAPI.users.delete(userId).then(() => {
      const updatedUsersArray = users.filter((u) => u.id !== userId);
      if (setUsers) setUsers(updatedUsersArray);
    });
  }
};
