import React, { useEffect } from "react";
import Typed from "typed.js";

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
      <div className="col col-md-9">
        <h1>
          Wilkommen in{" "}
          <span className="text-success fw-semibold auto-input"></span>
        </h1>
        <p className="fs-5">
          Das hormonie e.V. wurde 2023 von Engagierten der Hizmet Bewegung
          gegründet. Der Verein hat sich zunächst auf Angebote entsprechend der
          Interessen und Bedürfnisse der eigenen Mitglieder und deren Kinder
          konzentriert.
        </p>
        <p className="fs-5">
          Daher standen in der Gründungsphase vor allem die kulturelle und
          religiöse Bildung im Fokus. Mittlerweile hat sich das Spektrum der
          Tätigkeitsfelder des Dokuha entsprechend der Interessenvielfalt und
          des Integrationsprozesses der Mitglieder_innen erweitert.
        </p>
        <p className="fs-5">
          Neben der Kultur und Religion fokussieren wir uns ebenso auf folgende
          Themenbereiche:
        </p>
        <p className="fs-5 fw-semibold">
          Kinder und Jugendarbeit Dialog (Interkulturell, Interreligiös,
          Intrareligiös) Lokale Projekte Empowerment von Frauen Empowerment von
          Menschen mit Fluchterfahrung
        </p>
        <p className="fs-5">
          Eine Hauptaufgabe des Vereins liegt darin Mitglieder_innen
          weiterzubilden, Ihre Teilhabe an der Gesellschaft und Ihr soziales
          Engagement zu fördern.
        </p>
        <p className="fs-5">
          Das Dokuha leistet einen integrativen Beitrag zum nachhaltigen Frieden
          in der Gesellschaft mit den Gemeinschaften des öffentlichen Rechts und
          anderen Gruppen, welche sich auf das Grundgesetz berufen.
        </p>
        <p className="fs-5">
          Wir setzen Uns gegen jedweden Extremismus und Radikalismus ein und
          fördern gezielt die Begegnungen zwischen Menschen unterschiedlicher
          Generationen, Anschauungen, Religionen und Nationalitäten.
        </p>
        <p className="fs-5">
          In den nachfolgenden Seiten finden sie nähere Informationen zu unseren
          Tätigkeitsfeldern.
        </p>
      </div>
    </section>
  );
};

export default UberUns;
