import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LucideIcon } from "lucide-react";

type Accent = "saffron" | "gold" | "earth" | "leaf";

export interface InfoSection {
  id: string;
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  accent?: Accent;
  paragraphs: string[];
  bullets?: string[];
}

export interface InfoPanel {
  title: string;
  text: string;
  icon: LucideIcon;
  accent?: Accent;
  href?: string;
  linkLabel?: string;
}

export interface InfoSidebarCard {
  eyebrow: string;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface InfoOutro {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

interface InfoPageProps {
  badge: string;
  title: string;
  description: string;
  highlights?: string[];
  panels?: InfoPanel[];
  sections: InfoSection[];
  sidebarCards?: InfoSidebarCard[];
  outro?: InfoOutro;
}

function AccentIcon({
  icon: Icon,
  accent = "saffron",
}: {
  icon: LucideIcon;
  accent?: Accent;
}) {
  return (
    <div className="info-icon" data-accent={accent}>
      <Icon size={22} />
    </div>
  );
}

export default function InfoPage({
  badge,
  title,
  description,
  highlights = [],
  panels = [],
  sections,
  sidebarCards = [],
  outro,
}: InfoPageProps) {
  return (
    <>
      <Navbar />
      <main className="info-page">
        <div className="info-page-shell">
          <header className="info-hero">
            <div className="info-badge">{badge}</div>
            <h1 className="info-title">{title}</h1>
            <p className="info-description">{description}</p>

            {highlights.length > 0 && (
              <div className="info-highlight-list">
                {highlights.map((item) => (
                  <span key={item} className="info-highlight-pill">
                    {item}
                  </span>
                ))}
              </div>
            )}

            {panels.length > 0 && (
              <div className="info-panel-grid">
                {panels.map((panel) => (
                  <article key={panel.title} className="info-panel">
                    <AccentIcon icon={panel.icon} accent={panel.accent} />
                    <h2 className="info-panel-title">{panel.title}</h2>
                    <p className="info-panel-text">{panel.text}</p>
                    {panel.href && panel.linkLabel && (
                      <a className="info-inline-link" href={panel.href}>
                        {panel.linkLabel}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
          </header>

          <div className="info-layout">
            <aside className="info-sidebar">
              <div className="info-sidebar-card">
                <p className="info-sidebar-eyebrow">On this page</p>
                <div className="info-sidebar-links">
                  {sections.map((section, index) => (
                    <a key={section.id} href={`#${section.id}`}>
                      <span>{`0${index + 1}`.slice(-2)}</span>
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>

              {sidebarCards.map((card) => (
                <div
                  key={card.title}
                  className="info-sidebar-card info-sidebar-card-secondary"
                >
                  <p className="info-sidebar-eyebrow">{card.eyebrow}</p>
                  <h2 className="info-sidebar-title">{card.title}</h2>
                  <p className="info-sidebar-text">{card.text}</p>
                  {card.href && card.linkLabel && (
                    <a className="info-inline-link" href={card.href}>
                      {card.linkLabel}
                    </a>
                  )}
                </div>
              ))}
            </aside>

            <div className="info-main">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="info-card"
                >
                  <div className="info-card-header">
                    <AccentIcon icon={section.icon} accent={section.accent} />
                    <div>
                      <p className="info-card-eyebrow">{section.eyebrow}</p>
                      <h2 className="info-card-title">{section.title}</h2>
                    </div>
                  </div>

                  <div className="info-richtext">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="info-list">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}

              {outro && (
                <div className="info-outro">
                  <p className="info-card-eyebrow">Stay Connected</p>
                  <h2 className="info-card-title">{outro.title}</h2>
                  <div className="info-richtext">
                    <p>{outro.text}</p>
                  </div>
                  {outro.href && outro.linkLabel && (
                    <a className="info-inline-link" href={outro.href}>
                      {outro.linkLabel}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
