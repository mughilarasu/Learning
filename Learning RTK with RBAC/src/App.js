import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Not404Found from "./components/Not404Found/Not404Found";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ServerError from "./components/ServerError/ServerError";
import PersistLogin from "./components/PersistLogin/PersistLogin";
import PostsList from "./features/posts/PostsList";
import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import TodoList from "./features/todo/TodoList";
const ROLES = {
  ADMIN: "admin",
  USER: "user",
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="server-error" element={<ServerError />} />

        {/* Protected */}
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.USER]} />}
          >
            <Route path="/" element={<Home />}>
              <Route path="view-posts" element={<PostsList />} />
              <Route path="add-post" element={<AddPostForm />} />
              <Route
                path="view-single-post/:postId"
                element={<SinglePostPage />}
              />
              <Route path="edit-post/:postId" element={<EditPostForm />} />
              
          <Route path="user" element={<UsersList />} />
          <Route path="view-user/:userId" element={<UserPage />} />
       
          
          <Route path="todo" element={<TodoList />} />
              <Route path="counter" element={<Counter />} />
            </Route>
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
            <Route path="user" element={<User />} />
          </Route>
        </Route>

        {/* Not Found */}
        <Route path="*" element={<Not404Found />} />
      </Route>
    </Routes>
  );
}

export default App;
