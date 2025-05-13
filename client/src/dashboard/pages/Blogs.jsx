import React, { useEffect, useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import api from '../../api/api';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../api/apiEndpoints';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import usePermission from '../../hooks/usePermission';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showFullModal, setShowFullModal] = useState(false);
  const [blogData, setBlogData] = useState({
    title: { en: '', ar: '' },
    image: null,
    description: { en: '', ar: '' },
    author: { en: '', ar: '' },
    category: { en: '', ar: '' }
  });

  const { canCreate, canEdit, canDelete } = usePermission("Blogs");

  const fetchBlogs = async () => {
    try {
      const res = await api.get(getBlogs);
      //console.log('Fetched blogs:', res.data); // 👈 Add this
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
    setBlogData({ title: { en: '', ar: '' }, image: "", description: { en: '', ar: '' }, author: { en: '', ar: '' }, category: { en: '', ar: '' } });
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title[en]', blogData.title.en);
    formData.append('title[ar]', blogData.title.ar);
    formData.append('description[en]', blogData.description.en);
    formData.append('description[ar]', blogData.description.ar);
    formData.append('author[en]', blogData.author.en);
    formData.append('author[ar]', blogData.author.ar);
    formData.append('category[en]', blogData.category.en);
    formData.append('category[ar]', blogData.category.ar);
    formData.append('image', blogData.image); // 👈 file append

    if (isEditing) {
      await api.put(updateBlog(blogData._id), formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } else {
      await api.post(createBlog, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }
    handleClose();
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setBlogData(
      {
        title: { en: blog.title.en, ar: blog.title.ar },
        description: { en: blog.description.en, ar: blog.description.ar },
        author: { en: blog.author.en, ar: blog.author.ar },
        category: { en: blog.category.en, ar: blog.category.ar },
        image: blog.image,
        _id: blog._id
      }
    );
    setIsEditing(true);
    handleShow();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await api.delete(deleteBlog(id));
      fetchBlogs();
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Blog Management</h2>
        {canCreate && (
          <Button variant="primary" onClick={handleShow}>Add New Blog</Button>
        )}
      </div>

      <Table bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>Title (English)</th>
            <th>Title (Arabic)</th>
            {/*  <th>Description (English)</th>
            <th>Description (Arabic)</th> */}
            <th>Image</th>
            {/*  <th>Author (English)</th>
            <th>Author (Arabic)</th> 
            <th>Category (English)</th> */}
            <th>Category (Arabic)</th>
           {/* <th>Date</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog._id}>
              <td>{blog.title.en}</td>
              <td>{blog.title.ar}</td>
              {/*<td style={{ width: '400px' }}
                dangerouslySetInnerHTML={{ __html: blog.description }}></td> */}
              {/*  <td style={{ width: '200px', position: 'relative' }}>
                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: blog.description.en }}></div>
              </td>
              <td style={{ width: '200px', position: 'relative' }}>
                <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: blog.description.ar }}></div>
              </td> */}
              <td className="table-image-cell">
                <img src={blog.image} alt={blog.title.ar} style={{ height: '60px', objectFit: 'cover' }} />
              </td>
              {/*  <td style={{ width: '50px' }}>{blog.author.en}</td>
              <td style={{ width: '50px' }}>{blog.author.ar}</td> 
              <td>{blog.category.en}</td> */}
              <td>{blog.category.ar}</td>
            {/*  <td>{blog.date ? new Date(blog.date).toLocaleDateString() : '-'}</td> */}
              <td style={{width:"150px"}}>
                <Button variant="outline-success" size="sm" className="mx-1 my-1"
                  onClick={() => {
                    setBlogData(blog);
                    setShowFullModal(true);
                  }}>
                  <FaEye />
                </Button>
                {canEdit && (
                  <Button variant="outline-primary" size="sm" className="mx-1 my-1" onClick={() => handleEdit(blog)}><FaEdit /></Button>
                )}
                {canDelete && (
                  <Button variant="outline-danger" size="sm" className="mx-1 my-1" onClick={() => handleDelete(blog._id)}><FaTrash /></Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Full view modal for details */}
      <Modal
        show={showFullModal}
        onHide={() => setShowFullModal(false)}
        size="lg"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>📰 Blog Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <strong className="text-primary">📅 Date:</strong>{' '}
            {blogData?.date ? new Date(blogData.date).toLocaleDateString() : '—'}
          </div>

          <div className="row">
            <div className="col-md-6 mb-2">
              <strong>📝 Title (EN):</strong> {blogData?.title?.en}
            </div>
            <div className="col-md-6 mb-2">
              <strong>📝 Title (AR):</strong> {blogData?.title?.ar}
            </div>

            <div className="col-md-6 mb-2">
              <strong>👤 Author (EN):</strong> {blogData?.author?.en}
            </div>
            <div className="col-md-6 mb-2">
              <strong>👤 Author (AR):</strong> {blogData?.author?.ar}
            </div>

            <div className="col-md-6 mb-2">
              <strong>📂 Category (EN):</strong> {blogData?.category?.en}
            </div>
            <div className="col-md-6 mb-2">
              <strong>📂 Category (AR):</strong> {blogData?.category?.ar}
            </div>
          </div>

          <hr />

          <div className="mb-3">
            <strong>📝 Description (EN):</strong>
            <div
              className="border rounded p-2 mt-1"
              style={{ backgroundColor: "#f9f9f9" }}
              dangerouslySetInnerHTML={{ __html: blogData?.description?.en }}
            />
          </div>

          <div className="mb-3">
            <strong>📝 Description (AR):</strong>
            <div
              className="border rounded p-2 mt-1"
              style={{ backgroundColor: "#f9f9f9" }}
              dangerouslySetInnerHTML={{ __html: blogData?.description?.ar }}
            />
          </div>

          {blogData.image && (
            <div>
              <strong>🖼️ Blog Image:</strong>
              <div className="mt-2">
                <img
                  src={blogData.image}
                  alt="Blog"
                />
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFullModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Blog' : 'Create Blog'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title (English)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.title.en}
                onChange={(e) => setBlogData({ ...blogData, title: { ...blogData.title, en: e.target.value } })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title (Arabic)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.title.ar}
                onChange={(e) => setBlogData({ ...blogData, title: { ...blogData.title, ar: e.target.value } })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description (English)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.description.en}
                onChange={(e) => setBlogData({ ...blogData, description: { ...blogData.description, en: e.target.value } })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description (Arabic)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.description.ar}
                onChange={(e) => setBlogData({ ...blogData, description: { ...blogData.description, ar: e.target.value } })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='mx-2'>Upload Image (792 * 450 recommended webp format)</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setBlogData({ ...blogData, image: e.target.files[0] })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author Name (English)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.author.en}
                onChange={(e) => setBlogData({ ...blogData, author: { ...blogData.author, en: e.target.value } })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author Name (Arabic)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.author.ar}
                onChange={(e) => setBlogData({ ...blogData, author: { ...blogData.author, ar: e.target.value } })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category (English)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.category.en}
                onChange={(e) => setBlogData({ ...blogData, category: { ...blogData.category, en: e.target.value } })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category (Arabic)</Form.Label>
              <Form.Control
                type="text"
                value={blogData.category.ar}
                onChange={(e) => setBlogData({ ...blogData, category: { ...blogData.category, ar: e.target.value } })}
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
