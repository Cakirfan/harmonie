import React from "react";
import load from "../assets/img/loading.gif";

const Impressum = () => {
  return (
    <section className="container mt-5 text-center">
      <div>
        <h1 className="mb-3">Impressum </h1>
        <h5>Harmonie e.V.</h5>
      </div>
      <div className="text-center">
        <img src={load} alt="loading" width={750} />
      </div>
    </section>
  );
};

export default Impressum;
