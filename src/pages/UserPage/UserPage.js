import React from "react";
import { useParams } from "react-router-dom";
import { Page, Heading, User } from "../../components";

import { useFetchUser } from "../../util/apiHelpers";

const UsersPage = () => {
  const params = useParams();
  const userId = params.id;

  const [user] = useFetchUser(userId);
  const displayName = `${user?.first_name} ${user?.last_name}`;

  const headingText = user ? displayName : "⚡ Loading user... ⚡";
  return (
    <Page>
      <Heading headingText={headingText} />
      {user ? <User user={user} /> : null}
    </Page>
  );
};

export default UsersPage;
