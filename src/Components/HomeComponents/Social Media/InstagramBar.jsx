import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './InstagramBar.css';

const SCROLL_REVEAL_AT = 320;

const InstagramBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > SCROLL_REVEAL_AT) {
        setVisible(true);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`instagram-float ${visible ? 'instagram-float--visible' : ''}`}
      role="complementary"
      aria-label="Instagram"
    >
      <p className="instagram-float__text">Let&apos;s connect on Instagram</p>
      <a
        href="https://www.instagram.com/peshiyo_/"
        target="_blank"
        rel="noreferrer"
        className="instagram-float__link hover-target"
      >
        <FaInstagram className="instagram-float__icon" aria-hidden />
        <span className="instagram-float__handle">@peshiyo_</span>
      </a>
    </div>
  );
};

export default InstagramBar;
