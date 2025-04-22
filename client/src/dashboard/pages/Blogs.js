import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api';
//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import { getPlainTextFromHTML } from '../../utils/htmlParser';
import ImageUpload from '../components/ImageUpload';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [blogData, setBlogData] = useState({
    title: '',
    image: '',
    description: '',
    author: '',
    category: ''
  });

  const fetchBlogs = async () => {
    try {
      const res = await api.get('/api/blogs');
      console.log('Fetched blogs:', res.data); // 👈 Add this
      setBlogs(res.data);
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleClose = () => {
    setShow(false);
    setIsEditing(false);
    setBlogData({ title: '', image: '', description: '', author: '', category: '' });
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await api.put(`/api/blogs/${blogData._id}`, blogData);
    } else {
      await api.post('/api/blogs', blogData);
    }
    handleClose();
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setBlogData(blog);
    setIsEditing(true);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await api.delete(`/api/blogs/${id}`);
      fetchBlogs();
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Blog Management</h2>
        <Button variant="primary" onClick={handleShow}>Add New Blog</Button>
      </div>
      <Table bordered hover responsive className="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>{blog.category}</td>
              <td dangerouslySetInnerHTML={{ __html: blog.description }}></td>
              <td>
                <img src={blog.image} alt={blog.title} style={{ height: '60px', objectFit: 'cover' }} />
              </td>
              <td>{new Date(blog.date).toLocaleDateString()}</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(blog)}>Edit</Button>
                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(blog._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Blog' : 'Create Blog'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={blogData.title}
                onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={blogData.author}
                onChange={(e) => setBlogData({ ...blogData, author: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='mx-2'>Upload Image (792 * 450) recommended </Form.Label>
              <ImageUpload onUpload={(url) => setBlogData({ ...blogData, image: url })} />
              {blogData.image && (
                <div className="mt-2">
                  <img src={blogData.image} alt="Uploaded Preview" style={{ height: '100px' }} />
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={blogData.category}
                onChange={(e) => setBlogData({ ...blogData, category: e.target.value })}
              />
            </Form.Group>

          {/*  <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <CKEditor
                editor={ClassicEditor}
                data={blogData.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  const plainText = getPlainTextFromHTML(data);
                  setBlogData({ ...blogData, description: plainText });
                }}
              />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={blogData.description}
                onChange={(e) => setBlogData({ ...blogData, description: e.target.value })}
              />
            </Form.Group>

            <Button type="submit" variant="success">{isEditing ? 'Update' : 'Create'}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Blogs;
