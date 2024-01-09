import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/img/logo-harmonie.jpeg";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const sozialIcons = [
    {
      href: "/",
      icon: <FaFacebookF />,
    },
    {
      href: "/",
      icon: <FaInstagram />,
    },
    {
      href: "/",
      icon: <FaTwitter />,
    },
    {
      href: "/",
      icon: <FaLinkedin />,
    },
  ];

  const themen = [
    {
      name: "Kultur und Kunst",
      href: "kulturundkunst",
    },
    {
      name: "Religion",
      href: "religion",
    },
    {
      name: "Dialog",
      href: "/",
    },
    {
      name: "Jugendarbeit",
      href: "/",
    },
    {
      name: "Flüchtlingsarbeit",
      href: "/",
    },
  ];

  const projekte = [
    {
      name: "Stark gegen MF",
      href: "/",
    },
    {
      name: "MIA",
      href: "/",
    },
    {
      name: "FIT",
      href: "/",
    },
    {
      name: "An(ge)kommen",
      href: "/",
    },
    {
      name: "Kinderlesekreis",
      href: "/",
    },
  ];

  return (
    <section
      className="container-fluid bg-warning text-white"
      style={{ marginTop: "5rem" }}
    >
      <div>
        <div className="row mb-3 py-2">
          <div className="col text-dark text-end fs-2 mb-3 mt-4 mt-md-2">
            Kontaktieren Sie uns per{" "}
            <FontAwesomeIcon
              className="fs-1 ms-3"
              style={{ height: "2rem" }}
              icon={faHandPointRight}
            />
          </div>
          <div className="col mt-4 mt-md-2 py-2">
            {sozialIcons.map((icon, i) => (
              <Link key={i} to={icon.href}>
                <button
                  type="button"
                  className="btn btn-outline-danger mx-2 mx-md-2"
                >
                  {icon.icon}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div
          className="row bg-dark px-3 py-3 text-white text-center"
          style={{ marginTop: "-.96rem" }}
        >
          <div className="col lh-1">
            <img className="rounded-2" src={logo} width={150} alt="" />
            <p className="fs-4 mt-2">Harmonie e.V.</p>
            <p className="fs-5">Zufuhrstraße 2, 41462 Neuss</p>
            <p className="fs-5">info@harmonie.de</p>
            <p className="fs-5">+49 (111) 11 11 11 11</p>
          </div>
          <div className="col text-start d-flex flex-column justify-content-center">
            <div className="row mt-3 mt-md-4">
              <div className="col-12 d-flex gap-2 gap-md-5">
                <span>Aktuelles</span>
                <span>Archiv</span>
                <Link
                  to="impressum"
                  className="list-group-item text-decoration-none"
                >
                  Impressum
                </Link>
                <span>Datenschutzerklärung</span>
              </div>
              <div className="col-12 d-flex flex-wrap gap-md-5 flex-md-nowrap">
                <ul className="mt-4 mt-md-5 lh-2 text-decoration-none">
                  <h2>Themen</h2>
                  {themen.map((thema, i) => (
                    <li key={i}>
                      <Link
                        to={thema.href}
                        className="list-group-item text-decoration-none"
                      >
                        <FaArrowRight className="me-2" />
                        {thema.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 mt-md-5 lh-2 text-decoration-none">
                  <h2>Projekte</h2>
                  {projekte.map((projekt, i) => (
                    <li key={i}>
                      <Link
                        to={projekt.href}
                        className="list-group-item text-decoration-none"
                      >
                        <FaArrowRight className="me-2" />
                        {projekt.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
