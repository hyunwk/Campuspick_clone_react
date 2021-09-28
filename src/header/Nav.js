import React from "react";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav style={{ flexBasis: "600px", textAlign: "center", padding: "12px" }}>
      <NavButton current href="/">
        홈
      </NavButton>
      <NavButton gnb href="/">커뮤니티</NavButton>
      <NavButton href="/">동아리</NavButton>
      <NavButton href="/">대외활동</NavButton>
      <NavButton href="/">공모전</NavButton>
      <NavButton href="/">스터디</NavButton>
      <NavButton href="/">취업정도</NavButton>
      <NavButton href="/">이벤트</NavButton>
      <NavButton href="/">게시요청</NavButton>
    </nav>
  );
};

export default Nav;
