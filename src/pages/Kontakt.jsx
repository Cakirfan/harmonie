import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Kontakt = () => {
  const socialIcons = [
    { href: "/", icon: <FaFacebookF /> },
    { href: "/", icon: <FaInstagram /> },
    { href: "/", icon: <FaTwitter /> },
    { href: "/", icon: <FaLinkedin /> },
  ];

  return (
    <section className="container mt-5">
      <div className="row d-flex">
        <div className="col-12 col-md-6">
          <div className="border rounded-2 overflow-hidden">
            <h6 className="bg-dark text-white py-2 px-3 w-100">KONTAKT</h6>
            <div className="py-2 px-3">
              <ContactInfo />
            </div>
          </div>{" "}
          <ContactDetails />
          <SocialIcons socialIcons={socialIcons} />
        </div>

        <div className="col-12 col-md-6">
          <ContactForm />
        </div>
      </div>
      <LocationMap />
    </section>
  );
};

const ContactInfo = () => (
  <section className="py-2">
    <p>
      <span className="fw-semibold">Adresse: </span>Zufuhrstraße 2, 41462 Neuss{" "}
    </p>
    <p>
      <span className="fw-semibold">E-mail: </span>info@harmonie.de{" "}
    </p>
    <p>
      <span className="fw-semibold">Telefon: </span>+49 (111) 11 11 11 11{" "}
    </p>
  </section>
);

const ContactDetails = () => (
  <div className="bg-dark text-white px-2 py-3 my-3 rounded-2">
    <p>
      Für Ihre Wünsche und Anregungen rufen Sie bitte unser Telefon an, senden
      Sie eine E-Mail oder füllen Sie das Formular aus.
    </p>
  </div>
);

const SocialIcons = ({ socialIcons }) => (
  <section className="rounded-2 overflow-hidden py-2 mb-2">
    <div className="bg-dark text-white p-2 pt-3">
      <p>
        Wir freuen uns auf jegliche Art der Kontaktaufnahme! Jede/r ist auf eine
        Tasse Kaffee/Tee eingeladen. Anfragen für Veranstaltungen, Kurse und
        Kooperationen sind besonders willkommen.
        <p>Wir freuen auf Sie!</p>
      </p>
    </div>

    <div className="bg-dark d-flex align-content-center justify-content-center gap-1 pb-3">
      {socialIcons.map((icon, index) => (
        <Link
          key={index}
          to={icon.href}
          className="text-decoration-none border rounded-circle d-inline-block"
          style={{
            width: "30px",
            height: "30px",
            transition: "background 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#fff";
          }}
        >
          <span className="d-flex align-items-center justify-content-center h-100">
            {icon.icon}
          </span>
        </Link>
      ))}
    </div>
  </section>
);

const ContactForm = () => (
  <div className="border rounded-2 overflow-hidden">
    <h6 className="bg-dark text-white py-2 px-3">
      LASSEN SIE UNS EINE NACHRICHT
    </h6>
    <div className="container py-4">
      <form id="contactForm">
        {/* <!-- Name input --> */}
        <div className="form-floating mb-3">
          <input
            className="form-control is-invalid"
            id="floatingInput"
            placeholder="name@example.com"
            type="text"
            data-sb-validations="required"
          />
          <label className="form-label" htmlFor="floatingInput">
            Vorname - Nachname
          </label>
        </div>

        {/* <!-- Email address input --> */}
        <div className="form-floating mb-3">
          <input
            className="form-control is-invalid"
            id="emailAddress"
            placeholder="E-Mail"
            type="email"
            data-sb-validations="required, email"
          />
          <label className="form-label" htmlFor="emailAddress">
            Email Addresse
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control is-invalid"
            id="telefon"
            placeholder="Telefon"
            type="tel"
            data-sb-validations="required, tel"
          />
          <label className="form-label" htmlFor="telefon">
            Telefon
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control is-invalid"
            id="betreff"
            placeholder="Betreff"
            type="text"
            data-sb-validations="required"
          />
          <label className="form-label" htmlFor="betreff">
            Betreff
          </label>
        </div>

        {/* <!-- Message input --> */}
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="floatingTextarea"
            type="text"
            placeholder="Message"
            data-sb-validations="required"
          ></textarea>
          <label className="form-label" htmlFor="floatingTextarea">
            Kommentar
          </label>
        </div>

        {/* <!-- Form submit button --> */}
        <div className="d-grid">
          <button className="btn btn-primary btn-lg" type="submit">
            Senden
          </button>
        </div>
      </form>
      ;
    </div>
  </div>
);

const LocationMap = () => (
  <div className="row mt-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.8076534643674!2d6.679911976864664!3d51.20419583280776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b451284ba49d%3A0x649ff65b4ee7e619!2sZufuhrstra%C3%9Fe%202%2C%2041462%20Neuss!5e0!3m2!1str!2sde!4v1704145305100!5m2!1str!2sde"
      width="600"
      height="450"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default Kontakt;
