import { useState, useEffect } from "react";
import "./NewsBulletin.css";

const newsItems = [
  "New Perfume Collection Launching Soon!",
  "Limited-Time Offer: Get 20% Off on Selected Scents!",
  "Follow Us on Instagram for Exclusive Deals!",
  "You can customize our perfumes depending on your choice.",
];

function NewsBulletin() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-bulletin">
      <div className="news-container">
        <p key={index} className="news-item">{newsItems[index]}</p>
      </div>
    </div>
  );
}

export default NewsBulletin;
