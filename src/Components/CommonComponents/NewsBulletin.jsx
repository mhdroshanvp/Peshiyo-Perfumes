import React, { useState, useEffect } from 'react';
import './NewsBulletin.css';

const newsItems = [
    "New Perfume Collection Launching Soon!",
    "Limited-Time Offer: Get 20% Off on Selected Scents!",
    "Follow Us on Instagram for Exclusive Deals!",
    "You can customize our perfumes depending on your choice."
];

function NewsBulletin() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, 3000); // Change news every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="news-bulletin">
            <p>{newsItems[index]}</p>
        </div>
    );
}

export default NewsBulletin;
