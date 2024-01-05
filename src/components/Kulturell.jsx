import React from "react";
import { kulturData } from "../helper/data";

const Kulturell = () => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {kulturData.map((item) => (
        <div className="col" key={item.id}>
          <div class="card custom-card overflow-hidden pointer-event">
            <img src={item.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center fw-semibold">{item.titel}</h5>
              <p class="card-text">{item.desc}</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">
                Zuletzt aktualisiert vor {item.time} Minuten
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kulturell;
