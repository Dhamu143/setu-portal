"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <a className="nav-logo" href="#">
        <span className="om">ॐ</span> SANATAN
      </a>
      <ul className="nav-links">
        <li><a href="#offerings">Offerings</a></li>
        <li><a href="#showcase">Experience</a></li>
        <li><a href="#deities">Deities</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>
      <button className="nav-btn" onClick={() => scrollTo("cta")}>
        Download Free
      </button>
    </nav>
  );
}