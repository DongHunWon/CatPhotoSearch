class SearchRandom {
  constructor({ onRandom }) {
    const $randomBtn = document.createElement("button");
    $randomBtn.id = "random-btn";
    $randomBtn.innerHTML = "랜덤";

    const $inputWrap = document.querySelector(".inputWrap");
    $inputWrap.appendChild($randomBtn);

    $randomBtn.addEventListener("click", e => {
      document.querySelector(".SearchInput").value = ''
      document.querySelector(".loading").style.display = "block";
      document.querySelector(".empty").style.display = "none";
      onRandom();
    });
  }
}