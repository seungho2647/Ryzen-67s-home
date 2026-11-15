//기초 환경설정
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

//회원가입창 여닫단
회원가입Dialog열기.addEventListener("click", () => {
    loginDialog.close();
    회원가입Dialog.showModal();
});
회원가입Dialog나가기.addEventListener("click", () => {
    회원가입Dialog.close();
});

// 경기 일정 및 기록 json 연결
async function loadDivCards() {
    const responce = await fetch("./data.json");
    const items = await responce.json();
    const container = document.getElementById("scheduleCard");

    items.forEach(item => {
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML =`
            <h2>${item.date}</h2>
            ${item.score ? `<h2>${item.score}</h2>` : ""}
            <h4>${item.who}</h4>
            <p>${item.whereWhen}</p>
        `;
        container.appendChild(cardDiv);
        cardDiv.classList.add("card");
    });
}
loadDivCards();