import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-container">
        <h2>關於我</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              大家好！我是 Crochet Pei，一位熱愛鉤織的手工藝創作者。
              從小就對手工藝充滿熱情，特別喜歡用毛線編織出美麗的作品。
            </p>
            <p>
              每一件作品都承載著我的心意和創意，希望能為大家帶來溫暖與美好。
              無論是實用的生活用品，還是精美的裝飾品，都希望能觸動您的心。
            </p>
            <p>
              如果您對我的作品感興趣，或有任何客製化需求，歡迎隨時與我聯繫！
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <span>照片區域</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
