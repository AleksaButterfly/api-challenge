import React from "react";
import { Link, useParams } from "react-router-dom";

// Helpers
import { useFetchUser } from "../../util/apiHelpers";

// Shared
import { Page, Heading, User, IconChevron } from "../../components";
import css from "./UserPage.module.css";

const UserWrapper = (props) => {
  const { show, ...rest } = props;
  return show ? (
    <div className={css.userWrapper}>
      <User {...rest} />
    </div>
  ) : null;
};

const BackInlineButton = ({ show }) => {
  return show ? (
    <Link className={css.homeLink} to="/">
      <IconChevron className={css.homeLinkIcon} />
      Go back
    </Link>
  ) : null;
};

const UsersPage = () => {
  const params = useParams();
  const userId = params.id;

  const [user] = useFetchUser(userId);
  const displayName = `${user?.first_name} ${user?.last_name}`;

  const headingText = user ? displayName : "⚡ Loading user... ⚡";
  return (
    <Page>
      <Heading headingText={headingText} />
      <BackInlineButton show={!!user} />
      <UserWrapper show={!!user} user={user} />
    </Page>
  );
};

export default UsersPage;
