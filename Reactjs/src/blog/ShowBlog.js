import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URI } from "./Url";



const ShowBlog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  //mostrar todos los blogs
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlog(res.data);
    console.log(res.data);
  };

  //eliminar un blog
  const deleteBlog = async (id) => {
    await axios.delete(URI + id);
    getBlogs();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blog.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={"/edit/" + blog.id} className="btn btn-info">
                    <i class="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <Link to="/create" className="btn btn-primary mt-2 mb-2" ><i class="fa-solid fa-plus"></i></Link> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;
