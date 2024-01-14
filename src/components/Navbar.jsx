import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo-harmonie.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  const handleMenuItemClick = () => {
    // Close the navbar when a menu item is clicked
    closeNavbar();
  };

  const menuItems = [
    { name: "Startseite", path: "/" },
    {
      name: "Wer Wir Sind",
      subTitel: [
        { titel: "Über Uns", path: "/uberUns" },
        { titel: "Vorstand", path: "/vorstand" },
        { titel: "Mitgliedsantrage", path: "/mAntrag" },
        { titel: "Impressum", path: "/impressum" },
      ],
    },
    {
      name: "Themen",
      subTitel: [
        { titel: "Kultur und Kunst", path: "/kulturundkunst" },
        { titel: "Religion", path: "/religion" },
        { titel: "Dialog", path: "/dialog" },
        { titel: "Jugendarbeit", path: "/jugendarbeit" },
        { titel: "Flüchtlingsarbeit", path: "/flüchtlingsarbeit" },
      ],
    },
    {
      name: "Projekte",
      subTitel: [
        { titel: "Stark gegen MF", path: "/starkGegenMF" },
        { titel: "MIA", path: "/mia" },
        { titel: "FIT", path: "/fit" },
        { titel: "An(ge)kommen", path: "/angekommen" },
        { titel: "Kinderlesekreis", path: "/kinderLeseKreis" },
      ],
    },
    {
      name: "Veranstaltungen",
      subTitel: [
        { titel: "Aktuelles", path: "/aktuelles" },
        { titel: "Archiv", path: "/archiv" },
      ],
    },
    { name: "Kontakt", path: "/kontakt" },
  ];

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the clicked element is outside the navbar
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    // Add click event listener to the window
    window.addEventListener("click", handleOutsideClick);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <nav
        ref={navbarRef}
        className="navbar navbar-expand-lg fixed-top border-bottom border-5 border-white"
      >
        <div className="container">
          <button
            className="navbar-toggler bg-white ms-2 shadow-lg border-3 border-success"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img
              src={logo}
              alt="Logo-Harmonie"
              width={60}
              className="rounded-2"
            />
          </Link>
          <div
            className={`collapse navbar-collapse rounded-2 ${
              isNavbarOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItems.map((item, i) => (
                <li
                  className="nav-item text-white dropdown ms-3"
                  key={i}
                  onClick={
                    item.name === "Startseite" || item.name === "Kontakt"
                      ? handleMenuItemClick
                      : undefined
                  }
                >
                  {item.subTitel ? (
                    <>
                      <button
                        className="btn text-white nav-item dropdown-toggle"
                        id={`dropdownMenu${i}`}
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.name}
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-primary"
                        aria-labelledby={`dropdownMenu${i}`}
                      >
                        {item.subTitel.map((sub, j) => (
                          <li key={j} onClick={handleMenuItemClick}>
                            <Link className="dropdown-item" to={sub.path}>
                              {sub.titel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link className="btn text-white nav-item" to={item.path}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Geben Sie den Text"
                aria-label="Search"
              />
              <button
                className="btn text-white btn-outline-success"
                type="submit"
              >
                Suchen
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div style={{ height: "91px" }} onClick={closeNavbar}></div>
    </>
  );
};

export default Navbar;
