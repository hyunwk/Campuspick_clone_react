import React from "react";

const Account = () => {
  return <div>
    <button style={{ height: 34, fontSize: '13px', cursor: 'pointer', backgroundColor: '#fff', border: 'none', padding: 8, fontWeight: 'bold',borderRadius: 4, color: '#0aafdf'}} href="/login">마이페이지</button>
    <button style={{ height: 34, fontSize: '13px', cursor: 'pointer', border: '1px solid #fff', color: '#fff', fontWeight: 'bold', padding: 8, borderRadius: 4, marginLeft: 4, backgroundColor: 'transparent'}} href="/login">회원가입</button>
  </div>;
};

export default Account;
