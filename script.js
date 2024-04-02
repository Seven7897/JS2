"use script";

const divEl = document.querySelector(".content");
const btn = document.createElement("button");
divEl.appendChild(btn);
btn.textContent = "отправить";
btn.onclick = () => {
  btn.textContent = "отправлено";
};
