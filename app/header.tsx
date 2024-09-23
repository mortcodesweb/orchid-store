"use client";

import React, { useEffect, useState } from 'react';

export default function OrchidStoreHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`orchid-header ${scrolled ? 'out-of-immersion' : ''}`}>
      <div className="layout-padder">
        <a href="#" className="menu-button"></a>
        <a href="#" className="home-button"></a>

        <form action="" className="search-bar">
          <div className="input-area-container">
            <div className="input-area">
              <input type="text" name="" id="" placeholder="Search your intrest..." />
              <button type="reset" className="close-button"></button>
            </div>

            <button type="submit" className="search-button"></button>
          </div>
        </form>
      </div>
    </div>
  );
}
