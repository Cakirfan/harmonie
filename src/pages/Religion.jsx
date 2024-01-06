import React from 'react'
import Religiös from '../components/Religiös';

const Religion = () => {
  return (
    <div className="container">
      <section className="mb-5">
        <h1 className="text-center fw-semibold mt-5" style={{filter:"drop-shadow(0 0 10px #3d3d3d)"}}>Religion</h1>
        <hr className="border-3 shadow border-primary" />
        <div className="carousel slide my-md-3 religion-section text-white">
          <div className="carousel-inner kultur-praf p-md-5 p-2">
            <p className="mt-md-5">
              Unser Verein bietet eine Vielzahl von Angeboten für Muslime an, um
              ihr religiöses Wissen zu vertiefen. Ein zentraler Bestandteil
              dieser Angebote sind unsere Sohbetkreise, bei denen Gläubige
              zusammenkommen, gemeinsam lesen, ihre Meinungen austauschen und
              freie Gedanken formulieren. Die Teilnehmer werden ermutigt, sich
              intensiv mit der Materie auseinanderzusetzen und Antworten auf
              religiöse Fragen selbst zu finden.
            </p>
            <p>
              Vor der Corona-Pandemie fanden die Sohbets in gemütlicher
              Atmosphäre statt – entweder bei den Teilnehmern zu Hause, in
              studentischen Wohngemeinschaften oder im Harmonie. Sohbets wurden
              2010 als türkisches Weltkulturerbe anerkannt, ebenso wie die
              Semah-Tänze der Aleviten, das Newroz-Fest der Kurden oder die
              türkische Kaffeekultur. Eine solche religiöse Bildung nach
              prophetischer Tradition ermutigt dazu, den eigenen Glauben
              kritisch zu hinterfragen.
            </p>
            <p>
              Die engagierten Mitglieder unseres Vereins setzen sich für eine
              zeitgemäße Interpretation des Korans ein, stehen für die
              Vereinbarkeit von Demokratie und der islamischen Religion und
              lehnen jede Form von Extremismus und Menschenhass ab.
            </p>
            <p className="mb-md-5">
              In unseren Räumlichkeiten bieten wir religiöse Kurse und
              Ethikkurse für Kinder und Jugendliche an den Wochenenden an. Zudem
              finden Freitagsgebete im kleineren Kreis statt.
            </p>
          </div>
        </div>
        <hr className="border-3 shadow border-primary" />
      </section>

      <Religiös />
    </div>
  );
}

export default Religion
