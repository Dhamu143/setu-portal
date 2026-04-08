"use client";

export default function Features() {
  const offerings = [
    { icon: "🕉️", title: "Mantras", desc: "108+ sacred mantras with Sanskrit text, transliteration and meaning. Listen, read and chant along." },
    { icon: "🎵", title: "Bhajans", desc: "Thousands of devotional bhajans and kirtans from all traditions — Vaishnav, Shaiva, Shakta and more." },
    { icon: "🪔", title: "Aarti", desc: "Complete aarti collection for all deities with lyrics, audio and step-by-step puja vidhi guidance." },
    { icon: "📿", title: "Chalisa", desc: "Hanuman, Durga, Lakshmi, Shiva Chalisa and more — with line-by-line Hindi and English meaning." },
    { icon: "🏛️", title: "Temples", desc: "Explore famous temples across India — history, darshan timings, significance and travel information." },
    { icon: "🌟", title: "Horoscope", desc: "Daily, weekly and monthly rashifal for all 12 zodiac signs with Vedic astrology insights." },
    { icon: "📜", title: "Slokas", desc: "Sacred shlokas from Bhagavad Gita, Vedas, Upanishads with detailed commentary and meaning." },
    { icon: "📰", title: "Dharma News", desc: "Latest news from the Hindu world — festivals, temple events, spiritual discourses and more." },
    { icon: "📅", title: "Panchang", desc: "Daily Hindu calendar with tithi, nakshatra, yoga, muhurat and auspicious timings for every occasion." },
  ];

  return (
    <section id="offerings">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal visible">
          <span className="section-label">✦ Sacred Collection</span>
          <h2 className="section-title">
            Our Divine <span>Offerings</span>
          </h2>
          <p className="section-sub">
            Everything you need for your daily spiritual practice, curated with
            devotion and reverence.
          </p>
        </div>
        <div className="offerings-grid">
          {offerings.map((item, i) => (
            <div className="offering-card reveal visible" key={i}>
              <div className="card-icon">{item.icon}</div>
              <div className="card-title">{item.title}</div>
              <div className="card-desc">{item.desc}</div>
              <div className="card-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}