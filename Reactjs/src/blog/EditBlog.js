import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URI } from "./Url";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  //actualizar un blog
  const updateBlog = async (e) => {
    e.preventDefault();
    const blog = { title, content };
    await axios.put(URI+ id, blog);
    navigate("/");
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setContent(res.data.content);
  };

  return (
    <div class="container col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Editar Blog</h3>
        </div>
        <div class="card-body">
          <form onSubmit={updateBlog}>
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
              Edit{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
