import { useState } from "react";
import UserForm from "./components/app1/UserForm";
import UsersList from "./components/app1/UsersList";
import LoadData from "./components/app2/LoadData";

function App() {
  const [users, setUsers] = useState([]);
  const onUserAdd = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <div>
      <div style={{ margin: 24 }}>
        <h3>Add users</h3>
        <UserForm onUserAdd={onUserAdd} />
        <br />
        <h3>Show users</h3>
        <UsersList users={users} />
      </div>
      <hr />
      <div style={{ margin: 24 }}>
        <h3>Api Call</h3>
        <LoadData />
      </div>
    </div>
  );
}

export default App;
