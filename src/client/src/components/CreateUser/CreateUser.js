import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import query from "../../api";

const createUser = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      id
      name
      cars {
        make
      }
    }
  }
`;

const CreateUser = () => {
  const [state, setState] = useState({ name: "" });

  const nameChanged = ({ target: { value } }) => {
    setState({ name: value });
  };

  const resetFields = () => {
    return setState({ name: "" });
  };

  return (
    <Mutation
      mutation={createUser}
      refetchQueries={[{ query: query }]}
      awaitRefetchQueries={true}
    >
      {(createUser, { loading, error }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser({
              variables: {
                name: state.name,
              },
            });
            resetFields();
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={nameChanged}
            />
          </label>
          <input type="submit" value="Add User" />
          {loading && <p>Adding user ...</p>}
          {error && <p>Error...</p>}
        </form>
      )}
    </Mutation>
  );
};

export default CreateUser;
