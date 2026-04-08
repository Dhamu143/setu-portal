export default function MantraMarquee() {
  const items = [
    "Aarti", "Bhajans", "Mantras", "Temples", "Slokas",
    "Horoscope", "Chalisa", "Panchang", "Dharma News", "Wallpapers",
  ];

  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div className="features-strip">
      <div className="strip-track">
        {all.map((item, i) => (
          <span className="strip-item" key={i}>
            <span className="strip-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}