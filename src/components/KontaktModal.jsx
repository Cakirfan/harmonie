import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function KontaktModal({ show, handleClose }) {
  const [formData, setFormData] = useState([]);
  const handleChange = () => {};

  return (
    <>
      <Modal show={show} onHide={handleClose} className="border border-warning">
        <Modal.Header closeButton className="bg-warning border border-danger">
          <Modal.Title className=" text-dark fw-semibold fs-2">
            Kontaktformular
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-danger-subtle border border-danger">
          <p className="text-start fw-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, maxime inventore blanditiis laboriosam ducimus magnam.
            Excepturi, dolorum? Exercitationem, nihil debitis?
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="form-control"
                required
              />
              <Form.Control
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Telefon"
                className="form-control mt-3"
                required
              />
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@beispiel.com"
                className="form-control mt-3"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                id="nachricht"
                rows={3}
                placeholder="Nachricht"
                type="textarea"
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="ms-4">
              <Form.Check className="" aria-label="option 1" />
              <p className="text-start fw-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae, natus!
              </p>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-warning border border-danger">
          <Button variant="secondary" onClick={handleClose}>
            Schließen
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Senden
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default KontaktModal;
