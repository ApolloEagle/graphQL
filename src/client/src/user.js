import React from "react";
import { Query } from "react-apollo";
import query from "./query";

const User = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      const users = data.users;
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
      if (users) {
        return (
          <ul>
            {users.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        );
      }
    }}
  </Query>
);

export default User;
