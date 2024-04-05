import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// import Unauthorized from "./components/Unauthorized/Unauthorized";
//import Home from "./components/Home/Home";
// import Not404Found from "./components/Not404Found/Not404Found";
// import ServerError from "./components/ServerError/ServerError";
// import PostsList from "./features/posts/PostsList";
// import Counter from "./features/counter/Counter";
// import AddPostForm from "./features/posts/AddPostForm";
// import SinglePostPage from "./features/posts/SinglePostPage";
// import EditPostForm from "./features/posts/EditPostForm";
// import UsersList from "./features/users/UsersList";
// import UserPage from "./features/users/UserPage";
// import TodoList from "./features/todo/TodoList";

const Home = lazy(() => import("./components/Home/Home.jsx"));
const Not404Found = lazy(() =>
  import("./components/Not404Found/Not404Found.jsx")
);
const Unauthorized = lazy(() =>
  import("./components/Unauthorized/Unauthorized.jsx")
);
const ServerError = lazy(() =>
  import("./components/ServerError/ServerError.jsx")
);
const PostsList = lazy(() => import("./features/posts/PostsList.jsx"));
const AddPostForm = lazy(() => import("./features/posts/AddPostForm.jsx"));
const SinglePostPage = lazy(() =>
  import("./features/posts/SinglePostPage.jsx")
);
const EditPostForm = lazy(() => import("./features/posts/EditPostForm.jsx"));
const Counter = lazy(() => import("./features/counter/Counter.jsx"));
const UsersList = lazy(() => import("./features/users/UsersList.jsx"));
const UserPage = lazy(() => import("./features/users/UserPage.jsx"));
const TodoList = lazy(() => import("./features/todo/TodoList.jsx"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="server-error" element={<ServerError />} />

        <Route path="/" element={<Home />}>
          <Route path="view-posts" element={<PostsList />} />
          <Route path="add-post" element={<AddPostForm />} />
          <Route path="view-single-post/:postId" element={<SinglePostPage />} />
          <Route path="edit-post/:postId" element={<EditPostForm />} />

          <Route path="user" element={<UsersList />} />
          <Route path="view-user/:userId" element={<UserPage />} />

          <Route path="todo" element={<TodoList />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Route>

      {/* Not Found */}
      <Route path="*" element={<Not404Found />} />
    </Routes>
  );
}

export default App;
