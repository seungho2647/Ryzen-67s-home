//topBtn 누르면 dialog 열리게 하기
document.getElementById("구단소식").addEventListener("click", () => {
    document.getElementById("구단소식dialog").showModal();
});
document.getElementById("투수").addEventListener("click", () => {
    document.getElementById("투수dialog").showModal();
});
document.getElementById("타자").addEventListener("click", () => {
    document.getElementById("타자dialog").showModal();
});
//나가기 단추 누르면 dialog 닫기
document.getElementById("구단소식나가기").addEventListener("click", () => {
    document.getElementById("구단소식dialog").close();
});
document.getElementById("투수나가기").addEventListener("click", () => {
    document.getElementById("투수dialog").close();
});
document.getElementById("타자나가기").addEventListener("click", () => {
    document.getElementById("타자dialog").close();
});