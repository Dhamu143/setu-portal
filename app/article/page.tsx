"use client";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Zap, Wind, Droplets, Moon, Sparkles, BookOpen } from "lucide-react";
import StoreButtons from "@/components/StoreButtons";
// import StoreButtons from "./StoreButtons";

interface GodData {
    id: string;
    name: string;
    english: string;
    description: string;
    significance: string;
    mantra?: string;
    symbolism: string[];
    icon: React.ReactNode;
    imageUrl: string;
}

const godsData: GodData[] = [
    {
        id: "shiva",
        name: "शिव",
        english: "Lord Shiva",
        description:
            "The Supreme Being in Shaivism, Shiva is the destroyer of evil and transformer of the universe. Known as the Great Yogi, he represents the ultimate consciousness and cosmic energy. Shiva is often depicted in deep meditation, embodying asceticism and spiritual knowledge.",
        significance:
            "Shiva destroys ignorance and ego, leading to spiritual enlightenment. He is worshipped for liberation (Moksha) and is considered the supreme consciousness that pervades all existence.",
        mantra: "ॐ नमः शिवाय\nOm Namah Shivaya",
        symbolism: ["Meditation", "Asceticism", "Cosmic Destruction", "Renewal"],
        icon: <Moon size={32} strokeWidth={1.5} />,
        imageUrl: "/images/gods/shiva.webp", // Replace with your actual image path
    },
    {
        id: "brahma",
        name: "ब्रह्मा",
        english: "Lord Brahma",
        description:
            "The creator god in Hindu trinity (Trimurti), Brahma is responsible for creating the universe, all living beings, and the cosmic order. He is the originator of the Vedas and represents knowledge and creation.",
        significance:
            "Brahma represents the creative force of the universe and the divine intellect. He is revered for wisdom, knowledge, and the manifestation of all existence through cosmic imagination.",
        mantra: "ॐ ब्रह्मा नमः\nOm Brahma Namah",
        symbolism: ["Creation", "Knowledge", "Vedas", "Cosmos"],
        icon: <Zap size={32} strokeWidth={1.5} />,
        imageUrl: "/images/gods/brahma.webp",
    },
    {
        id: "vishnu",
        name: "विष्णु",
        english: "Lord Vishnu",
        description:
            "The sustainer and preserver of the universe in Hindu trinity. Vishnu maintains cosmic order and righteousness (Dharma). He is known for his avatars, including Rama and Krishna, who appear in different ages to protect humanity.",
        significance:
            "Vishnu ensures the stability and continuity of the universe. He protects his devotees and appears in various forms whenever evil threatens cosmic harmony. His grace is sought for protection and spiritual guidance.",
        mantra: "ॐ नमो भगवते वासुदेवाय\nOm Namo Bhagavate Vasudevaya",
        symbolism: ["Preservation", "Protection", "Dharma", "Compassion"],
        icon: <Heart size={32} strokeWidth={1.5} />,
        imageUrl: "/images/gods/vishnu.webp",
    },
    {
        id: "devi",
        name: "देवी",
        english: "Mother Goddess",
        description:
            "The divine feminine energy (Shakti) of the universe. Devi manifests in many forms - Saraswati (wisdom), Lakshmi (wealth), and Parvati (compassion). She is the primordial force that animates all creation and is worshipped as the supreme reality.",
        significance:
            "Devi represents the feminine divine power that sustains the cosmos. She is the embodiment of strength, fertility, prosperity, and wisdom. Devotees seek her blessings for growth, protection, and spiritual awakening.",
        mantra: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे\nOm Aim Hreem Kleem Chamundaye Viche",
        symbolism: ["Feminine Power", "Creation", "Prosperity", "Protection"],
        icon: <Wind size={32} strokeWidth={1.5} />,
        imageUrl: "/images/gods/devi.webp",
    },
    {
        id: "ganesha",
        name: "गणेश",
        english: "Lord Ganesha",
        description:
            "The remover of obstacles and the god of beginnings, Ganesha is worshipped at the start of new ventures. With his elephant head and distinctive form, he represents wisdom, intelligence, and prosperity. He is the beloved deity invoked first in all prayers.",
        significance:
            "Ganesha removes obstacles from the path of success and grants wisdom for making right decisions. He is revered as the patron of arts, sciences, and intellect. His blessings ensure smooth beginnings and successful endeavors.",
        mantra: "ॐ गं गणपतये नमः\nOm Gam Ganapataye Namaha",
        symbolism: ["Wisdom", "Prosperity", "Beginnings", "Obstacle Removal"],
        icon: <Droplets size={32} strokeWidth={1.5} />,
        imageUrl: "/images/gods/ganesha.webp",
    },
];

export default function ArticlePage() {
    const t = {
        title: "Experience the Divine",
        highlight: "Anywhere, Anytime",
        sub: "Get the complete collection of Aarti, Bhajans, and daily Panchang right in your pocket. Download the Setu Sanatan app today."
    };

    return (
        <>
            <Navbar />
            <main
                style={{
                    minHeight: "100vh",
                    backgroundColor: "var(--white)",
                    position: "relative",
                    overflowX: "hidden",
                }}
            >
                {/* Hero Section */}
                <section
                    style={{
                        paddingTop: "180px",
                        paddingBottom: "120px",
                        background: "linear-gradient(180deg, var(--white) 0%, rgba(255, 107, 0, 0.02) 100%)",
                        textAlign: "center",
                        paddingInline: "24px",
                    }}
                >
                    <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                            <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, transparent, var(--saffron))" }} />
                        </div>
                        <span
                            style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "0.9rem",
                                letterSpacing: "0.4em",
                                textTransform: "uppercase",
                                color: "var(--text-soft)",
                                marginBottom: "20px",
                                display: "block",
                                fontWeight: 600,
                            }}
                        >
                            The Divine Pantheon
                        </span>
                        <h1
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                                fontWeight: "bold",
                                color: "var(--text-dark)",
                                marginBottom: "32px",
                                lineHeight: 1.05,
                            }}
                        >
                            Indian <span style={{ color: "var(--saffron)" }}>Deities</span>
                        </h1>
                        <p style={{ fontSize: "1.15rem", color: "var(--text-mid)", maxWidth: "720px", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
                            Explore the profound wisdom and divine significance of major Hindu deities. Each represents specific cosmic forces guiding devotees toward enlightenment and dharma.
                        </p>
                    </div>
                </section>

                {/* Alternating Image + Content Section */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {godsData.map((god, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <section
                                key={god.id}
                                style={{
                                    width: "100%",
                                    backgroundColor: isEven ? "var(--white)" : "var(--off-white)",
                                    borderTop: "1px solid rgba(122, 53, 0, 0.03)",
                                    padding: "100px 24px",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                {/* Background Watermark */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: isEven ? "-2%" : "auto",
                                        right: !isEven ? "-2%" : "auto",
                                        transform: "translateY(-50%)",
                                        fontSize: "clamp(12rem, 25vw, 35rem)",
                                        color: "var(--saffron)",
                                        opacity: 0.02,
                                        fontFamily: "serif",
                                        pointerEvents: "none",
                                        userSelect: "none",
                                        whiteSpace: "nowrap",
                                        zIndex: 0,
                                        lineHeight: 1
                                    }}
                                >
                                    {god.name}
                                </div>

                                <div style={{
                                    maxWidth: "1300px",
                                    margin: "0 auto",
                                    display: "flex",
                                    flexDirection: isEven ? "row" : "row-reverse",
                                    alignItems: "center",
                                    gap: "clamp(40px, 8vw, 100px)",
                                    position: "relative",
                                    zIndex: 1,
                                    flexWrap: "wrap"
                                }}>

                                    {/* Image Side */}
                                    <div style={{
                                        flex: "1 1 400px",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                        <div style={{
                                            width: "100%",
                                            maxWidth: "500px",
                                            aspectRatio: "3/4",
                                            borderRadius: "24px",
                                            overflow: "hidden",
                                            boxShadow: "0 24px 50px rgba(58, 24, 0, 0.08)",
                                            border: "1px solid rgba(122, 53, 0, 0.06)",
                                            backgroundColor: "var(--off-white)", // Fallback color while loading
                                            position: "relative"
                                        }}>
                                            {/* Using standard img. If you prefer next/image, swap this out */}
                                            <img
                                                src={god.imageUrl}
                                                alt={god.english}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    display: "block"
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div style={{
                                        flex: "1 1 500px",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>

                                        {/* Header Area */}
                                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
                                            <div style={{
                                                width: "60px", height: "60px", borderRadius: "50%",
                                                border: "1px solid rgba(255, 107, 0, 0.2)",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                color: "var(--saffron)", background: "rgba(255, 107, 0, 0.03)",
                                                flexShrink: 0
                                            }}>
                                                {god.icon}
                                            </div>
                                            <div>
                                                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.85rem", letterSpacing: "0.2em", color: "var(--text-soft)", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                                                    {god.english}
                                                </span>
                                                <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(2.5rem, 4vw, 4rem)", color: "var(--text-dark)", margin: 0, lineHeight: 1 }}>
                                                    {god.name}
                                                </h2>
                                            </div>
                                        </div>

                                        <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.8, fontWeight: 300, marginBottom: "36px" }}>
                                            {god.description}
                                        </p>

                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px", marginBottom: "40px" }}>
                                            {/* Significance */}
                                            <div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                                                    <Sparkles size={16} color="var(--saffron)" />
                                                    <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                                                        Divine Significance
                                                    </h3>
                                                </div>
                                                <p style={{ fontSize: "0.95rem", color: "var(--text-mid)", lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                                                    {god.significance}
                                                </p>
                                            </div>

                                            {/* Symbolism */}
                                            <div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                                                    <BookOpen size={16} color="var(--saffron)" />
                                                    <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", fontWeight: "600", color: "var(--text-dark)", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                                                        Symbolism
                                                    </h3>
                                                </div>
                                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                                    {god.symbolism.map((symbol) => (
                                                        <span
                                                            key={symbol}
                                                            style={{
                                                                fontFamily: "'Cinzel', serif",
                                                                fontSize: "0.75rem",
                                                                letterSpacing: "0.05em",
                                                                textTransform: "uppercase",
                                                                background: "var(--white)",
                                                                color: "var(--text-mid)",
                                                                padding: "6px 14px",
                                                                borderRadius: "100px",
                                                                border: "1px solid rgba(122, 53, 0, 0.1)",
                                                            }}
                                                        >
                                                            {symbol}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mantra Box */}
                                        {god.mantra && (
                                            <div style={{
                                                padding: "24px 32px",
                                                borderRadius: "12px",
                                                border: "1px solid rgba(255, 107, 0, 0.1)",
                                                background: "rgba(255, 107, 0, 0.02)",
                                                position: "relative",
                                                overflow: "hidden"
                                            }}>
                                                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "3px", background: "var(--saffron)" }} />
                                                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "var(--saffron)", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "8px" }}>
                                                    Sacred Mantra
                                                </span>
                                                <p style={{ fontSize: "1.1rem", color: "var(--text-dark)", fontFamily: "serif", whiteSpace: "pre-line", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
                                                    {god.mantra}
                                                </p>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* Understanding the Pantheon Section */}
                <section style={{ padding: "120px 24px", background: "var(--white)", textAlign: "center", position: "relative" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div style={{ width: "60px", height: "2px", background: "var(--saffron)", margin: "0 auto 32px" }} />
                        <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--text-dark)", marginBottom: "32px", lineHeight: 1.2 }}>
                            Understanding the Hindu Pantheon
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--text-mid)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 300 }}>
                            <p>
                                Hindu philosophy recognizes one ultimate reality called Brahman, which manifests in various divine forms. These deities are not separate gods but different aspects and manifestations of the supreme consciousness.
                            </p>
                            <p>
                                Each deity represents cosmic principles and serves as a focal point for meditation, prayer, and spiritual practice. By worshipping these divine forms, devotees connect with the universal energies and principles they embody.
                            </p>
                        </div>
                    </div>
                </section>

                {/* DOWNLOAD CTA SECTION */}
                <section
                    id="cta"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        padding: "140px 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        background: "var(--off-white)",
                        borderTop: "1px solid rgba(122, 53, 0, 0.05)"
                    }}
                >
                    {/* Background Mandala */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: 0.03,
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    >
                        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
                            <circle cx="400" cy="400" r="350" stroke="var(--text-dark)" strokeWidth="1.5" />
                            <circle cx="400" cy="400" r="280" stroke="var(--text-dark)" strokeWidth="1" />
                            <circle cx="400" cy="400" r="210" stroke="var(--text-dark)" strokeWidth="1.5" />
                            <circle cx="400" cy="400" r="140" stroke="var(--text-dark)" strokeWidth="1" />
                            <line x1="50" y1="400" x2="750" y2="400" stroke="var(--text-dark)" strokeWidth="0.8" />
                            <line x1="400" y1="50" x2="400" y2="750" stroke="var(--text-dark)" strokeWidth="0.8" />
                            <line x1="152" y1="152" x2="648" y2="648" stroke="var(--text-dark)" strokeWidth="0.8" />
                            <line x1="648" y1="152" x2="152" y2="648" stroke="var(--text-dark)" strokeWidth="0.8" />
                        </svg>
                    </div>

                    <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
                        <div
                            className="om-circle"
                            style={{
                                width: "90px",
                                height: "90px",
                                margin: "0 auto 32px",
                                backgroundColor: "var(--white)",
                                border: "1px solid rgba(255, 107, 0, 0.2)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 14px 40px rgba(255, 107, 0, 0.08)",
                            }}
                        >
                            <span className="om-symbol" style={{ fontSize: "2.8rem", color: "var(--saffron)", lineHeight: 1 }}>
                                ॐ
                            </span>
                        </div>

                        <h2
                            className="cta-title"
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                                fontWeight: 700,
                                color: "var(--text-dark)",
                                lineHeight: 1.15,
                                marginBottom: "24px",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {t.title}
                            <br />
                            <span style={{ color: "var(--saffron)" }}>{t.highlight}</span>
                        </h2>

                        <p
                            className="cta-sub"
                            style={{
                                fontSize: "1.15rem",
                                color: "var(--text-mid)",
                                lineHeight: 1.7,
                                marginBottom: "48px",
                                padding: "0 20px",
                                fontWeight: 300,
                            }}
                        >
                            {t.sub}
                        </p>

                        <div className="cta-btns" style={{ display: "flex", justifyContent: "center" }}>
                            <StoreButtons />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}