"use client";

export default function Reviews() {
  const reviews = [
    { name: "Ramesh Patel", loc: "Ahmedabad, Gujarat", initial: "R", text: "This app has completely transformed my morning routine. I start every day with Hanuman Chalisa and it fills my heart with peace and strength." },
    { name: "Priya Sharma", loc: "Varanasi, Uttar Pradesh", initial: "P", text: "The offline feature is a blessing. I use it during travel to temples in remote areas. The audio quality of the bhajans is simply divine." },
    { name: "Suresh Nair", loc: "Thrissur, Kerala", initial: "S", text: "Best spiritual app I have ever used. The horoscope section is accurate and the Panchang helps me plan all religious events perfectly." },
  ];

  return (
    <section id="reviews">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">✦ Devotee Stories</span>
          <h2 className="section-title">
            Voices of <span>the Divine</span>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Millions of devotees have found peace, connection and daily
            inspiration through Sanatan.
          </p>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card reveal visible" key={i}>
              <div className="review-quote">"</div>
              <div className="review-stars">★★★★★</div>
              <div className="review-text">{r.text}</div>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-loc">{r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="stats-band reveal visible"
          style={{ maxWidth: "900px", margin: "72px auto 0" }}
        >
          <div className="stat-band-item">
            <span className="stat-band-val">4.8★</span>
            <span className="stat-band-lbl">Average Rating</span>
          </div>
          <div className="stat-band-item">
            <span className="stat-band-val">2M+</span>
            <span className="stat-band-lbl">Devotees Worldwide</span>
          </div>
          <div className="stat-band-item">
            <span className="stat-band-val">50K+</span>
            <span className="stat-band-lbl">5-Star Reviews</span>
          </div>
          <div className="stat-band-item">
            <span className="stat-band-val">108+</span>
            <span className="stat-band-lbl">Sacred Mantras</span>
          </div>
        </div>
      </div>
    </section>
  );
}