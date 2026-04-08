"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function VIPSection() {
  const { language } = useLanguage();
  const t = translations[language].vip;
  const tDeities = translations[language].deities;
  const vipItemsTexts = translations[language].vipItems;
  const deitiesTexts = translations[language].deityList;
  const tPhone = translations[language].phone;

  const vipIcons = ["🔊", "🌐", "📴", "🔔"];
  const sfItems = vipItemsTexts.map((item, index) => ({
    ...item,
    icon: vipIcons[index],
  }));

  const deityEmojis = [
    "🙏",
    "🦚",
    "🌸",
    "🐘",
    "🌺",
    "🌞",
    "🐒",
    "🦢",
    "☀️",
    "🌊",
  ];
  const deities = deitiesTexts.map((item, index) => ({
    ...item,
    emoji: deityEmojis[index],
  }));

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
                    <div className="phone-header">{tPhone.today}</div>
                    <div className="phone-mantra">
                      "{tPhone.mantra}"<br />
                      <span
                        style={{
                          fontSize: "0.6rem",
                          color: "var(--text-soft)",
                          fontFamily: '"Lato", sans-serif',
                          fontWeight: 300,
                        }}
                      >
                        Om Namah Shivaya
                      </span>
                    </div>
                    <div className="phone-card">
                      <span className="phone-card-icon">🪔</span>
                      <div>
                        <div className="phone-card-text">{tPhone.morning}</div>
                        <div className="phone-card-sub">Shiv Aarti · 4 min</div>
                      </div>
                    </div>
                    <div className="phone-card">
                      <span className="phone-card-icon">🎵</span>
                      <div>
                        <div className="phone-card-text">{tPhone.hanuman}</div>
                        <div className="phone-card-sub">
                          Gulshan Kumar · 8 min
                        </div>
                      </div>
                    </div>
                    <div className="phone-card">
                      <span className="phone-card-icon">🌟</span>
                      <div>
                        <div className="phone-card-text">{tPhone.rashifal}</div>
                        <div className="phone-card-sub">Mesh · Auspicious</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-features">
            <div className="reveal visible">
              <span className="section-label">{t.label}</span>
              <h2 className="section-title">
                {t.title}
                <br />
                <span>{t.highlight}</span>
              </h2>
              <p className="section-sub">{t.sub}</p>
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
        <div
          style={{
            textAlign: "center",
            marginBottom: "44px",
            padding: "0 64px",
          }}
          className="reveal visible"
        >
          <span className="section-label">{tDeities.label}</span>
          <h2 className="section-title">
            {tDeities.title} <span>{tDeities.highlight}</span>
          </h2>
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
