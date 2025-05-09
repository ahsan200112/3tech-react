import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from '../../api/api';
import { getPackagesPricing, createPackagesPricing, updatePackagesPricing, deletePackagesPricing } from "../../api/apiEndpoints";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Form, Col, Row, Table, Modal } from "react-bootstrap";
import usePermission from '../../hooks/usePermission';

const Packages = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [show, setShow] = useState(false);
  // const [showDescription, setShowDescription] = useState(false);
  //const [fullDescription, setFullDescription] = useState('');
  const { t } = useTranslation();

  const { canCreate, canEdit, canDelete } = usePermission("Packages");

  const fetchPackages = async () => {
    try {
      const res = await api.get(getPackagesPricing);
      console.log('Fetched packages:', res.data); // 👈 Add this
      setPricingPlans(res.data);
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleAddOrEdit = async (plan) => {
    try {
      if (currentPlan) {
        await api.put(updatePackagesPricing(currentPlan._id), plan);
      } else {
        await api.post(createPackagesPricing, plan);
      }
      setCurrentPlan(null); // Reset form after submit
      setShow(false); // hide form
      await fetchPackages(); // Refresh the list of pricing plans
    } catch (error) {
      console.error("Error saving packages", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(deletePackagesPricing(id));
      await fetchPackages(); // Refresh the list after deletion
      window.location.reload(); // Reload the page (optional)
    } catch (error) {
      console.error("Error deleting packages", error);
    }
  };

  const handleShow = () => {
    setCurrentPlan(null); // reset for add mode
    setShow(true);
  };

  const handleEdit = (plan) => {
    setCurrentPlan(plan);
    setShow(true);
  };

  const handleClose = () => {
    setCurrentPlan(null);
    setShow(false);
  };

  const AddEditPricingForm = ({ onSubmit, currentPlan, onCancel }) => {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      monthlyPrice: "",
      // yearlyPrice: "",
      features: [{ text: "", available: false }],
    });

    useEffect(() => {
      if (currentPlan) {
        setFormData(currentPlan);
      }
    }, [currentPlan]);

    const handleFeatureChange = (index, field, value) => {
      const updatedFeatures = [...formData.features];
      updatedFeatures[index][field] = value;
      setFormData({ ...formData, features: updatedFeatures });
    };

    const addFeature = () => {
      setFormData({
        ...formData,
        features: [...formData.features, { text: "", available: false }],
      });
    };

    const removeFeature = (indexToRemove) => {
      const updatedFeatures = formData.features.filter((_, index) => index !== indexToRemove);
      setFormData({ ...formData, features: updatedFeatures });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>{t("Title")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Enter plan title")}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>{t("Monthly Price")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Enter monthly price")}
                value={formData.monthlyPrice}
                onChange={(e) => setFormData({ ...formData, monthlyPrice: e.target.value })}
                required
              />
            </Form.Group>

            {/*  <Form.Group as={Col}>
              <Form.Label>{t("Yearly Price (Per Month)")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("Enter yearly price")}
                value={formData.yearlyPrice}
                onChange={(e) => setFormData({ ...formData, yearlyPrice: e.target.value })}
                required
              />
            </Form.Group> */}
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>{t("Description")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={t("Enter description")}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </Form.Group>

          <div>
            <h5>{t("Features:")}</h5>
            {formData.features.map((feature, index) => (
              <Row className="mb-3" key={index}>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder={t("Enter Feature text")}
                    value={feature.text}
                    onChange={(e) => handleFeatureChange(index, "text", e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="checkbox"
                    label="Available"
                    checked={feature.available}
                    onChange={(e) =>
                      handleFeatureChange(index, "available", e.target.checked)
                    }
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFeature(index)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            ))}
            <Button variant="outline-primary" onClick={addFeature}>
              {t("Add Feature")}
            </Button>
          </div>

          <div className="form-actions mt-3">
            <Button variant="primary" type="submit">
              {currentPlan ? t("Update Plan") : t("Add Plan")}
            </Button>
            <Button variant="secondary" type="button" onClick={onCancel} className="ms-2">
              {t("Cancel")}
            </Button>
          </div>
        </Form>
      </div>
    );
  };


  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Packages Management</h2>
        {canCreate && (
          <Button variant="primary" onClick={handleShow}>Add New Package</Button>
        )}
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            {currentPlan ? "Edit Pricing Plan" : "Add New Pricing Plan"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddEditPricingForm
            onSubmit={(formData) => {
              handleAddOrEdit(formData);
            }}
            currentPlan={currentPlan}
            onCancel={handleClose}
          />
        </Modal.Body>
      </Modal>
      <div>
        <Table striped bordered hover responsive className="custom-table">
          <thead>
            <tr>
              <th>{t("Title")}</th>
              <th>{t("Description")}</th>
              <th>{t("Monthly Price")}</th>
              {/*<th>{t("Yearly Price (Per Month)")}</th> */}
              <th>{t("Features")}</th>
              <th>{t("Actions")}</th>
            </tr>
          </thead>
          <tbody>
            {pricingPlans.map((plan) => (
              <tr key={plan._id}>
                <td style={{ width: '150px' }}>{plan.title}</td>
                <td style={{ width: '360px' }}>
                  {plan.description}
                </td>
                {/*   <td style={{ width: '400px', position: 'relative' }}>
                  <div className="truncate-2-lines" dangerouslySetInnerHTML={{ __html: plan.description }}></div>
                  <FaEye
                    style={{
                      position: 'absolute',
                      bottom: '50px',
                      right: '4px',
                      cursor: 'pointer',
                      color: '#0d6efd'
                    }}
                    onClick={() => {
                      setFullDescription(plan.description);
                      setShowDescription(true);
                    }}
                    title="View full description"
                  />
                </td> */}
                <td style={{ width: '115px' }}>{plan.monthlyPrice}</td>
                {/*<td style={{ width: '100px' }}>{plan.yearlyPrice}</td> */}
                <td>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        {feature.text} - {feature.available ? "Yes" : "No"}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  {canEdit && (
                    <Button variant="outline-primary" size="sm" className="mx-1 my-1"
                      onClick={() => handleEdit(plan)}
                    >
                      <FaEdit />
                    </Button>
                  )}
                  {canDelete && (
                    <Button variant="outline-danger" size="sm" className="mx-1 my-1"
                      onClick={() => handleDelete(plan._id)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* View Full Description Modal */}
        {/*  <Modal show={showDescription} onHide={() => setShowDescription(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Full Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div dangerouslySetInnerHTML={{ __html: fullDescription }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDescription(false)}>Close</Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </div>
  );
};

export default Packages;
