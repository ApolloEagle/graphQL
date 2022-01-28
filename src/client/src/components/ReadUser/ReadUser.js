import React from "react";
import { Query } from "react-apollo";
import query from "../../api/query";

const User = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (error) return <h1>Error...</h1>;
      if (loading || !data) return <h1>Loading...</h1>;
      if (!loading && !error && data) {
        return (
          <ul>
            {data.users.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        );
      }
    }}
  </Query>
);

export default User;
