import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faGlobe,
  faHandsPraying,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faDyalog } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Themen = () => {
  const themen = [
    {
      name: "Kultur und Kunst",
      icon: (
        <FontAwesomeIcon
          className="fs-1"
          style={{ height: "5rem" }}
          icon={faPersonWalking}
        />
      ),
      href: "kulturundkunst",
    },
    {
      name: "Religion",
      icon: (
        <FontAwesomeIcon
          className="fs-1"
          style={{ height: "5rem" }}
          icon={faGlobe}
        />
      ),
      href: "/",
    },
    {
      name: "Dialog",
      icon: (
        <FontAwesomeIcon
          className="fs-1"
          style={{ height: "5rem" }}
          icon={faHandsPraying}
        />
      ),
      href: "/",
    },
    {
      name: "Jugendarbeit",
      icon: (
        <FontAwesomeIcon
          className="fs-1"
          style={{ height: "5rem" }}
          icon={faBookOpenReader}
        />
      ),
      href: "/",
    },
    {
      name: "Flüchtlingsarbeit",
      icon: (
        <FontAwesomeIcon
          className="fs-1"
          style={{ height: "5rem" }}
          icon={faDyalog}
        />
      ),
      href: "/",
    },
  ];

  return (
    <div className="container-fluid py-3">
      <div className="row w-75 mx-auto">
        <div className="col d-flex flex-wrap align-content-center justify-content-evenly">
          {themen.map((thema, i) => (
            <Link
              to={thema.href}
              key={i}
              className="themen-link bg-success rounded-4 text-decoration-none mb-4 shadow"
              style={{ height: "14.4rem" }}
            >
              <div
                className="themen-content bg-secondary-subtle text-center py-3 rounded-4 shadow"
                style={{ height: "14rem", width: "12rem" }}
              >
                <div className="themen-icon text-success py-3 pb-4">{thema.icon}</div>
                <div className="">
                  <h2 className="themen-text text-success fs-5">{thema.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themen;
