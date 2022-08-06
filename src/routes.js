import { UsersPage, UserPage } from "./pages";

const routes = () => {
  return [
    {
      path: "/",
      name: "UsersPage",
      component: <UsersPage />
    },
    {
      path: "/user/:id",
      name: "UserPage",
      component: <UserPage />
    }
  ];
};

export default routes;
