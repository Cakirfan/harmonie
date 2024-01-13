import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { IoOpenOutline } from "react-icons/io5";
import DatenSchutzModal from "./DatenSchutzModal";

function KontaktModal({ show, handleClose }) {
  const [formData, setFormData] = useState([]);
  const handleChange = () => {};

  const [showd, setShowd] = useState(false);
  const handleClosed = () => setShowd(false);
  const handleShowd = () => setShowd(true);

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
            Fühlen Sie sich frei uns zu kontaktieren! Mit diesem Formular können
            Sie uns Ihre Fragen, Anregungen oder Feedback zukommen lassen.
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

              <p className="text-start">
                Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich
                stimme zu, dass meine Angaben zur Kontaktaufnahme und für
                Rückfragen gespeichert werden.
                <span className="" onClick={handleShowd}>
                  <IoOpenOutline className="ms-1 text-primary" />
                </span>
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
      <DatenSchutzModal showd={showd} handleClosed={handleClosed} />
    </>
  );
}

export default KontaktModal;
