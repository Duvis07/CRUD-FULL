import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URI } from "./Url";


const CreateBlog = () => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const navigate = useNavigate();

  //crear un blog
  const storeBlog = async (e) => {
    e.preventDefault();
    const blog = { title, content };
    await axios.post(URI, blog);
    navigate("/");
  };

  return (
    <div class="container col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Agregar Blog</h3>
        </div>
        <div class="card-body">
          <form onSubmit={storeBlog}>
            <div class="form-group">
              <label for="validationCustom01" class="form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label class="label">Content:</label>
              <input
                type="text"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-2 ">
              {" "}
              Create{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
