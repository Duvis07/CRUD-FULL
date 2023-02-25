//importamos el modelo
import BlogModel from "../models/BlogModel.js";

//Metodos para el crud

//mostrar todos los registros
export const getAll = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//mostrar un registro
export const getOne = async (req, res) => {
  try {
    const blog = await BlogModel.findOne({ where: { id: req.params.id } });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//crear un registro
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.status(201).json({ message: "Blog creado con exito!!!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//actualizar un registro
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: "Blog actualizado con exito!!!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//eliminar un registro
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Blog eliminado con exito!!!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
