import React from "react";

import css from "./User.module.css";

const DeleteActionButton = ({ show, onDeleteUser }) => {
  return show ? (
    <button className={css.buttonDelete} onClick={onDeleteUser}>
      Delete
    </button>
  ) : null;
};

export default DeleteActionButton;
