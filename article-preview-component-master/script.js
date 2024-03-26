const box = document.querySelector(".box");
const box_share = document.querySelector(".box-share");
const share = document.querySelector(".share");
const share_con = document.querySelector(".share-con");

share.addEventListener("click", (e) => {
  console.log("oldu");
  box.classList.toggle("hidden");
  box.classList.toggle("colored");

  share.classList.toggle("reverse");
});
