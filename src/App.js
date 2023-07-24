import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

const App = () => {
  const [user, setUser] = useState([]);

  const saveAddUser = (uName, uAge) => {
    setUser((prevUser) => {
      return [
        ...prevUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={saveAddUser} />
      {user.length > 0 && <UsersList users={user} />}
    </div>
  );
};

export default App;
