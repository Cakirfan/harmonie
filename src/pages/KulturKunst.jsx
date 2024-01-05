import React from "react";
import Kulturell from "../components/Kulturell";

const KulturKunst = () => {
  return (
    <div className="container">
      <section className="mb-5">
        <h1 className="text-center fw-semibold mt-5"><span className="text-primary">Kultur</span> und <span className="text-success">Kunst</span></h1>
        <hr className="border-3 shadow border-primary" />
        <div className="row my-md-5">
          <main className="col-0 col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/18/23/42/flags-4415210_640.png"
              alt=""
              width={350}
              height={500}
            />
          </main>
          <article className="col-12 col-md-8 kultur-praf">
            <p>
              Der Grundpfeiler für ein harmonisches Miteinander liegt im Respekt
              gegenüber anderen Kulturen und Religionen, ohne dabei die eigene
              Herkunftskultur zu verleugnen. Dieser Respekt bildet einen
              bedeutenden Schritt zur Integration. Obwohl eine klare Grenze
              zwischen Kultur und Religion oft schwer zu ziehen ist, sollten
              Religion und Kultur nicht als identisch betrachtet werden.
            </p>
            <p>
              Im Bereich der kulturellen und künstlerischen Angebote werden
              verschiedene Kurse entsprechend den lokalen Bedürfnissen und
              Anforderungen organisiert. Dazu gehören Aktivitäten wie Ebru,
              Kalligraphie, Amigurumi sowie Kochkurse. Künstlerische Projekte
              werden mittlerweile im Rahmen von Projekten initiiert.
            </p>
            <p>
              Das Dokuha veranstaltet auch interkulturelle und kulturelle Events
              und beteiligt sich an Straßenfesten, idealerweise in
              Zusammenarbeit mit lokalen Partnern und inklusiv gestaltet. Vor
              der Corona-Pandemie fanden außerdem nationale und internationale
              Ausflüge und Exkursionen statt. Das Ziel dabei ist, sinnvolle
              Freizeitaktivitäten anzubieten und vielfältige Gruppen
              zusammenzubringen, um Begegnungen zu fördern.
            </p>
            <p>
              Das Angebot variiert je nach neuen Ideen und den Möglichkeiten
              ihrer Umsetzung. Jeder, unabhängig von Hintergrund oder
              Interessen, ist eingeladen, an den kulturellen und künstlerischen
              Aktivitäten teilzunehmen.
            </p>
          </article>
        </div>
        <hr className="border-3 shadow border-primary" />
      </section>

      <Kulturell />
    </div>
  );
};

export default KulturKunst;
