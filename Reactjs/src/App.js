import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShowBlog from "./blog/ShowBlog";
import CreateBlog from "./blog/CreateBlog";
import EditBlog from "./blog/EditBlog";

function App() {
  return (
    <>

<h2>Blog</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlog />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/edit/:id" element={<EditBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
