import React from 'react'
import load from "../../assets/img/loading.gif";

const Archiv = () => {
  return (
    <div className="d-flex flex-column align-content-center justify-content-center">
      <h1 className="text-center">Archiv</h1>
      <div className="text-center">
        <img src={load} alt="loading" width={750} />
      </div>
    </div>
  );
}

export default Archiv
