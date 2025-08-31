import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>聯絡方式</h2>
        <div className="contact-content">
          <p className="contact-description">
            歡迎透過以下方式與我聯繫，一起分享鉤織的樂趣！
          </p>
          
          <div className="social-links">
            <a 
              href="https://www.instagram.com/crochetpei/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <div className="social-icon">📷</div>
              <span>Instagram</span>
            </a>
            
            <a 
              href="#" 
              className="social-link facebook"
            >
              <div className="social-icon">📘</div>
              <span>Facebook</span>
            </a>
            
            <a 
              href="#" 
              className="social-link threads"
            >
              <div className="social-icon">🧵</div>
              <span>Threads</span>
            </a>
            
            <a 
              href="#" 
              className="social-link line"
            >
              <div className="social-icon">💬</div>
              <span>Line</span>
            </a>
          </div>
          
          <div className="contact-info">
            <p>📧 Email: crochetpei@example.com</p>
            <p>📱 手機: 0912-345-678</p>
            <p>📍 地址: 台灣</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
