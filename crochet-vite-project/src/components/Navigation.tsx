import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Crochet Pei</h2>
        </div>
        
        {/* 桌面版選單 */}
        <ul className="nav-menu">
          <li><a href="#home">首頁</a></li>
          <li><a href="#products">作品集</a></li>
          <li><a href="#about">關於我</a></li>
          <li><a href="#contact">聯絡方式</a></li>
        </ul>
        
        {/* 手機版漢堡選單按鈕 */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
      
      {/* 手機版選單 */}
      <ul className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>首頁</a></li>
        <li><a href="#products" onClick={() => setIsMenuOpen(false)}>作品集</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>關於我</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>聯絡方式</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
