import React, { useEffect } from "react";
import Typed from "typed.js";
import InfoBogen from "../components/infoBogen/InfoBogen";

const UberUns = () => {

  useEffect(() => {
    // Typed.js konfigürasyonu
    const options = {
      strings: [
        "Harmonie",
      ],
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 1500,
      loop: true,
    };

    // Typed.js örneği oluşturma ve bağlama
    const typed = new Typed(".auto-input", options);

    // Komponent kaldırıldığında Typed örneğini temizleme
    return () => {
      typed.destroy();
    };
  }, []); // Boş bağımlılık dizisi, komponent ilk oluşturulduğunda yalnızca bir kez çalışmasını sağlar

  return (
    <section className="row d-flex justify-content-center text-center mt-5 mx-auto">
      <InfoBogen />
      <div className="col col-md-9">
        <h1>
          Wilkommen in{" "}
          <span className="text-success fw-semibold auto-input"></span>
        </h1>
        <p className="fs-5">
          Im Jahr 2023 wurde der Harmonie e.V. von engagierten ehrenamtlichen
          Bildungsmitarbeitern ins Leben gerufen. Anfangs konzentrierte sich der
          Verein auf Angebote, die den Interessen und Bedürfnissen seiner
          Mitglieder und deren Kinder entsprachen.
        </p>
        <p className="fs-5">
          In der Gründungsphase lag der Fokus vor allem auf kultureller und
          religiöser Bildung. Im Laufe der Zeit hat sich das Tätigkeitsspektrum
          des Harmonie entsprechend der Vielfalt der Interessen und des
          Integrationsprozesses der Mitglieder_innen erweitert.
        </p>
        <p className="fs-5">
          Neben Kultur und Religion liegt unser Augenmerk auch auf folgenden
          Themenbereichen:
        </p>
        <ul>
          <li className="fs-5 fw-semibold">Kinder- und Jugendarbeit</li>
          <li className="fs-5 fw-semibold">
            Dialog (Interkulturell, Interreligiös, Intrareligiös)
          </li>
          <li className="fs-5 fw-semibold">Lokale Projekte</li>
          <li className="fs-5 fw-semibold">Empowerment von Frauen</li>
          <li className="fs-5 fw-semibold">
            Empowerment von Menschen mit Fluchterfahrung
          </li>
        </ul>
        <p className="fs-5">
          Eine zentrale Aufgabe des Vereins besteht darin, Mitglieder_innen
          weiterzubilden, ihre Teilhabe an der Gesellschaft zu fördern und ihr
          soziales Engagement zu stärken.
        </p>
        <p className="fs-5">
          Das Harmonie leistet einen integrativen Beitrag zum nachhaltigen
          Frieden in der Gesellschaft, indem es sich mit Gemeinschaften des
          öffentlichen Rechts und anderen Gruppen, die sich auf das Grundgesetz
          berufen, engagiert.
        </p>
        <p className="fs-5">
          Wir setzen uns entschieden gegen jeglichen Extremismus und
          Radikalismus ein. Darüber hinaus fördern wir gezielt Begegnungen
          zwischen Menschen unterschiedlicher Generationen, Anschauungen,
          Religionen und Nationalitäten.
        </p>
        <p className="fs-5">
          Auf den folgenden Seiten finden Sie detaillierte Informationen zu
          unseren Tätigkeitsfeldern.
        </p>
      </div>
    </section>
  );
};

export default UberUns;
