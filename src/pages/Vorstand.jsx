import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Vorstand = () => {
  return (
    <div className="container pt-5 px-5 pb-2">
      <h1 className="">Vorstand</h1>
      <div className="mx-auto">
        <div className="card p-5 shadow-lg bg-dark-subtle">
          <p className="fs-4 text-success fw-semibold">Unser Vorstand besteht aus:</p>
          <ul className="ms-5" style={{ maxWidth: "25rem" }}>
            <li className="d-flex gap-2">
              <FaHandPointRight className="text-success fs-3" />{" "}
              <span className="fs-5">Einem Vorsitzenden</span>{" "}
            </li>
            <li className="d-flex gap-2">
              <FaHandPointRight className="text-success fs-3" />{" "}
              <span className="fs-5">Einer stellvertretenden Vorsitzenden</span>
            </li>
            <li className="d-flex gap-2">
              <FaHandPointRight className="text-success fs-3" />{" "}
              <span className="fs-5">Einem Kassenwart</span>
            </li>
            <li className="d-flex gap-2">
              <FaHandPointRight className="text-success fs-3" />{" "}
              <span className="fs-5">Einem Schriftführer</span>
            </li>
            <li className="d-flex gap-2">
              <FaHandPointRight className="text-success fs-3" />{" "}
              <span className="fs-5">...... Beisitzer*innen</span>
            </li>
          </ul>
        </div>
        <p className="mt-5 fs-4 text-start">
          Für weitere Fragen und Auskünfte können Sie sich gerne an Uns wenden:
        </p>
        <p className="text-start fs-4">
          Vorstandsvorsitzender Joe Doe: <span className="fs-5 text-danger">joedue@harmonie.de</span>
        </p>
      </div>
    </div>
  );
};

export default Vorstand;
