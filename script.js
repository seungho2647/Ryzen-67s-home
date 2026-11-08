const loginDialog열기 = document.getElementById("loginDialog열기")
const loginDialog나가기 = document.getElementById("loginDialog나가기")
const loginDialog = document.getElementById("loginDialog")
const 회원가입Dialog열기 = document.getElementById("회원가입Dialog열기")
const 회원가입Dialog나가기 = document.getElementById("회원가입Dialog나가기")
const 회원가입Dialog = document.getElementById("회원가입Dialog")
//login창 여닫단
loginDialog열기.addEventListener("click", () => {
    loginDialog.showModal();
});
loginDialog나가기.addEventListener("click", () => {
    loginDialog.close();
});
// TODO - 회원가입열기 에이리로 다이얼로그도 맨들고 ㅇㅇ
//회원가입창 여닫단
회원가입Dialog열기.addEventListener("click", () => {
    loginDialog.close();
    회원가입Dialog.showModal();
});
회원가입Dialog나가기.addEventListener("click", () => {
    회원가입Dialog.close();
});