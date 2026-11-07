//login창 여닫단
document.getElementById("loginBtn").addEventListener("click", () => {
    document.getElementById("loginDialog").showModal();
});
document.getElementById("login나가기").addEventListener("click", () => {
    document.getElementById("loginDialog").close();
});

// TODO - 회원가입span 에이리로 다이얼로그도 맨들고 ㅇㅇ