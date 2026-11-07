//login창 여닫단
document.getElementById("loginBtn").addEventListener("click", () => {
    document.getElementById("loginDialog").showModal();
});
document.getElementById("login나가기").addEventListener("click", () => {
    document.getElementById("loginDialog").close();
});