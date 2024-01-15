import React from 'react'
import DialogCard from '../components/DialogCard';

const Dialog = () => {
  return (
    <div className="container">
      <section className="mb-5">
        <h1 className="text-center fw-semibold mt-5">
          Di{" "}
          <img
            src="https://cdn.pixabay.com/photo/2014/04/04/19/56/alphabet-313947_640.png"
            alt=""
            width={30}
            style={{marginLeft: "-.5rem", marginRight: "-.5rem"}}
          />{" "}
          log
        </h1>
        <hr className="border-3 shadow border-primary" />
        <div className="row my-md-5">
          <main className="col-12 col-md-4">
            <img
              className="rounded-2"
              src="https://cdn.pixabay.com/photo/2023/10/22/15/53/ai-generated-8334296_640.jpg"
              alt=""
              width={370}
              height={500}
            />
          </main>
          <article className="col-12 col-md-8 kultur-praf mt-4">
            <p>
              Neuss, seine Vielfalt ist die Quelle seiner Vitalität - Menschen
              unterschiedlicher Generationen, Kulturen und Religionen leben hier
              Tür an Tür. In einer Gesellschaft, die kulturell und religiös
              vielfältig ist, ist Dialog unerlässlich. Nur durch Dialog können
              gesellschaftliche Probleme wie Hass und Intoleranz überwunden
              werden.
            </p>
            <p>
              Ein respektvolles und friedliches Miteinander erfordert das
              gegenseitige Kennenlernen und einen unvoreingenommenen Blick in
              die Glaubens- und Gefühlswelt des Anderen. Dies kann oft mit einem
              gemeinsamen Tee- oder Kaffeetrinken oder einem Besuch in einer
              Kirche oder Synagoge beginnen.
            </p>
            <p>
              Kontinuität im Austausch und in den Begegnungen mit Dialogpartnern
              ist dabei entscheidend. Aktivitäten und Begegnungen zum Ramadan,
              Ostern und Weihnachten sind hierbei inbegriffen.
            </p>
            <p>
              Unser Verein engagiert sich aktiv für die Förderung dialogischer
              Kompetenzen seiner Mitglieder. Dazu gehören insbesondere die
              Vermittlung von Wissens- und Handlungskompetenzen.
            </p>
          </article>
        </div>
        <hr className="border-3 shadow border-primary" />
      </section>

      <DialogCard />
    </div>
  );
}

export default Dialog
