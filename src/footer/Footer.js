import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <a className="bold" href="/">
        © 캠퍼스픽
      </a>
      <a href="/page/serviceagrreemnet">이용약관</a>
      <a className="bold" href="/page/privacy">
        개인정보처리방침
      </a>
      <a href="/page/rules">커뮤니티이용규칙</a>
      <a href="/page/faq">문의하기</a>
    </footer>
  );
};

export { Footer };
