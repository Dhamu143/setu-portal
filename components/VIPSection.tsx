"use client";

export default function VIPSection() {
  const sfItems = [
    { icon: "🔊", title: "High-Quality Audio", desc: "Crystal-clear audio for all bhajans, mantras and aartis — even offline, anytime, anywhere." },
    { icon: "🌐", title: "Multi-Language Support", desc: "Sanskrit, Hindi, Gujarati, Tamil, Telugu, Bengali — your language, your devotion." },
    { icon: "📴", title: "100% Offline Access", desc: "Download and access all sacred content without needing an internet connection." },
    { icon: "🔔", title: "Daily Divine Reminders", desc: "Wake up to morning mantras, get puja reminders and festival notifications automatically." },
  ];

  const deities = [
    { emoji: "🙏", name: "Lord Shiva", role: "Mahadev" },
    { emoji: "🦚", name: "Lord Krishna", role: "Yogeshwar" },
    { emoji: "🌸", name: "Goddess Lakshmi", role: "Shri Mata" },
    { emoji: "🐘", name: "Lord Ganesha", role: "Vighnaharta" },
    { emoji: "🌺", name: "Goddess Durga", role: "Adi Shakti" },
    { emoji: "🌞", name: "Lord Rama", role: "Maryada Purush" },
    { emoji: "🐒", name: "Lord Hanuman", role: "Bajrangbali" },
    { emoji: "🦢", name: "Goddess Saraswati", role: "Vani Mata" },
    { emoji: "☀️", name: "Lord Surya", role: "Surya Dev" },
    { emoji: "🌊", name: "Lord Vishnu", role: "Paalanhaar" },
  ];
  
  // Duplicate deities for scrolling track
  const allDeities = [...deities, ...deities];

  return (
    <>
      <section id="showcase">
        <div className="showcase-inner">
          <div className="phone-3d-wrap reveal visible">
            <div className="phone-scene">
              <div className="phone-glow-bg"></div>
              <div className="phone-3d">
                <div className="phone-screen">
                  <div className="phone-content">
                    <div className="phone-header">ॐ SANATAN — आज का दिन</div>
                    <div className="phone-mantra">
                      "ॐ नमः शिवाय"<br />
                      <span style={{ fontSize: "0.6rem", color: "var(--text-soft)", fontFamily: '"Lato", sans-serif', fontWeight: 300 }}>Om Namah Shivaya</span>
                    </div>
                    <div className="phone-card">
                      <span className="phone-card-icon">🪔</span>
                      <div>
                        <div className="phone-card-text">MORNING AARTI</div>
                        <div className="phone-card-sub">Shiv Aarti · 4 min</div>
                      </div>
                    </div>
                    <div className="phone-card">
                      <span className="phone-card-icon">🎵</span>
                      <div>
                        <div className="phone-card-text">HANUMAN CHALISA</div>
                        <div className="phone-card-sub">Gulshan Kumar · 8 min</div>
                      </div>
                    </div>
                    <div className="phone-card">
                      <span className="phone-card-icon">🌟</span>
                      <div>
                        <div className="phone-card-text">YOUR RASHIFAL</div>
                        <div className="phone-card-sub">Mesh · आज · Auspicious</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="showcase-features">
            <div className="reveal visible">
              <span className="section-label">✦ The Experience</span>
              <h2 className="section-title">
                Built for<br /><span>True Devotion</span>
              </h2>
              <p className="section-sub">
                A sacred digital space designed to bring you closer to the divine,
                every single day.
              </p>
            </div>
            {sfItems.map((item, i) => (
              <div className="sf-item reveal visible" key={i}>
                <span className="sf-icon">{item.icon}</span>
                <div>
                  <div className="sf-title">{item.title}</div>
                  <div className="sf-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deities">
        <div style={{ textAlign: "center", marginBottom: "44px", padding: "0 64px" }} className="reveal visible">
          <span className="section-label">✦ All Traditions</span>
          <h2 className="section-title">Beloved <span>Deities</span></h2>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="deities-track">
            {allDeities.map((item, i) => (
              <div className="deity-card" key={i}>
                <span className="deity-emoji">{item.emoji}</span>
                <div className="deity-name">{item.name}</div>
                <div className="deity-role">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}